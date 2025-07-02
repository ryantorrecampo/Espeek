const ASSETS_BASE_PATH = "/assets/sprites/pokemon/official-artwork"

/**
 * Get the asset path for a Pokémon sprite.
 * @param pokemonId Pokédex number (or string ID)
 */
export const getArtwork = (pokemonId: string) => {
  // Example file: /assets/sprites/pokemon/official-artwork/1.png
  return {
    default: `${ASSETS_BASE_PATH}/${pokemonId}.png`,
    shiny: `${ASSETS_BASE_PATH}/shiny/${pokemonId}.png`,
  }
}
