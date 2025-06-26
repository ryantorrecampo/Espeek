import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    pokemon: (_, { id }, { dataSources }) => {
      return dataSources.pokeAPI.getPokemon(id);
    },
    generation: (_, { generationNumber }, { dataSources }) => {
      return dataSources.pokeAPI.getGeneration(generationNumber);
    },
  },
  // Generation: {
  //   pokemon_species: ({ id, name }, _, { dataSources }) => {
  //     return dataSources.pokeAPI.getPokemon(id);
  //   },
  // },
};
