import PokemonList from "./components/PokemonList"
import { Box, Button, Drawer, DrawerBody, DrawerContent, Flex, IconButton, Show, useDisclosure } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import PokemonCard from "./components/PokemonCard"
import { usePokemonStore } from "./stores/PokemonStore"
import theme from "./theme"
import { AppBar } from "./AppBar"
import { HamburgerIcon } from "lucide-react"

function App() {
  const { selectedPokemonID } = usePokemonStore()

  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <Flex direction="column" height="100vh">
          <AppBar />
          <Flex flex="1" overflow="hidden" direction={{ base: "column", md: "row" }}>
            <Box hideBelow={"md"}>
              <PokemonList />
            </Box>
            <Box flex="1" p={2} overflowY="auto">
              {selectedPokemonID !== null && <PokemonCard pokemonId={selectedPokemonID} />}
            </Box>
          </Flex>
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App
