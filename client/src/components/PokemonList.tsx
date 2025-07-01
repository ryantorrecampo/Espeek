import { useQuery } from "@apollo/client"
import { GET_GENERATIONS } from "../graphql/GetPokemonList"
import _ from "lodash"
import type { Generation, PokemonSpecies } from "../gql/graphql"
import { useMemo, useEffect, useRef, useState } from "react"
import { Box, Input, InputGroup, Stack, Text } from "@chakra-ui/react"
import { usePokemonStore } from "@/stores/PokemonStore"
import { useUIStore } from "@/stores/UIStore"
import { SearchIcon } from "lucide-react"
import { getGenerationNumbers } from "@/helpers/UIHelpers"

function PokemonList() {
  const { selectedPokemonID, setSelectedPokemonID } = usePokemonStore()
  const { language, generation } = useUIStore()
  const selectedElementRef = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState("")
  const generationNumbers = getGenerationNumbers(generation)

  const { data, loading, error } = useQuery(GET_GENERATIONS, {
    variables: { generationNumbers },
  })

  const generations: Generation[] = data?.generations

  const allSpecies: PokemonSpecies[] = useMemo(() => {
    if (!generations) return []
    return generations.filter((g) => generationNumbers.includes(Number(g.id))).flatMap((g) => g.pokemon_species || [])
  }, [generations, generationNumbers])

  const filteredAndSortedSpecies = useMemo(() => {
    const lower = search.toLowerCase()
    const filtered = allSpecies.filter((species) => {
      const defaultName = species.name.toLowerCase()
      const translatedName = species.names.find((n) => n.language.name === language)?.name.toLowerCase() || ""
      return defaultName.includes(lower) || translatedName.includes(lower)
    })
    return _.sortBy(filtered, (species) => Number(species.id))
  }, [allSpecies, search, language])

  useEffect(() => {
    if (selectedPokemonID && selectedElementRef.current && filteredAndSortedSpecies.length > 0) {
      const isInList = filteredAndSortedSpecies.some((ps) => Number(ps.id) === selectedPokemonID)
      if (isInList) {
        const el = selectedElementRef.current
        const rect = el.getBoundingClientRect()
        const viewHeight = window.innerHeight || document.documentElement.clientHeight
        const isFullyInView = rect.top >= 0 && rect.bottom <= viewHeight
        if (!isFullyInView) {
          el.scrollIntoView({ behavior: "instant", block: "center" })
        }
      }
    }
  }, [selectedPokemonID, filteredAndSortedSpecies])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! {error.message}</p>

  return (
    <Stack height="100%" gap={2} p={2}>
      <InputGroup startElement={<SearchIcon size={"15px"} />}>
        <Input placeholder="Search" borderRadius="sm" value={search} onChange={(e) => setSearch(e.target.value)} />
      </InputGroup>
      <Box overflowY="auto">
        {filteredAndSortedSpecies.map((ps) => {
          const isSelected = selectedPokemonID === Number(ps.id)
          return (
            <Box
              key={ps.id}
              ref={isSelected ? selectedElementRef : null}
              onClick={() => setSelectedPokemonID(Number(ps.id))}
              bg={isSelected ? "bg.card" : "transparent"}
              color={isSelected ? "fg.primary" : "fg"}
              cursor="pointer"
              borderRadius="sm"
              p={1}
              transition="background-color 0.05s ease"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              _hover={isSelected ? {} : { bg: "bg.muted" }}
              gap={2}
            >
              <Text fontSize="12px" fontWeight={600} w={10}>
                {ps.id}
              </Text>
              <Text fontSize="16px" fontWeight={600}>
                {ps.names.find((n) => n.language.name === language)?.name || ps.name}
              </Text>
            </Box>
          )
        })}
      </Box>
    </Stack>
  )
}

export default PokemonList
