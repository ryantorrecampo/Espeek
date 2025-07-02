import type { PokemonMove } from "@/gql/graphql"
import { useUIStore } from "@/stores/UIStore"
import { Box, DataList, Flex, Heading, HStack, VStack } from "@chakra-ui/react"

interface PokemonMovesProps {
  title: string
  moves: PokemonMove[]
}

export const PokemonMoves = ({ title, moves }: PokemonMovesProps) => {
  const { language, generation } = useUIStore()

  return (
    <VStack w="100%" justifyContent={"flex-start"} alignItems="flex-start" borderRadius="md" bgColor={"bg.card"}>
      <Heading size="lg" color="fg.primary">
        {title}
      </Heading>
      <Box maxHeight={{ md: "40vh" }} overflowY={{ md: "auto" }} w="100%">
        <DataList.Root orientation={"horizontal"}>
          {moves.map((item) => (
            <DataList.Item key={item.move.id}>
              <DataList.ItemLabel>{item.move.names.find((n) => n.language.name === language)?.name || item.move.name}</DataList.ItemLabel>
              <DataList.ItemValue>{item.move.power ? item.move.power : "N/A"}</DataList.ItemValue>
              <DataList.ItemValue>{item.move.pp ? item.move.pp : "N/A"}</DataList.ItemValue>
              <DataList.ItemValue>{item.move.accuracy ? item.move.accuracy : "N/A"}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Box>
    </VStack>
  )
}
