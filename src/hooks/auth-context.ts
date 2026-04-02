import type { User } from "@/lib/types/user";
import { useContext } from "react";
import { createContext } from "react";

type AuthContextValue = {
  user: User | null;
  setUser: (user: User) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
