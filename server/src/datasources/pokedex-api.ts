import { RESTDataSource } from "@apollo/datasource-rest";
import { Pokemon } from "../types";

export class PokeAPI extends RESTDataSource {
  baseURL = "https://pokeapi.co/api/v2/";

  getPokemon(id: number): Promise<Pokemon> {
    return this.get<Pokemon>(`pokemon/${id}`);
  }

  getGeneration(generationNumber: number): Promise<any> {
    return this.get(`generation/${generationNumber}`);
  }
}
