import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { SignInForm } from "@/components/custom/signin-form";
import { SignInFormData } from "@/lib/types";
import { signInSchema } from "@/lib/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";

async function fetchInitialData(): Promise<SignInFormData> {
  // 模拟从数据库获取初始数据
  return { email: "q@q.com", password: "password", redirectTo: "/" };
}

export async function formAction(prevState: any, formData: SignInFormData) {
  "use server";
  const validatedData = signInSchema.safeParse(formData);

  if (!validatedData.success) {
    return { success: false, errors: validatedData.error.flatten().fieldErrors };
  }

  try {
    // 在这里处理表单数据，例如保存到数据库
    console.log("Form submitted with:", validatedData.data);
    // 假设这里有一个异步操作，比如保存到数据库
    // await saveToDatabase(validatedData.data);
    const result = await signIn("credentials", validatedData.data);
    return { success: true, data: validatedData.data };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, errors: { server: "An error occurred while submitting the form" } };
  }
}

export async function ServerForm() {
  const initialData = await fetchInitialData();

  return <SignInForm initialData={initialData} formAction={formAction} />;
}
const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  return (
    <div className="flex flex-col gap-2">
      <ServerForm />
      <form
        action={async (formData) => {
          "use server";
          // const userSchema = z.object({
          //   email: z.string().email(),
          //   password: z.string(),
          // });
          // const data = userSchema.parse(formData); // 使用 parse() 验证数据
          // // 使用验证后的数据
          // console.log(data);
          try {
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`/error?error=${error.type}`);
            }
            throw error;
          }
        }}
      >
        <Label htmlFor="email">
          Email
          <Input name="email" id="email" />
        </Label>
        <Label htmlFor="password">
          Password
          <Input name="password" id="password" />
        </Label>
        <Input name="redirectTo" id="redirectTo" defaultValue="/" hidden className="hidden" />
        <Input type="submit" value="Sign In" />
      </form>
      {/* {Object.values(providerMap).map((provider) => (
        <form
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                redirectTo: props.searchParams?.callbackUrl ?? "",
              });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`/error?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))} */}
    </div>
  );
}
