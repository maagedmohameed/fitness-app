import { changeUserPassword } from "@/lib/apis/user.api";
import type { ChangeUserPasswordFormFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";

export function useChangeUserPassword() {
  const { isPending, data, error, mutate } = useMutation({
    mutationKey: ["change-user-password"],
    mutationFn: (payload: ChangeUserPasswordFormFields) =>
      changeUserPassword(payload),
  });

  return { isPending, data, error, mutate };
}
