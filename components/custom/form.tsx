"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export type FormData = z.infer<typeof formSchema>;

export type FormState = {
  success: boolean;
  errors?: {
    username?: string[];
    server?: string;
  };
  data?: FormData;
};

export type FormAction = (prevState: FormState, formData: FormData) => Promise<FormState>;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
type FormClientProps = {
  initialData: FormData;
  formAction: FormAction;
};
export function CForm({ initialData, formAction }: FormClientProps) {
  const [state, action] = useFormState(formAction, { success: false, errors: {} });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const onSubmit = (values: FormData) => {
    action(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage>{state.errors?.username}</FormMessage>
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
