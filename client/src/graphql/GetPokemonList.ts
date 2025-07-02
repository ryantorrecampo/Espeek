import { gql } from "@apollo/client"

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
`

export const GET_GENERATIONS = gql`
  query GetGenerations($generationNumbers: [Int!]!) {
    generations(generationNumbers: $generationNumbers) {
      name
      id
      main_region {
        name
      }
      pokemon_species {
        id
        name
        names {
          language {
            name
          }
          name
        }
      }
    }
  }
`

export const GET_POKEMON = gql`
  query GetPokemon($pokemonId: Int!) {
    pokemon(id: $pokemonId) {
      name
      id
      height
      weight
      abilities {
        ability {
          name
          effect_entries {
            short_effect
            language {
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
      moves {
        move {
          id
          power
          pp
          accuracy
          names {
            name
            language {
              name
            }
          }
        }
      }
      cries {
        legacy
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`
