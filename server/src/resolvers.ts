import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    pokemon: (_, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemon(id);
    },
    pokemonSpecies: (_, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemonSpecies(id);
    },
    generation: (_, { generationNumber }, { dataSources }) => {
      return dataSources.pokeAPI.getGeneration(generationNumber);
    },
    generations: async (_, { generationNumbers }, { dataSources }) => {
      return Promise.all(
        generationNumbers.map((num: number) =>
          dataSources.pokeAPI.getGeneration(num)
        )
      );
    },
    evolutionChain: (_, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getEvolutionChain(id);
    },
  },
  PokemonSpecies: {
    // This resolver is called for every 'id' field on a 'PokemonSpecies' object
    id: (parent) => {
      // The `parent` object here is what was returned from the PokeAPI's
      // `generation` endpoint for a single species, e.g.,
      // { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon-species/1/" }
      const urlParts = parent.url.split("/");
      const id = urlParts[urlParts.length - 2];
      return id;
    },
    names: async (parent, _, { dataSources }) => {
      // Fetch the full species data to get names in different languages
      const species = await dataSources.pokeAPI.getPokemonSpecies(parent.name);
      return species.names;
    },
  },
  Pokemon: {
    names: async (parent, _, { dataSources }) => {
      const species = await dataSources.pokeAPI.getPokemonSpecies(parent.id);
      return species.names;
    },
    moves: async (parent, _, { dataSources }) => {
      const moveEntries = parent.moves; // These come from the API, e.g., [{ move: { name, url } }]

      // Use a cache or batch-fetch if you can
      const enrichedMoves = await Promise.all(
        moveEntries.map(async (entry) => {
          const moveData = await dataSources.pokeAPI.getMove(entry.move.name);
          return {
            ...entry,
            move: moveData,
          };
        })
      );

      return enrichedMoves;
    },
    sprites: (parent) => {
      // parent is the FULL REST response from PokéAPI
      const sprites = parent.sprites as any;
      return {
        officialArtwork: sprites.other["official-artwork"].front_default,
        front_default: sprites.front_default,
        back_default: sprites.back_default,
        front_shiny: sprites.front_shiny,
        back_shiny: sprites.back_shiny,
        showdown: sprites.other.showdown.front_default,
      };
    },
  },
  Ability: {
    effect_entries: async (parent, _, { dataSources }) => {
      const ability = await dataSources.pokeAPI.getAbility(parent.name);
      return ability.effect_entries;
    },
    names: async (parent, _, { dataSources }) => {
      const ability = await dataSources.pokeAPI.getAbility(parent.name);
      return ability.names;
    },
  },
};
