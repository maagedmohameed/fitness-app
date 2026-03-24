import type { Muscle, MuscleGroup } from "../types/muscle";

const API = import.meta.env.VITE_API;

export async function getMusclesGroups(locale: string) {
  const response = await fetch(`${API}/muscles`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch muscles groups");
  }

  const payload: ApiResponse<{ musclesGroup: MuscleGroup[] }> =
    await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}

export async function getMusclesGroupsById(id: string, locale: string) {
  const response = await fetch(`${API}/musclesGroup/${id}`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch muscles groups by id ${id}`);
  }

  const payload: ApiResponse<{
    muscleGroup: MuscleGroup;
    muscles: Muscle[];
  }> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}

export async function getRandomMuscles(locale: string) {
  const response = await fetch(`${API}/muscles/random`, {
    headers: {
      "Accept-Language": locale,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch full body muscles group}`);
  }

  const payload: ApiResponse<{
    totalMuscles: number;
    muscles: Muscle[];
  }> = await response.json();

  if ("error" in payload) {
    throw new Error(payload.error as string);
  }

  return payload;
}
