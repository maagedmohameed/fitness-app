import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useTranslations } from "use-intl";
import { Input } from "@/components/ui/input";
import {
  postForgotPassword,
  postVerifyResetCode,
} from "@/lib/apis/auth/forgot-password.api";

type OtpStepProps = {
  email: string;
  onNext: (token?: string) => void;
  onBack: () => void;
};

export default function OtpStep({ email, onNext, onBack }: OtpStepProps) {
  const t = useTranslations("forget-password.otp-step");
  const tCommon = useTranslations("forget-password.common");
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [error, setError] = useState("");

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(v => v - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    setCountdown(60);
    try {
      await postForgotPassword(email);
      toast.success(t("toast.sent"));
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : t("toast.send-failed")
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!otp || otp.length !== 6) {
      setError(t("errors.invalid-length"));
      return;
    }

    try {
      const data = await postVerifyResetCode(email, otp);
      onNext(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("errors.invalid"));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        className="self-start text-primary underline cursor-pointer"
        onClick={onBack}
      >
        {tCommon("back")}
      </button>

      <h2 className="font-bold text-center text-white text-2xl sm:text-[2.8rem]">
        {t("title")}
      </h2>

      <form
        id="otp-step-form"
        className="mt-8 space-y-4"
        onSubmit={handleSubmit}
      >
        <h3 className="font-regular text-center text-white text-2xl">
          {t("subtitle")}
        </h3>
        <Input
          placeholder={t("otp-placeholder")}
          maxLength={6}
          value={otp}
          onChange={e => setOtp(e.target.value)}
          className="h-12 rounded-[20px] border-white/30 text-white placeholder:text-white"
        />

        {error ? <p className="text-destructive text-sm">{error}</p> : null}

        {countdown > 0 ? (
          <p className="text-gray-300 text-sm text-center">
            {t("countdown", { seconds: countdown })}
          </p>
        ) : (
          <p className="text-center text-sm">
            <button
              type="button"
              className="text-primary underline"
              onClick={handleResend}
            >
              {t("resend")}
            </button>
          </p>
        )}

        <button
          type="submit"
          className="bg-primary text-sm text-white w-full h-11 cursor-pointer rounded-lg"
        >
          {t("submit")}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-white">
        {tCommon("no-account")}
        <Link to="/auth/register" className="text-primary ps-1">
          {tCommon("create-yours")}
        </Link>
      </p>
    </div>
  );
}
