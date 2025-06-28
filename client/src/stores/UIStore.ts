import { create } from "zustand";

// type Language = "en" | "ko" | "jp";

interface PokemonState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useUIStore = create<PokemonState>()((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
}));
