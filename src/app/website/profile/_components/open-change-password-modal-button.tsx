import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ChangeUserPasswordFormFields } from "@/lib/types/auth";
import { useTranslations } from "use-intl";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { changeUserPasswordSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/language.context";
import { useChangeUserPassword } from "@/hooks/auth/use-change-user-password";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { getItem, setItem, setToken } from "@/lib/utils/cookie";

export function OpenChangePasswordModalButton() {
  // Translation
  const t = useTranslations("profile.user-settings.change-password");
  const T = useTranslations("auth.forgot-password");

  // Hooks
  const { dir } = useLanguage();
  // const { user } = useAuth();

  // Mutation
  const {
    isPending,
    // error,
    // data,
    mutate: changePassword,
  } = useChangeUserPassword();

  // States
  const [modalState, setModalState] = useState(false);

  const handleOpenChange = (open: boolean) => {
    // Important: reset stale values/errors when closing to prevent confusing reopen states.
    if (!open) form.reset();
    setModalState(open);
  };

  const form = useForm<ChangeUserPasswordFormFields>({
    resolver: zodResolver(changeUserPasswordSchema(T)),
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  //  Functions
  const onSubmit: SubmitHandler<ChangeUserPasswordFormFields> = values => {
    changePassword(values, {
      onSuccess: data => {
        toast.success(t("validation.toast.success"));

        setToken(data.token);

        setItem("user", { ...getItem("user"), token: data.token });

        form.reset();

        setModalState(false);
      },
      onError: () => {
        toast.error(t("validation.toast.error"));
      },
    });
  };

  return (
    <Dialog open={modalState} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="font-semibold text-foreground text-lg capitalize leading-none tracking-[0.26px]">
          {t("modal-button")}
        </button>
      </DialogTrigger>

      <DialogContent className="p-10 rounded-[2.5rem]">
        {/* Form  */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
            dir={dir}
            data-lang={dir}
          >
            {/* Header */}
            <header className="flex flex-col justify-center gap-2 rtl:gap-4 font-baloothambi2 rtl:font-cairo text-muted-foreground text-center capitalize">
              {/* Title text  */}
              <DialogTitle className="font-extrabold text-5xl leading-none">
                {t("title")}
              </DialogTitle>

              {/* Description Text  */}
              <DialogDescription className="text-2xl">
                {t("description")}
              </DialogDescription>
            </header>

            {/* Content */}
            <div className="space-y-6 mx-auto w-[70%]">
              <FieldGroup dir={dir} data-lang={dir} className="space-y-0">
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="new-password"
                        disabled={isPending}
                        aria-invalid={fieldState.invalid}
                        // Important: explicit ARIA wiring improves screen-reader error context.
                        aria-describedby={
                          fieldState.invalid ? "new-password-error" : undefined
                        }
                        placeholder={t("inputs.new-password.placeholder")}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          id="new-password-error"
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="newPassword"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        type="password"
                        autoComplete="new-password"
                        disabled={isPending}
                        aria-invalid={fieldState.invalid}
                        // Important: explicit ARIA wiring improves screen-reader error context.
                        aria-describedby={
                          fieldState.invalid
                            ? "confirm-password-error"
                            : undefined
                        }
                        placeholder={t("inputs.confirm-password.placeholder")}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          id="confirm-password-error"
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              {/* Change password button */}
              <Button
                type="submit"
                className="w-full rtl:font-cairo font-extrabold text-base"
                disabled={
                  isPending ||
                  !form.formState.isValid ||
                  !form.formState.isDirty
                }
                aria-busy={isPending}
              >
                {t("confirm-password-button")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
