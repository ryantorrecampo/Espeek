import { RESTDataSource } from "@apollo/datasource-rest";
import { Ability, Generation, Pokemon, PokemonSpecies } from "../types";

export class PokeAPI extends RESTDataSource {
  baseURL = "https://pokeapi.co/api/v2/";

  getPokemon(identifier: number | string): Promise<Pokemon> {
    return this.get<Pokemon>(`pokemon/${identifier}`);
  }

  getPokemonSpecies(identifier: number | string): Promise<PokemonSpecies> {
    return this.get<PokemonSpecies>(`pokemon-species/${identifier}`);
  }

  getGeneration(generationNumber: number): Promise<Generation> {
    return this.get<Generation>(`generation/${generationNumber}`);
  }

  getAbility(identifier: string): Promise<Ability> {
    return this.get<Ability>(`ability/${identifier}`);
  }
}
