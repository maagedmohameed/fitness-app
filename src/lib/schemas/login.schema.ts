import { z } from "zod";
import type { Translation } from "../types/global";

export const LoginSchema = (t: Translation) =>
  z.object({
    email: z.string().min(1, t("emailRequired")).email(t("emailInvalid")),
    password: z
      .string()
      .min(1, t("password-required"))
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
        t("strong-password"),
      ),
  });

export type T_LoginFormValues = z.infer<ReturnType<typeof LoginSchema>>;
