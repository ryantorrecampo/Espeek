import EspeekLogo from "./assets/Espeek.svg?react" // Importing as a React component
import { Box, Button, createListCollection, Flex, Heading, HStack, Input, InputGroup, Portal, Select } from "@chakra-ui/react"
import { SearchIcon } from "lucide-react"
import { ColorModeButton } from "./components/ui/color-mode"
import { useUIStore } from "./stores/UIStore"
import { GENERATION_OPTIONS, LANGUAGE_OPTIONS } from "./types"

const languageOptions = createListCollection({
  items: LANGUAGE_OPTIONS,
})

const generationOptions = createListCollection({
  items: GENERATION_OPTIONS,
})

export const AppBar = () => {
  const { language, setLanguage, generation, setGeneration } = useUIStore()

  return (
    <Box height="60px" display="flex" alignItems="center" justifyContent="flex-start">
      <Flex alignItems={"center"} width="250px" minWidth={"250px"}>
        <EspeekLogo preserveAspectRatio="xMidYMid meet" height={45} width={75} />
        <Heading as="h1" size="4xl" color="#A16CCF">
          Espeek
        </Heading>
      </Flex>

      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <Flex gap={2} alignItems="center">
          <Button variant={"surface"} fontWeight={"bold"} colorPalette={"red"}>
            Pokédex
          </Button>
          <Button variant={"surface"} fontWeight={"bold"} colorPalette={"yellow"}>
            Moves
          </Button>
          <Button variant={"surface"} fontWeight={"bold"} colorPalette={"green"}>
            Types
          </Button>
          <Button variant={"surface"} fontWeight={"bold"} colorPalette={"purple"}>
            Berries
          </Button>
        </Flex>

        <HStack ml={2}>
          <InputGroup startElement={<SearchIcon />} maxW={300} minW={"50px"}>
            <Input placeholder="Search" borderRadius={"md"} />
          </InputGroup>
          <Select.Root collection={generationOptions} value={[generation]} onValueChange={(e) => setGeneration(e.value[0])} minW={"50px"}>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Gen" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {generationOptions.items.map((gen) => (
                    <Select.Item item={gen} key={gen.value}>
                      {gen.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <Select.Root collection={languageOptions} value={[language]} onValueChange={(e) => setLanguage(e.value[0])} minW={"50px"}>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Language" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {languageOptions.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
          <ColorModeButton mr={2} />
        </HStack>
      </Flex>
    </Box>
  )
}
