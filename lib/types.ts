import { z } from "zod";
import { signInSchema } from "./zod";

export type SignInFormData = z.infer<typeof signInSchema>;
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
export type SignInProps = {
  initialData: SignInFormData;
  formAction: SignInFormAction;
};
export type SignInFormAction = (
  prevState: SignInFormState,
  formData: SignInFormData
) => Promise<SignInFormState>;
