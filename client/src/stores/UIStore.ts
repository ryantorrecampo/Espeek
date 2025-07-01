import { create } from "zustand"

interface PokemonState {
  language: string
  setLanguage: (lang: string) => void
  generation: string
  setGeneration: (gen: string) => void
}

export const useUIStore = create<PokemonState>()((set) => ({
  language: localStorage.getItem("language") || "en",
  setLanguage: (lang) => {
    localStorage.setItem("language", lang)
    set({ language: lang })
  },
  generation: localStorage.getItem("generation") || "1",
  setGeneration: (gen) => {
    localStorage.setItem("generation", gen)
    set({ generation: gen })
  },
}))
