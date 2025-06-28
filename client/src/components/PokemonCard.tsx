import type { Pokemon } from "@/gql/graphql";
import { GET_POKEMON } from "@/graphql/GetPokemonList";
import { capitalizeFirstLetter } from "@/helpers/UIHelpers";
import { useUIStore } from "@/stores/UIStore";
import { TYPE_COLORS } from "@/types";
import { useQuery } from "@apollo/client";
import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

interface PokemonCardProps {
  pokemonId: number;
}

const PokemonCard = ({ pokemonId }: PokemonCardProps) => {
  const { language } = useUIStore();

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { pokemonId: pokemonId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const pokemon: Pokemon = data?.pokemon;

  if (!pokemon) return <div>Select a Pokémon to see details</div>;

  return (
    <Grid
      gridTemplateRows={"60px 1fr 2fr"}
      gridTemplateColumns={"1fr 1fr"}
      gap={4}
      p={10}
      height={"100%"}
      border={"1px solid #C798E4"}
      borderRadius={"md"}
    >
      <GridItem colStart={1} display={"flex"} alignItems="center" gap={4}>
        <Heading size="xl" color="#FA7596">
          {pokemon.id}
        </Heading>
        <Heading size="4xl" color="#A16CCF">
          {pokemon.names.find((n) => n.language.name === language)?.name ||
            pokemon.name}
        </Heading>
      </GridItem>
      <GridItem colStart={2}>
        <HStack
          gap={4}
          justifyContent="center"
          alignItems="center"
          height={"100%"}
        >
          {pokemon.types.map((type) => (
            <Heading
              key={`${type.slot}-${type.type.name}`}
              size="md"
              color={"white"}
              bgColor={TYPE_COLORS[type.type.name]}
              padding={2}
              borderRadius="md"
            >
              {capitalizeFirstLetter(type.type.name)}
            </Heading>
          ))}
        </HStack>
      </GridItem>
      <GridItem
        colStart={2}
        rowStart={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={pokemon.artwork}
          alt={`${pokemon.name} official artwork`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            aspectRatio: "1 / 1",
            display: "block",
          }}
        />
      </GridItem>
      <GridItem colStart={1} rowStart={2}>
        <Heading size="lg" color="#A16CCF">
          Abilities
        </Heading>
        <VStack gap={2} align="start">
          {pokemon.abilities.map((ability) => (
            <Text key={ability.slot} fontSize="md" fontWeight={500}>
              {capitalizeFirstLetter(
                ability.ability.names.find((n) => n.language.name === language)
                  ?.name || ability.ability.name
              )}
            </Text>
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default PokemonCard;
{
  /* <Flex
      direction="column"
      align="center"
      gap={4}
      p={4}
      borderWidth="1px"
      borderRadius="md"
    >
      <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
      <img src={pokemon.artwork} alt={`${pokemon.name} official artwork`} />
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.slot}>
            {capitalizeFirstLetter(ability.ability.name)}
          </li>
        ))}
      </ul>
    </Flex> */
}
