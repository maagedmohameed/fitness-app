"use client";

import { useState } from "react";
import EmailStep from "./_components/email-step";
import OtpStep from "./_components/otp-step";
import NewPasswordStep from "./_components/new-password-step";

export default function ForgetPasswordPage() {
  const [step, setStep] = useState<"email" | "otp" | "new-password">("email");
  const [email, setEmail] = useState("");
  const [otpToken, setOtpToken] = useState<string | undefined>(undefined);

  return (
    <main className="min-h-screen bg-[#171717] px-4 py-14 flex items-center justify-center">
      <div className="w-full max-w-md rounded-xl border border-[#D3D3D3] p-6">
        {step === "email" ? (
          <EmailStep email={email} setEmail={setEmail} onNext={() => setStep("otp")} />
        ) : null}

        {step === "otp" ? (
          <OtpStep
            email={email}
            onNext={(token) => {
              setOtpToken(token);
              setStep("new-password");
            }}
            onBack={() => setStep("email")}
          />
        ) : null}

        {step === "new-password" ? (
          <NewPasswordStep email={email} otpToken={otpToken} />
        ) : null}
      </div>
    </main>
  );
}
