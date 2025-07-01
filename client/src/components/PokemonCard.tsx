import type { Pokemon } from "@/gql/graphql"
import { GET_POKEMON } from "@/graphql/GetPokemonList"
import { capitalizeFirstLetter } from "@/helpers/UIHelpers"
import { useUIStore } from "@/stores/UIStore"
import { TYPE_COLORS } from "@/types"
import { useQuery } from "@apollo/client"
import { AudioLinesIcon, CircleCheckIcon, HashIcon } from "lucide-react"
import { Badge, Button, DataList, Flex, Heading, HStack, IconButton, Skeleton, SkeletonCircle, SkeletonText, Stack, useToken, VStack } from "@chakra-ui/react"
import { PokemonEvolutionChain } from "./PokemonEvolutionChain"

interface PokemonCardProps {
  pokemonId: number
}

const PokemonCard = ({ pokemonId }: PokemonCardProps) => {
  const { language } = useUIStore()
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { pokemonId: pokemonId },
  })
  const [primaryFg] = useToken("colors", ["fg.primary"]) // returns the color string

  const pokemon: Pokemon = data?.pokemon

  if (loading)
    return (
      <Stack gap="6" maxW="xs">
        <HStack width="full">
          <SkeletonCircle size="10" />
          <SkeletonText noOfLines={2} />
        </HStack>
        <Skeleton height="200px" />
      </Stack>
    )

  if (error) return <div>Error! {error?.message}</div>

  return (
    <Flex wrap="wrap" height={"100%"}>
      <Flex direction="column" bgColor={"bg.card"} borderRadius="md" boxShadow="sm" p={4} gap={2} alignItems="center" justifyContent="flex-start" w="100%" maxW="400px">
        <VStack backgroundColor={""} justifyContent="space-between" alignItems="center" w={"100%"} maxW="400px">
          <Flex justifyContent={"space-between"} alignItems="center" w="100%">
            <Flex gap={2} alignItems="center">
              <Heading size="4xl" color="fg.primary">
                {pokemon.names.find((n) => n.language.name === language)?.name || pokemon.name}
              </Heading>
              <IconButton colorPalette={"purple"} variant={"ghost"}>
                <CircleCheckIcon color={primaryFg} size={15} strokeWidth={2} />
              </IconButton>
            </Flex>
            <Flex alignItems={"center"} gap={1}>
              <HashIcon color={primaryFg} size={15} strokeWidth={3} />
              <Heading size="md" color="fg.primary">
                {pokemon.id}
              </Heading>
            </Flex>
          </Flex>
          <Flex justifyContent={"space-between"} alignItems="center" w="100%">
            <HStack gap={4} justifyContent="flex-start" alignItems="center">
              {pokemon.types.map((type) => (
                <Badge key={type.type.name} backgroundColor={TYPE_COLORS[type.type.name] || "#ccc"} color="bg.muted" fontWeight="bold">
                  {capitalizeFirstLetter(type.type.name)}
                </Badge>
              ))}
            </HStack>
            <Button
              variant={"surface"}
              fontWeight={"bold"}
              colorPalette={"purple"}
              style={{
                height: 30,
              }}
              onClick={() => {
                const audio = new Audio(pokemon.cries.legacy)
                audio.volume = 0.2
                audio.play()
              }}
            >
              <AudioLinesIcon size={20} />
            </Button>
          </Flex>
          <Flex justifyContent="flex-start" gap={2} alignItems="center" w="100%">
            <Badge colorPalette={"purple"} p={2}>
              Height: {pokemon.height / 10} m
            </Badge>
            <Badge colorPalette={"purple"} p={2}>
              Weight: {pokemon.weight / 10} kg
            </Badge>
          </Flex>
        </VStack>
        <img
          src={pokemon.sprites.officialArtwork}
          alt={`${pokemon.name} official artwork`}
          style={{
            objectFit: "contain",
            aspectRatio: "1 / 1",
            display: "block",
          }}
        />
        <HStack>
          {/* {pokemonSprites[`gen${generation}_front_default`] && (
            <img
              src={pokemonSprites[`gen${generation}_front_default`]}
              alt={`${pokemon.name} front sprite`}
              style={{
                height: "100px",
                width: "100px",
                objectFit: "contain",
                aspectRatio: "1 / 1",
                display: "block",
              }}
            />
          )} */}
        </HStack>
        <PokemonEvolutionChain />
        <Flex gap={5} flexDirection={"column"}>
          <VStack alignItems="flex-start">
            <Heading size="lg" color="#A16CCF">
              Base Stats
            </Heading>
            <Flex wrap="wrap" gap={4} justifyContent="space-between" alignItems="flex-start" w="100%">
              {pokemon.stats.map((stat) => (
                <Flex key={stat.stat.name} direction="column" alignItems="flex-start" gap={1} w="110px">
                  <Heading size="sm" color="fg.muted">
                    {stat.stat.name.split("-").map(capitalizeFirstLetter).join(" ")}
                  </Heading>
                  <Badge colorPalette={stat.base_stat >= 100 ? "green" : stat.base_stat >= 60 ? "yellow" : "red"} p={2}>
                    {stat.base_stat}
                  </Badge>
                </Flex>
              ))}
            </Flex>
          </VStack>
          <VStack alignItems="flex-start">
            <Heading size="lg" color="#A16CCF">
              Abilities
            </Heading>
            <DataList.Root orientation={"vertical"} style={{ overflowY: "auto" }}>
              {pokemon.abilities.map((ability) => {
                return (
                  <DataList.Item key={ability.ability.name}>
                    <DataList.ItemLabel fontWeight={500}>{ability.ability.names.find((n) => n.language.name === language)?.name || ability.ability.name}</DataList.ItemLabel>
                    <DataList.ItemValue textWrap={"pretty"}>{ability.ability.effect_entries.find((e) => e.language.name === language)?.short_effect || null}</DataList.ItemValue>
                  </DataList.Item>
                )
              })}
            </DataList.Root>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PokemonCard

{
  /* <Flex gap={4}>
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name} front sprite`}
          style={{
            height: "100px",
            width: "100px",
            objectFit: "contain",
            aspectRatio: "1 / 1",
            display: "block",
          }}
        />
        <img
          src={pokemon.sprites.back_default}
          alt={`${pokemon.name} back sprite`}
          style={{
            height: "100px",
            width: "100px",
            objectFit: "contain",
            aspectRatio: "1 / 1",
            display: "block",
          }}
        />
      </Flex> */
}
{
  /* <VStack alignItems="flex-start" w="100%" bgColor={"bg.subtle"} borderRadius="md" p={4}>
        <Heading size="lg" color="#A16CCF">
          Moves
        </Heading>
        <DataList.Root orientation={"horizontal"} style={{ overflowY: "auto", maxHeight: "400px", width: "100%" }}>
          {pokemon.moves.map((item) => (
            <DataList.Item key={item.move.id}>
              <DataList.ItemLabel>{item.move.names.find((n) => n.language.name === language)?.name || item.move.name}</DataList.ItemLabel>
              <DataList.ItemValue>{item.move.power ? item.move.power : "N/A"}</DataList.ItemValue>
              <DataList.ItemValue>{item.move.pp ? item.move.pp : "N/A"}</DataList.ItemValue>
              <DataList.ItemValue>{item.move.accuracy ? item.move.accuracy : "N/A"}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </VStack> */
}
