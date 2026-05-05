import { useState } from "react";
import { useTranslations } from "use-intl";
import { Input } from "@/components/ui/input";
import { postForgotPassword } from "@/lib/apis/auth/forgot-password.api";

type EmailStepProps = {
  email: string;
  setEmail: (email: string) => void;
  onNext: () => void;
};

export default function EmailStep({
  email,
  setEmail,
  onNext,
}: EmailStepProps) {
  const t = useTranslations("forget-password.email-step");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || email.trim() === "") {
      setError(t("errors.required"));
      return;
    }

    try {
      await postForgotPassword(email);
      onNext();
    } catch (err) {
      setError(err instanceof Error ? err.message : t("errors.send-failed"));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-center text-white text-[2.8rem]">
        {t("title")}
      </h2>

      <form
        id="email-step-form"
        className="mt-8 space-y-4"
        onSubmit={handleSubmit}
      >
        <h3 className="font-regular text-center text-white text-2xl">
          {t("subtitle")}
        </h3>
        <Input
          id="forget-form-email"
          placeholder={t("email-placeholder")}
          type="email"
          className="h-12 rounded-[20px] border-white/30 text-white placeholder:text-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        {error ? <p className="text-destructive text-sm">{error}</p> : null}

        <button
          type="submit"
          className="bg-primary text-sm text-white w-full h-11 cursor-pointer rounded-lg"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
