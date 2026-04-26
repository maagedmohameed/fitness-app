import { AuthContext } from "@/hooks/auth-context";
import { useLogout } from "@/hooks/auth/use-logout";
import type { UserDetails } from "@/lib/types/user";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Translations
  const t = useTranslations("profile.user-settings");

  // States
  const [user, setUser] = useState<UserDetails>({
    firstName: "Maged",
    lastName: "Mohamed",
    email: "magdahmed624@gmail.com",
    gender: "male",
    age: 70,
    weight: 70,
    height: 170,
    activityLevel: "level1",
    goal: "lose weight",
    photo: "https://fitness.elevateegy.com/uploads/default-profile.png",
  });

  // Hooks

  const { logout, error } = useLogout();

  // Functions
  const signOut = async () => {
    try {
      await logout();

      toast.success(t("logout.validation.toast.success"));

      if (!error) {
        localStorage.setItem("user_token", "");

        setUser({
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          age: 0,
          weight: 0,
          height: 0,
          activityLevel: "level1",
          goal: "lose weight",
          photo: "",
        });

        redirect("/");
      }
    } catch (error) {
      console.error(error);

      toast.error(t("logout.validation.toast.error"));
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
