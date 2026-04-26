import type z from "zod";
import type { RegisterSchema } from "../schemes/register.schema";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female";
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  _id: string;
  createdAt: string;
};

export type RegisterResponse = {
  message: string;
  user: User;
  token: string;
};

export type T_RegisterFormValues = z.infer<typeof RegisterSchema>;
