import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
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

/** A type that represents a pokemon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** A set of cries used to depict this Pokémon in the game. */
  cries: PokemonCries;
  /** The pokemon's height */
  height: Scalars['Int']['output'];
  /** The pokemon's pokedex ID */
  id: Scalars['ID']['output'];
  /** The pokemon's name */
  name: Scalars['String']['output'];
  /** A list of details showing types this Pokémon has. */
  types: Array<PokemonType>;
  /** The pokemon's weight */
  weight: Scalars['Int']['output'];
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
};


export type QueryGenerationArgs = {
  generationNumber: Scalars['Int']['input'];
};


export type QueryPokemonArgs = {
  id: Scalars['Int']['input'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Generation: ResolverTypeWrapper<Generation>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonCries: ResolverTypeWrapper<PokemonCries>;
  PokemonSpecies: ResolverTypeWrapper<PokemonSpecies>;
  PokemonType: ResolverTypeWrapper<PokemonType>;
  Query: ResolverTypeWrapper<{}>;
  Region: ResolverTypeWrapper<Region>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Type: ResolverTypeWrapper<Type>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Generation: Generation;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Pokemon: Pokemon;
  PokemonCries: PokemonCries;
  PokemonSpecies: PokemonSpecies;
  PokemonType: PokemonType;
  Query: {};
  Region: Region;
  String: Scalars['String']['output'];
  Type: Type;
};

export type GenerationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Generation'] = ResolversParentTypes['Generation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  main_region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  cries?: Resolver<ResolversTypes['PokemonCries'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['PokemonType']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonCriesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonCries'] = ResolversParentTypes['PokemonCries']> = {
  latest?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  legacy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpeciesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonSpecies'] = ResolversParentTypes['PokemonSpecies']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonTypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonType'] = ResolversParentTypes['PokemonType']> = {
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  generation?: Resolver<Maybe<ResolversTypes['Generation']>, ParentType, ContextType, RequireFields<QueryGenerationArgs, 'generationNumber'>>;
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<QueryPokemonArgs, 'id'>>;
};

export type RegionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Generation?: GenerationResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonCries?: PokemonCriesResolvers<ContextType>;
  PokemonSpecies?: PokemonSpeciesResolvers<ContextType>;
  PokemonType?: PokemonTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
};

