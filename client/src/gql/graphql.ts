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
  /** The ability's name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
  /** The ability's url */
  url: Scalars['String']['output'];
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
  /** The artwork depicting this Pokémon. */
  artwork: Scalars['String']['output'];
  /** A set of cries used to depict this Pokémon in the game. */
  cries: PokemonCries;
  /** The pokemon's height */
  height: Scalars['Int']['output'];
  /** The pokemon's pokedex ID */
  id: Scalars['ID']['output'];
  /** The pokemon's name */
  name: Scalars['String']['output'];
  /** The name of this resource listed in different languages. */
  names: Array<Name>;
  /** A set of sprites used to depict this Pokémon in the game. */
  sprites: PokemonSprites;
  /** A list of details showing types this Pokémon has. */
  types: Array<PokemonType>;
  /** The pokemon's weight */
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
  legacy: Scalars['String']['output'];
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

export type PokemonSprites = {
  __typename?: 'PokemonSprites';
  /** The default depiction of this Pokémon from the back in battle. */
  back_default: Scalars['String']['output'];
  /** The female depiction of this Pokémon from the back in battle. */
  back_female?: Maybe<Scalars['String']['output']>;
  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny?: Maybe<Scalars['String']['output']>;
  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: Scalars['String']['output'];
  /** The female depiction of this Pokémon from the front in battle. */
  front_female?: Maybe<Scalars['String']['output']>;
  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny?: Maybe<Scalars['String']['output']>;
  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female?: Maybe<Scalars['String']['output']>;
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
  /** Fetch a generation by its number */
  generation?: Maybe<Generation>;
  /** Fetch a pokemon by its pokedex number */
  pokemon?: Maybe<Pokemon>;
  /** Fetch a pokemon species by its ID or name */
  pokemonSpecies?: Maybe<PokemonSpecies>;
};


export type QueryGenerationArgs = {
  generationNumber: Scalars['Int']['input'];
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

export type Type = {
  __typename?: 'Type';
  /** The type's ID */
  id: Scalars['ID']['output'];
  /** The type's name */
  name: Scalars['String']['output'];
};

export type GetGenerationQueryVariables = Exact<{
  generationNumber: Scalars['Int']['input'];
}>;


export type GetGenerationQuery = { __typename?: 'Query', generation?: { __typename?: 'Generation', name: string, pokemon_species: Array<{ __typename?: 'PokemonSpecies', id: string, name: string }>, main_region: { __typename?: 'Region', name: string } } | null };

export type GetPokemonQueryVariables = Exact<{
  pokemonId: Scalars['Int']['input'];
}>;


export type GetPokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', name: string, id: string, height: number, weight: number, artwork: string, abilities: Array<{ __typename?: 'PokemonAbility', slot: number, ability: { __typename?: 'Ability', name: string, url: string, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }> } }>, sprites: { __typename?: 'PokemonSprites', front_default: string, back_default: string }, types: Array<{ __typename?: 'PokemonType', type: { __typename?: 'Type', name: string } }>, names: Array<{ __typename?: 'Name', name: string, language: { __typename?: 'Language', name: string } }> } | null };


export const GetGenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGeneration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"generationNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"generationNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"generationNumber"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pokemon_species"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"main_region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetGenerationQuery, GetGenerationQueryVariables>;
export const GetPokemonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pokemonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"abilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slot"}},{"kind":"Field","name":{"kind":"Name","value":"ability"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sprites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"front_default"}},{"kind":"Field","name":{"kind":"Name","value":"back_default"}}]}},{"kind":"Field","name":{"kind":"Name","value":"artwork"}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPokemonQuery, GetPokemonQueryVariables>;