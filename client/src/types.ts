export const TYPE_COLORS: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
}

export const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ko", label: "한국어" },
  { value: "ja", label: "日本語" },
]

type GenerationOption = {
  value: string
  label: string
  description: string
  key: string
  games: string[]
  maxPokemonId: number
}

export const GENERATION_OPTIONS: GenerationOption[] = [
  { value: "1", label: "Gen I", description: "Kanto", key: "generation-i", games: ["red-blue", "yellow"], maxPokemonId: 151 },
  { value: "2", label: "Gen II", description: "Johto", key: "generation-ii", games: ["gold", "silver", "crystal"], maxPokemonId: 251 },
  { value: "3", label: "Gen III", description: "Hoenn", key: "generation-iii", games: ["ruby-sapphire", "emerald", "firered-leafgreen"], maxPokemonId: 386 },
  { value: "4", label: "Gen IV", description: "Sinnoh", key: "generation-iv", games: ["diamond-pearl", "platinum"], maxPokemonId: 493 },
]
