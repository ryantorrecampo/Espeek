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
  /** A set of sprites used to depict this Pokémon in the game. */
  sprites: PokemonSprites;
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
  legacy: Scalars['String']['output'];
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

export type PokemonSprites = {
  __typename?: 'PokemonSprites';
  /** The default depiction of this Pokémon from the back in battle. */
  back_default: Scalars['String']['output'];
  /** The female depiction of this Pokémon from the back in battle. */
  back_female?: Maybe<Scalars['String']['output']>;
  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny: Scalars['String']['output'];
  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: Scalars['String']['output'];
  /** The female depiction of this Pokémon from the front in battle. */
  front_female?: Maybe<Scalars['String']['output']>;
  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny: Scalars['String']['output'];
  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female?: Maybe<Scalars['String']['output']>;
  gen1_back_default?: Maybe<Scalars['String']['output']>;
  gen1_front_default?: Maybe<Scalars['String']['output']>;
  gen2_back_default?: Maybe<Scalars['String']['output']>;
  gen2_front_default?: Maybe<Scalars['String']['output']>;
  gen3_back_default?: Maybe<Scalars['String']['output']>;
  gen3_front_default?: Maybe<Scalars['String']['output']>;
  /** The official artwork of this Pokémon. */
  officialArtwork: Scalars['String']['output'];
  /** The showdown depiction of this Pokémon. */
  showdown: Scalars['String']['output'];
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
  ChainLink: ResolverTypeWrapper<ChainLink>;
  EvolutionChain: ResolverTypeWrapper<EvolutionChain>;
  EvolutionDetail: ResolverTypeWrapper<EvolutionDetail>;
  Generation: ResolverTypeWrapper<Generation>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Language: ResolverTypeWrapper<Language>;
  Move: ResolverTypeWrapper<Move>;
  Name: ResolverTypeWrapper<Name>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonAbility: ResolverTypeWrapper<PokemonAbility>;
  PokemonCries: ResolverTypeWrapper<PokemonCries>;
  PokemonMove: ResolverTypeWrapper<PokemonMove>;
  PokemonSpecies: ResolverTypeWrapper<PokemonSpecies>;
  PokemonSprites: ResolverTypeWrapper<PokemonSprites>;
  PokemonStat: ResolverTypeWrapper<PokemonStat>;
  PokemonType: ResolverTypeWrapper<PokemonType>;
  Query: ResolverTypeWrapper<{}>;
  Region: ResolverTypeWrapper<Region>;
  Stat: ResolverTypeWrapper<Stat>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Type: ResolverTypeWrapper<Type>;
  VerboseEffect: ResolverTypeWrapper<VerboseEffect>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Ability: Ability;
  Boolean: Scalars['Boolean']['output'];
  ChainLink: ChainLink;
  EvolutionChain: EvolutionChain;
  EvolutionDetail: EvolutionDetail;
  Generation: Generation;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Language: Language;
  Move: Move;
  Name: Name;
  Pokemon: Pokemon;
  PokemonAbility: PokemonAbility;
  PokemonCries: PokemonCries;
  PokemonMove: PokemonMove;
  PokemonSpecies: PokemonSpecies;
  PokemonSprites: PokemonSprites;
  PokemonStat: PokemonStat;
  PokemonType: PokemonType;
  Query: {};
  Region: Region;
  Stat: Stat;
  String: Scalars['String']['output'];
  Type: Type;
  VerboseEffect: VerboseEffect;
};

export type AbilityResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Ability'] = ResolversParentTypes['Ability']> = {
  effect_entries?: Resolver<Array<ResolversTypes['VerboseEffect']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChainLinkResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ChainLink'] = ResolversParentTypes['ChainLink']> = {
  evolution_details?: Resolver<Array<ResolversTypes['EvolutionDetail']>, ParentType, ContextType>;
  evolves_to?: Resolver<Array<ResolversTypes['ChainLink']>, ParentType, ContextType>;
  is_baby?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  species?: Resolver<ResolversTypes['PokemonSpecies'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvolutionChainResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EvolutionChain'] = ResolversParentTypes['EvolutionChain']> = {
  chain?: Resolver<ResolversTypes['ChainLink'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EvolutionDetailResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['EvolutionDetail'] = ResolversParentTypes['EvolutionDetail']> = {
  min_level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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

export type MoveResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Move'] = ResolversParentTypes['Move']> = {
  accuracy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  power?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NameResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Name'] = ResolversParentTypes['Name']> = {
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  abilities?: Resolver<Array<ResolversTypes['PokemonAbility']>, ParentType, ContextType>;
  cries?: Resolver<ResolversTypes['PokemonCries'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  moves?: Resolver<Array<ResolversTypes['PokemonMove']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  sprites?: Resolver<ResolversTypes['PokemonSprites'], ParentType, ContextType>;
  stats?: Resolver<Array<ResolversTypes['PokemonStat']>, ParentType, ContextType>;
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

export type PokemonMoveResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonMove'] = ResolversParentTypes['PokemonMove']> = {
  move?: Resolver<ResolversTypes['Move'], ParentType, ContextType>;
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
  back_shiny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  back_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_default?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  front_shiny?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  front_shiny_female?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gen1_back_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gen1_front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gen2_back_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gen2_front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gen3_back_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gen3_front_default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  officialArtwork?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  showdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonStatResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonStat'] = ResolversParentTypes['PokemonStat']> = {
  base_stat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['Stat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonTypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PokemonType'] = ResolversParentTypes['PokemonType']> = {
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  evolutionChain?: Resolver<Maybe<ResolversTypes['EvolutionChain']>, ParentType, ContextType, RequireFields<QueryEvolutionChainArgs, 'id'>>;
  generation?: Resolver<Maybe<ResolversTypes['Generation']>, ParentType, ContextType, RequireFields<QueryGenerationArgs, 'generationNumber'>>;
  generations?: Resolver<Array<ResolversTypes['Generation']>, ParentType, ContextType, RequireFields<QueryGenerationsArgs, 'generationNumbers'>>;
  pokemon?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, Partial<QueryPokemonArgs>>;
  pokemonSpecies?: Resolver<Maybe<ResolversTypes['PokemonSpecies']>, ParentType, ContextType, Partial<QueryPokemonSpeciesArgs>>;
};

export type RegionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Region'] = ResolversParentTypes['Region']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Stat'] = ResolversParentTypes['Stat']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  names?: Resolver<Array<ResolversTypes['Name']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Type'] = ResolversParentTypes['Type']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerboseEffectResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['VerboseEffect'] = ResolversParentTypes['VerboseEffect']> = {
  effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['Language'], ParentType, ContextType>;
  short_effect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Ability?: AbilityResolvers<ContextType>;
  ChainLink?: ChainLinkResolvers<ContextType>;
  EvolutionChain?: EvolutionChainResolvers<ContextType>;
  EvolutionDetail?: EvolutionDetailResolvers<ContextType>;
  Generation?: GenerationResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Move?: MoveResolvers<ContextType>;
  Name?: NameResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonAbility?: PokemonAbilityResolvers<ContextType>;
  PokemonCries?: PokemonCriesResolvers<ContextType>;
  PokemonMove?: PokemonMoveResolvers<ContextType>;
  PokemonSpecies?: PokemonSpeciesResolvers<ContextType>;
  PokemonSprites?: PokemonSpritesResolvers<ContextType>;
  PokemonStat?: PokemonStatResolvers<ContextType>;
  PokemonType?: PokemonTypeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  Stat?: StatResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
  VerboseEffect?: VerboseEffectResolvers<ContextType>;
};

