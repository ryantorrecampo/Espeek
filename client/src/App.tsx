import PokemonList from "./components/PokemonList"
import { Box, Flex } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "./components/ui/color-mode"
import PokemonCard from "./components/PokemonCard"
import { usePokemonStore } from "./stores/PokemonStore"
import { useUIStore } from "./stores/UIStore"
import theme from "./theme"
import { AppBar } from "./AppBar"

function App() {
  const { selectedPokemonID } = usePokemonStore()

  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <Flex direction="column" height="100vh">
          <AppBar />
          <Flex flex="1" overflow="hidden">
            {/* Sidebar */}
            <Box width="250px" bg="bg.subtle" p={2}>
              <PokemonList />
            </Box>
            <Box flex="1" p={2} overflowY="auto" bg="bg.muted">
              {selectedPokemonID !== null && <PokemonCard pokemonId={selectedPokemonID} />}
            </Box>
          </Flex>
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App
