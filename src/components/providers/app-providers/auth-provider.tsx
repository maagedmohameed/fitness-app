import { AuthContext } from "@/hooks/auth-context";
import { useLogout } from "@/hooks/auth/use-logout";
import type { User } from "@/lib/types/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { logout, error } = useLogout();

  const signOut = async () => {
    try {
      await logout();
      if (!error) {
        localStorage.removeItem("user_token");
        setUser(null);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
