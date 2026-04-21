import type { UserDetails } from "@/lib/types/user";
import { useContext } from "react";
import { createContext } from "react";

type AuthContextValue = {
  user: UserDetails;
  setUser: (user: UserDetails) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    age: 0,
    weight: 0,
    height: 0,
    goal: "gain weight",
    activityLevel: "level1",
    photo: "",
  },
  setUser: () => {},
  signOut: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
