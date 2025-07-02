/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Ability = {
  __typename?: 'Ability';
  /** The effect of this ability listed in different languages. */
  effect_entries: Array<VerboseEffect>;
  /** The ability's name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
  /** The ability's url */
  url: Scalars['String']['output'];
};

export type ChainLink = {
  __typename?: 'ChainLink';
  /** All details regarding the specific details of the referenced Pokémon species evolution. */
  evolution_details: Array<EvolutionDetail>;
  /** A List of chain objects. */
  evolves_to: Array<ChainLink>;
  /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link. */
  is_baby: Scalars['Boolean']['output'];
  /** The Pokémon species at this point in the evolution chain. */
  species: PokemonSpecies;
};

export type EvolutionChain = {
  __typename?: 'EvolutionChain';
  /** The base chain link object. */
  chain: ChainLink;
  /** The identifier for this resource. */
  id: Scalars['ID']['output'];
};

export type EvolutionDetail = {
  __typename?: 'EvolutionDetail';
  /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
  min_level?: Maybe<Scalars['Int']['output']>;
};

export type Generation = {
  __typename?: 'Generation';
  /** The generation's ID */
  id: Scalars['ID']['output'];
  /** The main region travelled in this generation. */
  main_region: Region;
  /** The generation's name */
  name: Scalars['String']['output'];
  /** The pokemon species in this generation */
  pokemon_species: Array<PokemonSpecies>;
};

export type Language = {
  __typename?: 'Language';
  /** The language's ID */
  id: Scalars['ID']['output'];
  /** The language's name */
  name: Scalars['String']['output'];
};

export type Move = {
  __typename?: 'Move';
  /** The percent value of how likely this move is to be successful. */
  accuracy?: Maybe<Scalars['Int']['output']>;
  /** The move's ID */
  id: Scalars['ID']['output'];
  /** The move's name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
  /** The power of this move. */
  power?: Maybe<Scalars['Int']['output']>;
  /** Power points. The number of times this move can be used. */
  pp?: Maybe<Scalars['Int']['output']>;
  /** The move's url */
  url: Scalars['String']['output'];
};

export type Name = {
  __typename?: 'Name';
  /** The language this name is in. */
  language: Language;
  /** The name of this resource in a specific language. */
  name: Scalars['String']['output'];
};

/** A type that represents a pokemon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** A list of abilities this Pokémon could potentially have. */
  abilities: Array<PokemonAbility>;
  /** A set of cries used to depict this Pokémon in the game. */
  cries: PokemonCries;
  /** The pokemon's height in decimetres */
  height: Scalars['Int']['output'];
  /** The pokemon's pokedex ID */
  id: Scalars['ID']['output'];
  /** A list of moves along with learn methods and level details pertaining to specific version groups. */
  moves: Array<PokemonMove>;
  /** The pokemon's name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
  /** A list of base stat values for this Pokémon. */
  stats: Array<PokemonStat>;
  /** A list of details showing types this Pokémon has. */
  types: Array<PokemonType>;
  /** The pokemon's weight in hectograms */
  weight: Scalars['Int']['output'];
};

export type PokemonAbility = {
  __typename?: 'PokemonAbility';
  /** The ability this Pokémon has. */
  ability: Ability;
  /** The order the Pokémon's abilities are listed in. */
  slot: Scalars['Int']['output'];
};

export type PokemonCries = {
  __typename?: 'PokemonCries';
  /** The latest depiction of this Pokémon's cry. */
  latest: Scalars['String']['output'];
  /** The legacy depiction of this Pokémon's cry. */
  legacy?: Maybe<Scalars['String']['output']>;
};

export type PokemonMove = {
  __typename?: 'PokemonMove';
  /** The move the Pokémon can learn. */
  move: Move;
};

export type PokemonSpecies = {
  __typename?: 'PokemonSpecies';
  /** The pokemon species' ID */
  id: Scalars['ID']['output'];
  /** The pokemon species' name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
  /** The pokemon species' url */
  url: Scalars['String']['output'];
};

export type PokemonStat = {
  __typename?: 'PokemonStat';
  /** The base stat value of this Pokémon. */
  base_stat: Scalars['Int']['output'];
  /** The stat this Pokémon has. */
  stat: Stat;
};

