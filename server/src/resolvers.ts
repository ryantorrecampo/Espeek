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
    artwork: (parent) => {
      const id = parent.id;
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    },
    names: async (parent, _, { dataSources }) => {
      const species = await dataSources.pokeAPI.getPokemonSpecies(parent.id);
      return species.names;
    },
  },
  Ability: {
    names: async (parent, _, { dataSources }) => {
      const ability = await dataSources.pokeAPI.getAbility(parent.name);
      return ability.names;
    },
  },
};
