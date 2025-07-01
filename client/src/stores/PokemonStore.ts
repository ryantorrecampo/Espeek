import { create } from "zustand"
import { persist } from "zustand/middleware"

interface PokemonState {
  selectedPokemonID: number | null
  setSelectedPokemonID: (id: number) => void
  clearSelectedPokemonID: () => void
}

export const usePokemonStore = create<PokemonState>()(
  persist(
    (set) => ({
      selectedPokemonID: 1,
      setSelectedPokemonID: (id) => set({ selectedPokemonID: id }),
      clearSelectedPokemonID: () => set({ selectedPokemonID: null }),
    }),
    {
      name: "pokemon-store", // unique name for localStorage key
    }
  )
)
