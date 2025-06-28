import PokemonList from "./components/PokemonList";
import EspeekLogo from "./assets/Espeek.svg?react"; // Importing as a React component

import {
  Button,
  createListCollection,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Portal,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from "lucide-react";
// import EspeekLogo from "./assets/EspeekLogo.png";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeButton, ColorModeProvider } from "./components/ui/color-mode";
import PokemonCard from "./components/PokemonCard";
import { usePokemonStore } from "./stores/PokemonStore";
import { useUIStore } from "./stores/UIStore";
import { LANGUAGE_OPTIONS } from "./types";

const languageOptions = createListCollection({
  items: LANGUAGE_OPTIONS,
});

function App() {
  const { selectedPokemonID } = usePokemonStore();
  const { language, setLanguage } = useUIStore();

  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
        <div className="App">
          <Grid
            gridTemplateRows={"60px 1fr"}
            templateColumns="repeat(5, 1fr)"
            gap={4}
            height={"100vh"}
          >
            <GridItem colStart={1} display={"flex"} alignItems="center" p={5}>
              <EspeekLogo
                preserveAspectRatio="xMidYMid meet"
                height={45}
                width={75}
              />
              <Heading as="h1" size="4xl" color="#A16CCF">
                Espeek
              </Heading>
            </GridItem>
            <GridItem
              rowStart={1}
              colStart={2}
              colSpan={3}
              display={"flex"}
              justifyContent="space-between"
              alignItems="center"
              gap={5}
            >
              <InputGroup startElement={<SearchIcon />}>
                <Input placeholder="Search" borderRadius={"md"} />
              </InputGroup>
              <Button
                variant={"surface"}
                fontWeight={"bold"}
                colorPalette={"red"}
              >
                Pokédex
              </Button>
              <Button
                variant={"surface"}
                fontWeight={"bold"}
                colorPalette={"yellow"}
              >
                Moves
              </Button>
              <Button
                variant={"surface"}
                fontWeight={"bold"}
                colorPalette={"green"}
              >
                Types
              </Button>
              <Button
                variant={"surface"}
                fontWeight={"bold"}
                colorPalette={"purple"}
              >
                Berries
              </Button>
            </GridItem>
            <GridItem
              rowStart={1}
              colStart={5}
              display={"flex"}
              flexDirection={"row-reverse"}
              // justifyContent="space-between"
              gap={4}
              alignItems="center"
              p={5}
            >
              <Select.Root
                collection={languageOptions}
                value={[language]}
                onValueChange={(e) => setLanguage(e.value[0])}
                width={"100px"}
              >
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
              <ColorModeButton />
            </GridItem>
            <GridItem rowStart={2} colStart={2} overflowY={"auto"}>
              <PokemonList generationNumber={1} />
              {/* <PokemonList generationNumber={2} /> */}
              {/* <PokemonList generationNumber={3} /> */}
            </GridItem>
            <GridItem rowStart={2} colSpan={2} p={10}>
              {selectedPokemonID !== null && (
                <PokemonCard pokemonId={selectedPokemonID} />
              )}
            </GridItem>
          </Grid>
        </div>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
