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
  Ability: ResolverTypeWrapper<Ability>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Generation: ResolverTypeWrapper<Generation>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Language: ResolverTypeWrapper<Language>;
  Name: ResolverTypeWrapper<Name>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonAbility: ResolverTypeWrapper<PokemonAbility>;
  PokemonCries: ResolverTypeWrapper<PokemonCries>;
  PokemonSpecies: ResolverTypeWrapper<PokemonSpecies>;
  PokemonSprites: ResolverTypeWrapper<PokemonSprites>;
  PokemonType: ResolverTypeWrapper<PokemonType>;
  Query: ResolverTypeWrapper<{}>;
  Region: ResolverTypeWrapper<Region>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Type: ResolverTypeWrapper<Type>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Ability: Ability;
  Boolean: Scalars['Boolean']['output'];
  Generation: Generation;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Language: Language;
  Name: Name;
  Pokemon: Pokemon;
  PokemonAbility: PokemonAbility;
  PokemonCries: PokemonCries;
  PokemonSpecies: PokemonSpecies;
  PokemonSprites: PokemonSprites;
  PokemonType: PokemonType;
  Query: {};
  Region: Region;
  String: Scalars['String']['output'];
  Type: Type;
};

export type AbilityResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Generation'] = ResolversParentTypes['Generation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  main_region?: Resolver<ResolversTypes['Region'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pokemon_species?: Resolver<Array<ResolversTypes['PokemonSpecies']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LanguageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NameResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = {
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  abilities?: Resolver<Array<ResolversTypes['PokemonAbility']>, ParentType, ContextType>;
  artwork?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cries?: Resolver<ResolversTypes['PokemonCries'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  sprites?: Resolver<ResolversTypes['PokemonSprites'], ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes['PokemonType']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonAbilityResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonAbility'] = ResolversParentTypes['PokemonAbility']> = {
  ability?: Resolver<ResolversTypes['Ability'], ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonSpritesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonSprites'] = ResolversParentTypes['PokemonSprites']> = {
  back_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  back_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonTypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonType'] = ResolversParentTypes['PokemonType']> = {
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  generation?: Resolver<Maybe<ResolversTypes['Generation']>, ParentType, ContextType, RequireFields<QueryGenerationArgs, 'generationNumber'>>;
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, Partial<QueryPokemonArgs>>;
  pokemonSpecies?: Resolver<Maybe<ResolversTypes['PokemonSpecies']>, ParentType, ContextType, Partial<QueryPokemonSpeciesArgs>>;
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
  Ability?: AbilityResolvers<ContextType>;
  Generation?: GenerationResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonAbility?: PokemonAbilityResolvers<ContextType>;
  PokemonCries?: PokemonCriesResolvers<ContextType>;
  PokemonSpecies?: PokemonSpeciesResolvers<ContextType>;
  PokemonSprites?: PokemonSpritesResolvers<ContextType>;
  PokemonType?: PokemonTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
};

