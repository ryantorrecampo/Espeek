import { RESTDataSource } from "@apollo/datasource-rest";
import {
  Ability,
  EvolutionChain,
  Generation,
  Move,
  Pokemon,
  PokemonSpecies,
} from "../types";

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

  getMove(identifier: string): Promise<Move> {
    return this.get<Move>(`move/${identifier}`);
  }

  getEvolutionChain(chainId: number): Promise<EvolutionChain> {
    return this.get<EvolutionChain>(`evolution-chain/${chainId}`);
  }
}
