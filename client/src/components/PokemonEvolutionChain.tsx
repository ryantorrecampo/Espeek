import type { Generation, PokemonSpecies } from "@/gql/graphql"
import { GET_GENERATIONS, GET_POKEMON } from "@/graphql/GetPokemonList"
import { getGenerationNumbers } from "@/helpers/UIHelpers"
import { useUIStore } from "@/stores/UIStore"
import { useQuery } from "@apollo/client"
import { Box, Heading } from "@chakra-ui/react"
import { useMemo } from "react"

export const PokemonEvolutionChain = () => {
  const { language, generation } = useUIStore()
  const generationNumbers = getGenerationNumbers(generation)

  const {
    data: generationData,
    loading: loadingGenerations,
    error: errorGenerations,
  } = useQuery(GET_GENERATIONS, {
    variables: { generationNumbers },
  })

  const generations: Generation[] = generationData?.generations

  const allSpecies: PokemonSpecies[] = useMemo(() => {
    if (!generations) return []
    return generations.filter((g) => generationNumbers.includes(Number(g.id))).flatMap((g) => g.pokemon_species || [])
  }, [generations, generationNumbers])

  return (
    <Box>
      <Heading size="md" mb={4} color="fg.primary">
        Evolution Chain
      </Heading>
    </Box>
  )
}
