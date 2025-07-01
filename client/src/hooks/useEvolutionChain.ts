import { GET_GENERATIONS } from "@/graphql/GetPokemonList"
import { getGenerationNumbers } from "@/helpers/UIHelpers"
import { useUIStore } from "@/stores/UIStore"
import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"

interface EvolutionNode {
  species: { name: string }
  evolves_to: EvolutionNode[]
  evolution_details: { min_level: number; trigger: { name: string } }[] // You can define a more specific type if needed
}

interface EvolutionChainObject {
  name: string
  trigger: string
  minLevel?: number
}

export function useEvolutionChain(pokemonName: string) {
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChainObject[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!pokemonName) return

    const fetchEvolutionChain = async () => {
      setLoading(true)
      setError(null)

      try {
        // 1️⃣ Get species info (to find evolution chain URL)
        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`)
        const speciesData = await speciesRes.json()

        const chainUrl = speciesData.evolution_chain.url

        // 2️⃣ Fetch the evolution chain data
        const chainRes = await fetch(chainUrl)
        const chainData = await chainRes.json()

        // 3️⃣ Flatten the nested evolution chain
        const flat = flattenEvolutionChain(chainData.chain)
        setEvolutionChain(flat)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvolutionChain()
  }, [pokemonName])

  return { evolutionChain, loading, error }
}

// 🔁 Recursive helper to flatten chain
function flattenEvolutionChain(node: EvolutionNode): EvolutionChainObject[] {
  const result: EvolutionChainObject[] = []

  function traverse(n: EvolutionNode) {
    const evolutionDetails = n.evolution_details.map((detail) => ({
      trigger: detail.trigger.name,
      minLevel: detail.min_level,
    }))

    result.push({
      name: n.species.name,
      trigger: evolutionDetails.length > 0 ? evolutionDetails[0].trigger : "unknown",
      minLevel: evolutionDetails.length > 0 ? evolutionDetails[0].minLevel : undefined,
    })
    n.evolves_to.forEach(traverse) // handles branching
  }

  traverse(node)
  return result
}
