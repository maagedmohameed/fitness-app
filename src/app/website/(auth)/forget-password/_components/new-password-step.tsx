"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { putResetPassword } from "@/lib/apis/auth/forgot-password.api";

type NewPasswordStepProps = {
  email: string;
  otpToken?: string;
};

export default function NewPasswordStep({
  email,
  otpToken,
}: NewPasswordStepProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await putResetPassword(email, newPassword, otpToken);
      toast.success("Password updated successfully");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to reset password. Please try again.",
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-center text-white text-[2.8rem]">Create New Password</h2>

      <form id="create-password-form" className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <h3 className="font-regular text-center text-white text-2xl">Enter New Password</h3>
        <div className="relative">
          <Input
            id="create-new-password"
            placeholder="********"
            className="h-11 border-white/30 text-white pr-10 placeholder:text-white"
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <div className="relative">
          <Input
            id="confirm-new-password"
            placeholder="********"
            className="h-11 border-white/30 text-white pr-10 placeholder:text-white"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {error ? <p className="text-destructive text-sm">{error}</p> : null}

        <button
          type="submit"
          className="bg-primary text-sm text-white w-full h-11 cursor-pointer rounded-lg"
        >
          Reset Password
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
