import type { Pokemon } from "@/gql/graphql"
import { GET_POKEMON } from "@/graphql/GetPokemonList"
import { capitalizeFirstLetter, cleanGameName } from "@/helpers/UIHelpers"
import { useUIStore } from "@/stores/UIStore"
import { TYPE_COLORS } from "@/types"
import { useQuery } from "@apollo/client"
import { AudioLinesIcon, CircleCheckIcon, HashIcon, SparklesIcon } from "lucide-react"
import { Badge, Button, DataList, Flex, Heading, HStack, IconButton, Text, Skeleton, SkeletonCircle, SkeletonText, Stack, Switch, useToken, VStack, Progress } from "@chakra-ui/react"
import { PokemonMoves } from "./PokemonMoves"
import { getSpritePaths } from "@/helpers/Sprites"
import { getArtwork } from "@/helpers/Artwork"
import { Tooltip } from "@/components/ui/tooltip"
import { useId, useState } from "react"

interface PokemonCardProps {
  pokemonId: number
}

const PokemonCard = ({ pokemonId }: PokemonCardProps) => {
  const { language, generation } = useUIStore()
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { pokemonId: pokemonId },
  })
  const [primaryFg] = useToken("colors", ["fg.primary"]) // returns the color string
  const [shiny, setShiny] = useState(false)
  const pokemon: Pokemon = data?.pokemon
  const id = useId()

  if (error) return <div>Error! {error?.message}</div>

  return (
    <Flex flexDirection={"row"} wrap="wrap" height={"fit-content"} bgColor={"bg.card"} borderRadius="md" boxShadow="sm">
      <Flex flexDirection={"column"} p={4} gap={2} alignItems="center" justifyContent="flex-start">
        <Flex justifyContent={"space-between"} alignItems="center" w="100%">
          <Flex gap={2} alignItems="center">
            {loading ? (
              <Skeleton>
                <SkeletonCircle size="10" />
              </Skeleton>
            ) : (
              <Heading size="4xl" color="fg.primary">
                {pokemon.names.find((n) => n.language.name === language)?.name || pokemon.name}
              </Heading>
            )}
            <IconButton colorPalette={"purple"} variant={"ghost"}>
              <CircleCheckIcon color={primaryFg} size={15} strokeWidth={2} />
            </IconButton>
          </Flex>
          <Flex alignItems={"center"} gap={1}>
            <HashIcon color={primaryFg} size={15} strokeWidth={3} />
            {loading ? (
              <SkeletonText noOfLines={1} width="50px" />
            ) : (
              <Heading size="md" color="fg.primary">
                {pokemon.id}
              </Heading>
            )}
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems="center" w="100%">
          {loading ? (
            <Skeleton>
              <SkeletonText noOfLines={1} width="50px" />
            </Skeleton>
          ) : (
            <HStack gap={4} justifyContent="flex-start" alignItems="center">
              {pokemon.types.map((type) => (
                <Badge key={type.type.name} backgroundColor={TYPE_COLORS[type.type.name] || "#ccc"} color="bg.muted" fontWeight="bold">
                  {capitalizeFirstLetter(type.type.name)}
                </Badge>
              ))}
            </HStack>
          )}
          <Button
            variant={"surface"}
            fontWeight={"bold"}
            colorPalette={"purple"}
            style={{
              height: 30,
            }}
            onClick={() => {
              const audio = new Audio(pokemon.cries.legacy || pokemon.cries.latest)
              audio.volume = 0.4
              audio.play()
            }}
          >
            <AudioLinesIcon size={20} />
          </Button>
        </Flex>
        <Flex justifyContent="space-between" gap={2} alignItems="center" w="100%">
          {loading ? (
            <Skeleton>
              <SkeletonText noOfLines={2} width="150px" />
            </Skeleton>
          ) : (
            <HStack gap={2}>
              <Badge colorPalette={"purple"} p={2}>
                Height: {pokemon.height / 10} m
              </Badge>
              <Badge colorPalette={"purple"} p={2}>
                Weight: {pokemon.weight / 10} kg
              </Badge>
            </HStack>
          )}
          {generation !== "1" && (
            <Tooltip ids={{ trigger: id }} content="Toggle Shiny Form">
              <Switch.Root ids={{ root: id }} size="lg" checked={shiny} onCheckedChange={() => setShiny(!shiny)} colorPalette={"brand"}>
                <Switch.HiddenInput />
                <Switch.Control>
                  <Switch.Thumb />
                  <Switch.Indicator>
                    <SparklesIcon size={15} color="#FFD700" /> {/* gold/yellow for shiny */}
                  </Switch.Indicator>
                </Switch.Control>
              </Switch.Root>
            </Tooltip>
          )}
        </Flex>
        {loading ? (
          <Skeleton>
            <SkeletonCircle width="150px" />
          </Skeleton>
        ) : (
          <img
            src={shiny ? getArtwork(pokemon.id).shiny : getArtwork(pokemon.id).default}
            alt={`${pokemon.name} official artwork`}
            style={{
              objectFit: "contain",
              aspectRatio: "1 / 1",
              display: "block",
            }}
          />
        )}
      </Flex>
      <Flex flexDirection={"column"} p={2} gap={2} alignItems="center" justifyContent="flex-start" w={{ sm: "100%", md: "30%" }} maxW={{ sm: "100%", md: "30%" }}>
        <VStack alignItems="flex-start" bg={{ base: "brandLight.100", _dark: "brand.900" }} p={2} borderRadius="md" w={"100%"}>
          <Heading size="lg" color="fg.primary">
            Abilities
          </Heading>
          {loading ? (
            <Skeleton>
              <SkeletonText noOfLines={3} width="100%" />
            </Skeleton>
          ) : (
            <VStack style={{ overflowY: "auto" }}>
              {pokemon.abilities.map((ability) => {
                return (
                  <VStack key={ability.ability.name} alignItems="flex-start" w={"100%"}>
                    <Heading size={"sm"}>{ability.ability.names.find((n) => n.language.name === language)?.name || ability.ability.name}</Heading>
                    <Text textStyle={"xs"} textWrap={"pretty"} color={"fg.muted"}>
                      {ability.ability.effect_entries.find((e) => e.language.name === language)?.short_effect || null}
                    </Text>
                  </VStack>
                )
              })}
            </VStack>
          )}
        </VStack>
        <VStack alignItems="flex-start" p={2} w={"100%"}>
          <Heading size="lg" color="fg.primary">
            Base Stats
          </Heading>
          <Flex w={"100%"} gap={2} alignItems="flex-start" height={"fit-content"} flexWrap="wrap">
            {loading ? (
              <VStack w="100%" gap={2}>
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} height="24px" width="100%" borderRadius="md" />
                ))}
              </VStack>
            ) : (
              pokemon.stats.map((stat) => {
                return (
                  <Progress.Root key={stat.stat.name} maxW="240px" value={stat.base_stat} max={255} w="100%" variant={"subtle"} colorPalette={"purple"}>
                    <Progress.Label>
                      <Text textStyle={"xs"} fontWeight={500}>
                        {stat.stat.name.split("-").map(capitalizeFirstLetter).join(" ")}: {stat.base_stat}
                      </Text>
                    </Progress.Label>
                    <Progress.Track>
                      <Progress.Range />
                    </Progress.Track>
                  </Progress.Root>
                )
              })
            )}
          </Flex>
        </VStack>
      </Flex>
      <Flex flexDirection={"column"} p={4} gap={4} justifyContent="flex-start" alignItems="flex-start" maxW={{ sm: "100%", md: "30%" }}>
        <Heading size="lg" color="fg.primary">
          Sprites
        </Heading>
        {loading ? (
          <VStack gap={2} w="100%">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} height="120px" width="100%" borderRadius="md" />
            ))}
          </VStack>
        ) : (
          getSpritePaths(generation, pokemon.id).map((spriteInfo) => {
            return (
              <VStack key={`${spriteInfo.game}-${pokemon.id}`} gap={1} alignItems={"center"} w="100%">
                <Heading size="xs" color="fg.primary">
                  {cleanGameName(spriteInfo.game)}
                </Heading>
                <HStack gap={2} alignItems="center">
                  {spriteInfo.paths.map((spritePath, index) => (
                    <img key={index} src={spritePath} alt={`${pokemon.name} sprite`} style={{ height: "100px", width: "100px", objectFit: "contain", aspectRatio: "1 / 1", display: "block" }} />
                  ))}
                </HStack>
              </VStack>
            )
          })
        )}
      </Flex>
      <Flex flexDirection={"column"} p={4} gap={4} alignItems="center" justifyContent="flex-start" w={"100%"}>
        {loading ? <Skeleton height="200px" width="100%" borderRadius="md" /> : <PokemonMoves title="Moves" moves={pokemon.moves} />}
      </Flex>
    </Flex>
  )
}

export default PokemonCard
