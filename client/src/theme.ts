import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#FAF3FF" },
          100: { value: "#E7CAED" },
          200: { value: "#D4A1DB" },
          300: { value: "#C798E4" },
          400: { value: "#B86FCD" },
          500: { value: "#A16CCF" },
          600: { value: "#8A59B2" },
          700: { value: "#734695" },
          800: { value: "#5C3378" },
          900: { value: "#402265" },
          950: { value: "#2A173E" },
        },
        brandLight: {
          50: { value: "#F8F4FF" },
          100: { value: "#EDE7F6" },
          200: { value: "#D1C4E9" },
          300: { value: "#B39DDB" },
          400: { value: "#9575CD" },
          500: { value: "#7E57C2" },
          600: { value: "#673AB7" },
          700: { value: "#512DA8" },
          800: { value: "#4527A0" },
          900: { value: "#311B92" },
          950: { value: "#1A0E4E" },
        },
      },
    },
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
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})

export default createSystem(defaultConfig, config)