export type PokemonType = {
  __typename?: 'PokemonType';
  /** The order the Pokémon's types are listed in. */
  slot: Scalars['Int']['output'];
  /** The type the referenced Pokémon has. */
  type: Type;
};

export type Query = {
  __typename?: 'Query';
  /** Fetch evolution chain by its ID */
  evolutionChain?: Maybe<EvolutionChain>;
  /** Fetch a generation by its number */
  generation?: Maybe<Generation>;
  /** Fetch generations by their numbers */
  generations: Array<Generation>;
  /** Fetch a pokemon by its pokedex number */
  pokemon?: Maybe<Pokemon>;
  /** Fetch a pokemon species by its ID or name */
  pokemonSpecies?: Maybe<PokemonSpecies>;
};


export type QueryEvolutionChainArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGenerationArgs = {
  generationNumber: Scalars['Int']['input'];
};


export type QueryGenerationsArgs = {
  generationNumbers: Array<Scalars['Int']['input']>;
};


export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPokemonSpeciesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Region = {
  __typename?: 'Region';
  /** The region's ID */
  id: Scalars['ID']['output'];
  /** The region's name */
  name: Scalars['String']['output'];
};

export type Stat = {
  __typename?: 'Stat';
  /** The stat's name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
};

export type Type = {
  __typename?: 'Type';
  /** The type's ID */
  id: Scalars['ID']['output'];
  /** The type's name */
  name: Scalars['String']['output'];
};

export type VerboseEffect = {
  __typename?: 'VerboseEffect';
  /** The effect of the ability in a specific language. */
  effect: Scalars['String']['output'];
  /** The language this effect is in. */
  language: Language;
  /** short_effect */
  short_effect: Scalars['String']['output'];
};

export type GetGenerationQueryVariables = Exact<{
  generationNumber: Scalars['Int']['input'];
}>;


export type GetGenerationQuery = { __typename?: 'Query', generation?: { __typename?: 'Generation', name: string, pokemon_species: Array<{ __typename?: 'PokemonSpecies', name: string, id: string, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }> }>, main_region: { __typename?: 'Region', name: string } } | null };

export type GetGenerationsQueryVariables = Exact<{
  generationNumbers: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type GetGenerationsQuery = { __typename?: 'Query', generations: Array<{ __typename?: 'Generation', name: string, id: string, main_region: { __typename?: 'Region', name: string }, pokemon_species: Array<{ __typename?: 'PokemonSpecies', id: string, name: string, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }> }> }> };

export type GetPokemonQueryVariables = Exact<{
  pokemonId: Scalars['Int']['input'];
}>;


export type GetPokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', name: string, id: string, height: number, weight: number, abilities: Array<{ __typename?: 'PokemonAbility', ability: { __typename?: 'Ability', name: string, effect_entries: Array<{ __typename?: 'VerboseEffect', short_effect: string, language: { __typename?: 'Language', name: string } }>, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }> } }>, types: Array<{ __typename?: 'PokemonType', type: { __typename?: 'Type', name: string } }>, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }>, moves: Array<{ __typename?: 'PokemonMove', move: { __typename?: 'Move', id: string, power?: number | null, pp?: number | null, accuracy?: number | null, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }> } }>, cries: { __typename?: 'PokemonCries', legacy?: string | null }, stats: Array<{ __typename?: 'PokemonStat', base_stat: number, stat: { __typename?: 'Stat', name: string } }> } | null };


export const GetGenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGeneration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generationNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"generationNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generationNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pokemon_species"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"main_region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetGenerationQuery, GetGenerationQueryVariables>;
export const GetGenerationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGenerations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generationNumbers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"generationNumbers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generationNumbers"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"main_region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pokemon_species"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetGenerationsQuery, GetGenerationsQueryVariables>;
export const GetPokemonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"abilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ability"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"effect_entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short_effect"}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"moves"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"move"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"pp"}},{"kind":"Field","name":{"kind":"Name","value":"accuracy"}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legacy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base_stat"}},{"kind":"Field","name":{"kind":"Name","value":"stat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPokemonQuery, GetPokemonQueryVariables>;