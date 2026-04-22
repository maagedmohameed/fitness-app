import { AuthContext } from "@/hooks/auth-context";
import { useLogout } from "@/hooks/auth/use-logout";
import type { UserDetails } from "@/lib/types/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
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
  const navigate = useNavigate();
  // const { logout, error } = useLogout();

  // Functions
  const signOut = async () => {
    try {
      // await logout();
      // if (!error) {
      //   localStorage.removeItem("user_token");
      //   setUser(null);
      //   navigate("/login");
      // }
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
