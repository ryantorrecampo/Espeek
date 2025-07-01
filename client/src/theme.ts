import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          card: {
            value: { base: "#FAF3FF", _dark: "#2A173E" },
          },
        },
        fg: {
          primary: {
            value: { base: "#A16CCF", _dark: "#e7caed" },
          },
        },
      },
    },
  },
})

export default createSystem(defaultConfig, config)
