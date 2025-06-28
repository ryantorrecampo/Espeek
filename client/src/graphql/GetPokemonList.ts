import { gql } from "@apollo/client";

export const GET_GENERATION = gql`
  query GetGeneration($generationNumber: Int!) {
    generation(generationNumber: $generationNumber) {
      name
      pokemon_species {
        name
        id
        names {
          language {
            name
          }
          name
        }
      }
      main_region {
        name
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query GetPokemon($pokemonId: Int!) {
    pokemon(id: $pokemonId) {
      name
      id
      height
      weight
      abilities {
        slot
        ability {
          name
          url
          names {
            name
            language {
              name
            }
          }
        }
      }
      sprites {
        front_default
        back_default
      }
      artwork
      types {
        type {
          name
        }
      }
      names {
        name
        language {
          name
        }
      }
    }
  }
`;
