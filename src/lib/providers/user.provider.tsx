"use client";

import { createContext, useContext, useState } from "react";

type TUserContextDetails = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
};

type TUserContext = {
  user: TUserContextDetails;
  setUser: React.Dispatch<React.SetStateAction<TUserContextDetails>>;
};

const UserContext = createContext<TUserContext>({
  user: {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    age: 0,
    weight: 0,
    height: 0,
    activityLevel: "",
    goal: "",
    photo: "",
  },
  setUser: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<TUserContextDetails>({
    firstName: "Maged",
    lastName: "Mohamed",
    email: "magdahmed624@gmail.com",
    gender: "male",
    age: 70,
    weight: 70,
    height: 170,
    activityLevel: "level1",
    goal: "Gain weight",
    photo: "https://fitness.elevateegy.com/uploads/default-profile.png",
  });

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
}
export const useUserContext = () => useContext(UserContext);
