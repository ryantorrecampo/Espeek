import EspeekLogo from "./assets/Espeek.svg?react" // Importing as a React component
import { Box, Button, ButtonGroup, CloseButton, createListCollection, Drawer, Flex, Heading, HStack, IconButton, Input, InputGroup, Portal, Select } from "@chakra-ui/react"
import { HamburgerIcon, PanelLeftIcon, PanelRightIcon, SearchIcon } from "lucide-react"
import { ColorModeButton } from "./components/ui/color-mode"
import { useUIStore } from "./stores/UIStore"
import { GENERATION_OPTIONS, LANGUAGE_OPTIONS } from "./types"
import PokemonList from "./components/PokemonList"
import { useEffect, useState } from "react"
import { usePokemonStore } from "./stores/PokemonStore"

export const AppBar = () => {
  const { language, setLanguage, generation, setGeneration } = useUIStore()
  const { selectedPokemonID } = usePokemonStore()
  const [generationOptionsFiltered, setGenerationOptionsFiltered] = useState(GENERATION_OPTIONS)
  const languageOptions = createListCollection({
    items: LANGUAGE_OPTIONS,
  })

  const generationOptions = createListCollection({
    items: generationOptionsFiltered,
  })

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const gen = GENERATION_OPTIONS.find((g) => g.value === generation)
    if (gen) {
      // Filter generation options based on the selected pokemon ID
      const filteredOptions = GENERATION_OPTIONS.filter((g) => {
        if (!selectedPokemonID) return true // If no pokemon is selected, show all generations
        return g.maxPokemonId >= Number(selectedPokemonID)
      })
      setGenerationOptionsFiltered(filteredOptions)
    }
    setOpen(false)
  }, [selectedPokemonID])

  return (
    <Box height="60px" display="flex" alignItems="center" justifyContent="flex-start" px={2}>
      <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="start">
        <Drawer.Trigger asChild>
          <IconButton variant={"ghost"} hideFrom={"md"}>
            <PanelRightIcon size={20} />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content maxW="100%">
              <Drawer.Header px={4} py={4}>
                <EspeekLogo preserveAspectRatio="xMidYMid meet" height={50} width={50} />
                <Drawer.Title flex="1">Espeek</Drawer.Title>
                <ColorModeButton />
                <Drawer.CloseTrigger asChild pos="initial">
                  <IconButton variant={"ghost"}>
                    <PanelLeftIcon size={20} />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body p={2}>
                <PokemonList />
              </Drawer.Body>
              <Drawer.Footer>
                <Flex gap={2} justifyContent="space-between" alignItems="center" hideFrom={"md"} width="100%">
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
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
      <EspeekLogo preserveAspectRatio="xMidYMid meet" height={45} width={75} />

      <HStack flex="1" alignItems="center" justifyContent={"flex-end"} gap={4}>
        <HStack gap={2} alignItems="center" hideBelow={"md"}>
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
        </HStack>

        <InputGroup startElement={<SearchIcon />} maxW={300} hideBelow={"md"}>
          <Input placeholder="Search" borderRadius={"md"} />
        </InputGroup>
        <Select.Root collection={generationOptions} value={[generation]} onValueChange={(e) => setGeneration(e.value[0])} width={100}>
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
        <Select.Root collection={languageOptions} value={[language]} onValueChange={(e) => setLanguage(e.value[0])} width={100}>
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
        <ColorModeButton mr={2} hideBelow={"md"} />
      </HStack>
    </Box>
  )
}
