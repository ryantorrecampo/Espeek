import { useQuery } from "@apollo/client";
import { GET_GENERATION } from "../graphql/GetPokemonList";
import _ from "lodash";
import type { Generation, PokemonSpecies } from "../gql/graphql";
import { useMemo, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { usePokemonStore } from "@/stores/PokemonStore";
import { useUIStore } from "@/stores/UIStore";

interface PokemonListProps {
  generationNumber: number;
}

function PokemonList({ generationNumber }: PokemonListProps) {
  const { selectedPokemonID, setSelectedPokemonID } = usePokemonStore();
  const { language } = useUIStore();

  const [hoverID, setHoverID] = useState<number | null>(null);

  const { loading, error, data } = useQuery(GET_GENERATION, {
    variables: { generationNumber },
  });

  const generation: Generation = data?.generation;

  const sortedPokemonSpecies = useMemo(() => {
    if (!generation?.pokemon_species) return [];
    return _.sortBy(generation.pokemon_species, (species: PokemonSpecies) =>
      Number(species.id)
    );
  }, [generation?.pokemon_species]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <Stack gap={1}>
      {sortedPokemonSpecies.map((ps: PokemonSpecies) => {
        return (
          <Text
            key={ps.id}
            onClick={() => setSelectedPokemonID(Number(ps.id))}
            bg={
              selectedPokemonID === Number(ps.id)
                ? "#C798E4"
                : hoverID === Number(ps.id)
                ? "bg.muted"
                : "transparent"
            }
            color={selectedPokemonID === Number(ps.id) ? "#402265" : "fg"}
            cursor="pointer"
            px={2}
            py={2}
            borderRadius="md"
            transition="background-color 0.1s ease"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontWeight={500}
            onMouseEnter={() => {
              if (selectedPokemonID !== Number(ps.id)) {
                setHoverID(Number(ps.id));
              }
            }}
            onMouseLeave={() => {
              if (selectedPokemonID !== Number(ps.id)) {
                setHoverID(null);
              }
            }}
          >
            <span>{ps.id}</span>
            <span>
              {ps?.names?.find((name) => name.language.name === language)
                ?.name || ps.name}
            </span>
          </Text>
        );
      })}
    </Stack>
  );
}

export default PokemonList;
