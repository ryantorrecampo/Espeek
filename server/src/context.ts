import { PokeAPI } from "./datasources/pokedex-api";

export type DataSourceContext = {
  dataSources: {
    pokeAPI: PokeAPI;
  };
};
