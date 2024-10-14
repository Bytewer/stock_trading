import { CForm } from "@/components/custom/form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

async function fetchInitialData(): Promise<FormData> {
  // 模拟从数据库获取初始数据
  return { username: "" };
}

export async function formAction(prevState: any, formData: FormData) {
  "use server";

  const validatedData = formSchema.safeParse(formData);

  if (!validatedData.success) {
    return { success: false, errors: validatedData.error.flatten().fieldErrors };
  }

  try {
    // 在这里处理表单数据，例如保存到数据库
    console.log("Form submitted with:", validatedData.data);
    // 假设这里有一个异步操作，比如保存到数据库
    // await saveToDatabase(validatedData.data);
    return { success: true, data: validatedData.data };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, errors: { server: "An error occurred while submitting the form" } };
  }
}

export default async function ServerForm() {
  const initialData = await fetchInitialData();

  return <CForm initialData={initialData} formAction={formAction} />;
}
