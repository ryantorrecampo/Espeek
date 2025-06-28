import { create } from "zustand";

interface PokemonState {
  selectedPokemonID: number | null;
  setSelectedPokemonID: (id: number) => void;
  clearSelectedPokemonID: () => void;
}

export const usePokemonStore = create<PokemonState>()((set) => ({
  selectedPokemonID: 1,
  setSelectedPokemonID: (id) => set({ selectedPokemonID: id }),
  clearSelectedPokemonID: () => set({ selectedPokemonID: null }),
}));
