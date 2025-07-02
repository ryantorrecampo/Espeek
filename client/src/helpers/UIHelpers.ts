export function capitalizeFirstLetter(str: string): string {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getGenerationNumbers = (generation: string) => {
  const genNumber = Number(generation)
  if (!Number.isInteger(genNumber) || genNumber < 1) return []
  return Array.from({ length: genNumber }, (_, i) => i + 1)
}

export const cleanGameName = (name: string): string => {
  return name
    .split("-")
    .map((part) => capitalizeFirstLetter(part))
    .join(" & ")
}
