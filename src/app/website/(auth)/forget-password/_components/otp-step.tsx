"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
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
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [error, setError] = useState("");

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown((v) => v - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    setCountdown(60);
    try {
      await postForgotPassword(email);
      toast.success("OTP sent successfully");
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send OTP. Please try again.",
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit code.");
      return;
    }

    try {
      const data = await postVerifyResetCode(email, otp);
      onNext(data.token);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid code. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button type="button" className="self-start text-primary underline cursor-pointer" onClick={onBack}>
        Back
      </button>

      <h2 className="font-bold text-center text-white text-[2.8rem]">Verify OTP</h2>

      <form id="otp-step-form" className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <h3 className="font-regular text-center text-white text-2xl">Enter OTP Code</h3>
        <Input
          placeholder="Enter 6-digit code"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="h-11 border-white/30 text-white placeholder:text-white"
        />

        {error ? <p className="text-destructive text-sm">{error}</p> : null}

        {countdown > 0 ? (
          <p className="text-gray-300 text-sm text-center">
            You can request another code in {countdown}s
          </p>
        ) : (
          <p className="text-center text-sm">
            <button
              type="button"
              className="text-primary underline"
              onClick={handleResend}
            >
              Resend
            </button>
          </p>
        )}

        <button
          type="submit"
          className="bg-primary text-sm text-white w-full h-11 cursor-pointer rounded-lg"
        >
          Verify Code
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-white">
        Don’t have an account?
        <Link to="/register" className="text-primary ps-1">
          Create yours
        </Link>
      </p>
    </div>
  );
}
