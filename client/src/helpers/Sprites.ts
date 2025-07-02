import { GENERATION_OPTIONS } from "@/types"

type SpriteInfo = {
  game: string
  paths: string[]
}

const ASSETS_BASE_PATH = "/assets/sprites/pokemon"

/**
 * Get the asset path for a Pokémon sprite.
 * @param generation Pokédex generation string (e.g. "generation-iii")
 * @param pokemonId Pokédex number (or string ID)
 */
export const getSpritePaths = (generationNumber: string, pokemonId: number | string): SpriteInfo[] => {
  // Example file: /assets/sprites/versions/generation-iii/emerald/1.png

  const generation = GENERATION_OPTIONS.find((gen) => gen.value === generationNumber)
  if (!generation) return []

  const paths: SpriteInfo[] = []

  generation.games.forEach((game) => {
    if (game === "firered-leafgreen" && Number(pokemonId) > 151) return
    let basePath = `${ASSETS_BASE_PATH}/${generation.key}/${game}`

    // For Gen 1, don't include shiny
    if (generation.key === "generation-i") {
      paths.push({ game, paths: [`${basePath}/${pokemonId}.png`] })
    } else {
      paths.push({ game, paths: [`${basePath}/${pokemonId}.png`, `${basePath}/shiny/${pokemonId}.png`] })
    }
  })
  return paths
}
