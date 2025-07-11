/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetGeneration($generationNumber: Int!) {\n    generation(generationNumber: $generationNumber) {\n      name\n      pokemon_species {\n        name\n        id\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n      main_region {\n        name\n      }\n    }\n  }\n": typeof types.GetGenerationDocument,
    "\n  query GetGenerations($generationNumbers: [Int!]!) {\n    generations(generationNumbers: $generationNumbers) {\n      name\n      id\n      main_region {\n        name\n      }\n      pokemon_species {\n        id\n        name\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n    }\n  }\n": typeof types.GetGenerationsDocument,
    "\n  query GetPokemon($pokemonId: Int!) {\n    pokemon(id: $pokemonId) {\n      name\n      id\n      height\n      weight\n      abilities {\n        ability {\n          name\n          effect_entries {\n            short_effect\n            language {\n              name\n            }\n          }\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n      names {\n        name\n        language {\n          name\n        }\n      }\n      moves {\n        move {\n          id\n          power\n          pp\n          accuracy\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      cries {\n        legacy\n      }\n      stats {\n        base_stat\n        stat {\n          name\n        }\n      }\n    }\n  }\n": typeof types.GetPokemonDocument,
};
const documents: Documents = {
    "\n  query GetGeneration($generationNumber: Int!) {\n    generation(generationNumber: $generationNumber) {\n      name\n      pokemon_species {\n        name\n        id\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n      main_region {\n        name\n      }\n    }\n  }\n": types.GetGenerationDocument,
    "\n  query GetGenerations($generationNumbers: [Int!]!) {\n    generations(generationNumbers: $generationNumbers) {\n      name\n      id\n      main_region {\n        name\n      }\n      pokemon_species {\n        id\n        name\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n    }\n  }\n": types.GetGenerationsDocument,
    "\n  query GetPokemon($pokemonId: Int!) {\n    pokemon(id: $pokemonId) {\n      name\n      id\n      height\n      weight\n      abilities {\n        ability {\n          name\n          effect_entries {\n            short_effect\n            language {\n              name\n            }\n          }\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n      names {\n        name\n        language {\n          name\n        }\n      }\n      moves {\n        move {\n          id\n          power\n          pp\n          accuracy\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      cries {\n        legacy\n      }\n      stats {\n        base_stat\n        stat {\n          name\n        }\n      }\n    }\n  }\n": types.GetPokemonDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetGeneration($generationNumber: Int!) {\n    generation(generationNumber: $generationNumber) {\n      name\n      pokemon_species {\n        name\n        id\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n      main_region {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGeneration($generationNumber: Int!) {\n    generation(generationNumber: $generationNumber) {\n      name\n      pokemon_species {\n        name\n        id\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n      main_region {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetGenerations($generationNumbers: [Int!]!) {\n    generations(generationNumbers: $generationNumbers) {\n      name\n      id\n      main_region {\n        name\n      }\n      pokemon_species {\n        id\n        name\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetGenerations($generationNumbers: [Int!]!) {\n    generations(generationNumbers: $generationNumbers) {\n      name\n      id\n      main_region {\n        name\n      }\n      pokemon_species {\n        id\n        name\n        names {\n          language {\n            name\n          }\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPokemon($pokemonId: Int!) {\n    pokemon(id: $pokemonId) {\n      name\n      id\n      height\n      weight\n      abilities {\n        ability {\n          name\n          effect_entries {\n            short_effect\n            language {\n              name\n            }\n          }\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n      names {\n        name\n        language {\n          name\n        }\n      }\n      moves {\n        move {\n          id\n          power\n          pp\n          accuracy\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      cries {\n        legacy\n      }\n      stats {\n        base_stat\n        stat {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPokemon($pokemonId: Int!) {\n    pokemon(id: $pokemonId) {\n      name\n      id\n      height\n      weight\n      abilities {\n        ability {\n          name\n          effect_entries {\n            short_effect\n            language {\n              name\n            }\n          }\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      types {\n        type {\n          name\n        }\n      }\n      names {\n        name\n        language {\n          name\n        }\n      }\n      moves {\n        move {\n          id\n          power\n          pp\n          accuracy\n          names {\n            name\n            language {\n              name\n            }\n          }\n        }\n      }\n      cries {\n        legacy\n      }\n      stats {\n        base_stat\n        stat {\n          name\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;