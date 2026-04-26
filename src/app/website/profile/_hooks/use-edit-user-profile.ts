import { editUserProfile } from "@/lib/apis/user.api";
import type { ChangeUserDetailsFormFields } from "@/lib/types/auth";
import { useMutation } from "@tanstack/react-query";

export function useEditUserProfile() {
  const { isPending, data, error, mutate } = useMutation({
    mutationKey: ["edit-user-profile"],
    mutationFn: (payload: ChangeUserDetailsFormFields) =>
      editUserProfile(payload),
  });

  return { isPending, data, error, mutate };
}
