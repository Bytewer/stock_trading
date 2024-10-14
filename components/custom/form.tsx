"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInFormData, signInSchema } from "@/lib/zod";

export type SignInFormState = {
  success: boolean;
  errors?: {
    email?: string[];
    redirectTo?: string[];
    password?: string[];
    server?: string;
  };
  data?: SignInFormData;
};

export type FormAction = (
  prevState: SignInFormState,
  formData: SignInFormData
) => Promise<SignInFormState>;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
type SignInProps = {
  initialData: SignInFormData;
  formAction: FormAction;
};
export function CForm({ initialData, formAction }: SignInProps) {
  const [state, action] = useFormState(formAction, { success: false, errors: {} });

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: initialData,
  });

  const onSubmit = (values: SignInFormData) => {
    action(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage>{state.errors?.email}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage>{state.errors?.password}</FormMessage>
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
      {state.success && <p>Form submitted successfully!</p>}
      {state.errors?.server && <p className="text-red-500">{state.errors.server}</p>}
    </Form>
  );
}
