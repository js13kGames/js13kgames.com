import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A JavaScript object encoded in the JSON format as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
};

/** All input for the create `Edition` mutation. */
export type CreateEditionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Edition` to be created by this mutation. */
  readonly edition: EditionInput;
};


/** All input for the create `FlywaySchemaHistory` mutation. */
export type CreateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `FlywaySchemaHistory` to be created by this mutation. */
  readonly flywaySchemaHistory: FlywaySchemaHistoryInput;
};


/** All input for the create `Game` mutation. */
export type CreateGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Game` to be created by this mutation. */
  readonly game: GameInput;
};


/** All input for the create `HeroDatum` mutation. */
export type CreateHeroDatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `HeroDatum` to be created by this mutation. */
  readonly heroDatum: HeroDatumInput;
};


/** All input for the create `MenuItem` mutation. */
export type CreateMenuItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `MenuItem` to be created by this mutation. */
  readonly menuItem: MenuItemInput;
};


/** All input for the create `Page` mutation. */
export type CreatePageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Page` to be created by this mutation. */
  readonly page: PageInput;
};


/** All input for the create `SocialLink` mutation. */
export type CreateSocialLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `SocialLink` to be created by this mutation. */
  readonly socialLink: SocialLinkInput;
};


/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  readonly user: UserInput;
};




/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Datetime']>>;
};

/** All input for the `deleteEditionByName` mutation. */
export type DeleteEditionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

/** All input for the `deleteEditionByNodeId` mutation. */
export type DeleteEditionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Edition` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteEdition` mutation. */
export type DeleteEditionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteFlywaySchemaHistoryByNodeId` mutation. */
export type DeleteFlywaySchemaHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteFlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly installedRank: Scalars['Int'];
};


/** All input for the `deleteGameByNodeId` mutation. */
export type DeleteGameByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Game` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteGame` mutation. */
export type DeleteGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteHeroDatumByNodeId` mutation. */
export type DeleteHeroDatumByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `HeroDatum` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteHeroDatum` mutation. */
export type DeleteHeroDatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteMenuItemByNodeId` mutation. */
export type DeleteMenuItemByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenuItem` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteMenuItem` mutation. */
export type DeleteMenuItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deletePageByEditionIdAndKey` mutation. */
export type DeletePageByEditionIdAndKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly editionId: Scalars['UUID'];
  readonly key: Scalars['String'];
};

/** All input for the `deletePageByNodeId` mutation. */
export type DeletePageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Page` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deletePage` mutation. */
export type DeletePageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteSocialLinkByNodeId` mutation. */
export type DeleteSocialLinkByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SocialLink` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteSocialLink` mutation. */
export type DeleteSocialLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteUserByIdentityId` mutation. */
export type DeleteUserByIdentityIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly identityId: Scalars['String'];
};

/** All input for the `deleteUserByNodeId` mutation. */
export type DeleteUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};



/** A condition to be used against `Edition` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type EditionCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `endsAt` field. */
  readonly endsAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  readonly name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `startsAt` field. */
  readonly startsAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `theme` field. */
  readonly theme?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Edition` object types. All fields are combined with a logical ‘and.’ */
export type EditionFilter = {
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<EditionFilter>>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `endsAt` field. */
  readonly endsAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `name` field. */
  readonly name?: Maybe<StringFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<EditionFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<EditionFilter>>;
  /** Filter by the object’s `startsAt` field. */
  readonly startsAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `theme` field. */
  readonly theme?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
};

/** An input for mutations affecting `Edition` */
export type EditionInput = {
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly endsAt: Scalars['Datetime'];
  readonly id?: Maybe<Scalars['UUID']>;
  readonly name: Scalars['String'];
  readonly startsAt: Scalars['Datetime'];
  readonly theme: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Edition`. Fields that are set will be updated. */
export type EditionPatch = {
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly endsAt?: Maybe<Scalars['Datetime']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly startsAt?: Maybe<Scalars['Datetime']>;
  readonly theme?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};



/** Methods to use when ordering `Edition`. */
export type EditionsOrderBy =
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'ENDS_AT_ASC'
  | 'ENDS_AT_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'NATURAL'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'STARTS_AT_ASC'
  | 'STARTS_AT_DESC'
  | 'THEME_ASC'
  | 'THEME_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC';



/** Methods to use when ordering `FlywaySchemaHistory`. */
export type FlywaySchemaHistoriesOrderBy =
  | 'CHECKSUM_ASC'
  | 'CHECKSUM_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'EXECUTION_TIME_ASC'
  | 'EXECUTION_TIME_DESC'
  | 'INSTALLED_BY_ASC'
  | 'INSTALLED_BY_DESC'
  | 'INSTALLED_ON_ASC'
  | 'INSTALLED_ON_DESC'
  | 'INSTALLED_RANK_ASC'
  | 'INSTALLED_RANK_DESC'
  | 'NATURAL'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'SCRIPT_ASC'
  | 'SCRIPT_DESC'
  | 'SUCCESS_ASC'
  | 'SUCCESS_DESC'
  | 'TYPE_ASC'
  | 'TYPE_DESC'
  | 'VERSION_ASC'
  | 'VERSION_DESC';


/**
 * A condition to be used against `FlywaySchemaHistory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type FlywaySchemaHistoryCondition = {
  /** Checks for equality with the object’s `checksum` field. */
  readonly checksum?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `description` field. */
  readonly description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `executionTime` field. */
  readonly executionTime?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `installedBy` field. */
  readonly installedBy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `installedOn` field. */
  readonly installedOn?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `installedRank` field. */
  readonly installedRank?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `script` field. */
  readonly script?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `success` field. */
  readonly success?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `type` field. */
  readonly type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `version` field. */
  readonly version?: Maybe<Scalars['String']>;
};

/** A filter to be used against `FlywaySchemaHistory` object types. All fields are combined with a logical ‘and.’ */
export type FlywaySchemaHistoryFilter = {
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<FlywaySchemaHistoryFilter>>;
  /** Filter by the object’s `checksum` field. */
  readonly checksum?: Maybe<IntFilter>;
  /** Filter by the object’s `description` field. */
  readonly description?: Maybe<StringFilter>;
  /** Filter by the object’s `executionTime` field. */
  readonly executionTime?: Maybe<IntFilter>;
  /** Filter by the object’s `installedBy` field. */
  readonly installedBy?: Maybe<StringFilter>;
  /** Filter by the object’s `installedOn` field. */
  readonly installedOn?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `installedRank` field. */
  readonly installedRank?: Maybe<IntFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<FlywaySchemaHistoryFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<FlywaySchemaHistoryFilter>>;
  /** Filter by the object’s `script` field. */
  readonly script?: Maybe<StringFilter>;
  /** Filter by the object’s `success` field. */
  readonly success?: Maybe<BooleanFilter>;
  /** Filter by the object’s `type` field. */
  readonly type?: Maybe<StringFilter>;
  /** Filter by the object’s `version` field. */
  readonly version?: Maybe<StringFilter>;
};

/** An input for mutations affecting `FlywaySchemaHistory` */
export type FlywaySchemaHistoryInput = {
  readonly checksum?: Maybe<Scalars['Int']>;
  readonly description: Scalars['String'];
  readonly executionTime: Scalars['Int'];
  readonly installedBy: Scalars['String'];
  readonly installedOn?: Maybe<Scalars['Datetime']>;
  readonly installedRank: Scalars['Int'];
  readonly script: Scalars['String'];
  readonly success: Scalars['Boolean'];
  readonly type: Scalars['String'];
  readonly version?: Maybe<Scalars['String']>;
};

/** Represents an update to a `FlywaySchemaHistory`. Fields that are set will be updated. */
export type FlywaySchemaHistoryPatch = {
  readonly checksum?: Maybe<Scalars['Int']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly executionTime?: Maybe<Scalars['Int']>;
  readonly installedBy?: Maybe<Scalars['String']>;
  readonly installedOn?: Maybe<Scalars['Datetime']>;
  readonly installedRank?: Maybe<Scalars['Int']>;
  readonly script?: Maybe<Scalars['String']>;
  readonly success?: Maybe<Scalars['Boolean']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};


/** A condition to be used against `Game` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type GameCondition = {
  /** Checks for equality with the object’s `authorId` field. */
  readonly authorId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  readonly description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `editableUntil` field. */
  readonly editableUntil?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `editionId` field. */
  readonly editionId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `githubLink` field. */
  readonly githubLink?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isApproved` field. */
  readonly isApproved?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isHidden` field. */
  readonly isHidden?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `isPublished` field. */
  readonly isPublished?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `name` field. */
  readonly name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `photo` field. */
  readonly photo?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `uploadData` field. */
  readonly uploadData?: Maybe<Scalars['JSON']>;
};

/** A filter to be used against `Game` object types. All fields are combined with a logical ‘and.’ */
export type GameFilter = {
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<GameFilter>>;
  /** Filter by the object’s `authorId` field. */
  readonly authorId?: Maybe<UuidFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  readonly description?: Maybe<StringFilter>;
  /** Filter by the object’s `editableUntil` field. */
  readonly editableUntil?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `editionId` field. */
  readonly editionId?: Maybe<UuidFilter>;
  /** Filter by the object’s `githubLink` field. */
  readonly githubLink?: Maybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `isApproved` field. */
  readonly isApproved?: Maybe<BooleanFilter>;
  /** Filter by the object’s `isHidden` field. */
  readonly isHidden?: Maybe<BooleanFilter>;
  /** Filter by the object’s `isPublished` field. */
  readonly isPublished?: Maybe<BooleanFilter>;
  /** Filter by the object’s `name` field. */
  readonly name?: Maybe<StringFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<GameFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<GameFilter>>;
  /** Filter by the object’s `photo` field. */
  readonly photo?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `uploadData` field. */
  readonly uploadData?: Maybe<JsonFilter>;
};

/** An input for mutations affecting `Game` */
export type GameInput = {
  readonly authorId?: Maybe<Scalars['UUID']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly description: Scalars['String'];
  readonly editableUntil: Scalars['Datetime'];
  readonly editionId: Scalars['UUID'];
  readonly githubLink: Scalars['String'];
  readonly id?: Maybe<Scalars['UUID']>;
  readonly isApproved?: Maybe<Scalars['Boolean']>;
  readonly isHidden?: Maybe<Scalars['Boolean']>;
  readonly isPublished?: Maybe<Scalars['Boolean']>;
  readonly name: Scalars['String'];
  readonly photo: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly uploadData?: Maybe<Scalars['JSON']>;
};

/** Represents an update to a `Game`. Fields that are set will be updated. */
export type GamePatch = {
  readonly authorId?: Maybe<Scalars['UUID']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly editableUntil?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly githubLink?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly isApproved?: Maybe<Scalars['Boolean']>;
  readonly isHidden?: Maybe<Scalars['Boolean']>;
  readonly isPublished?: Maybe<Scalars['Boolean']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly photo?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly uploadData?: Maybe<Scalars['JSON']>;
};



/** Methods to use when ordering `Game`. */
export type GamesOrderBy =
  | 'AUTHOR_ID_ASC'
  | 'AUTHOR_ID_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'EDITABLE_UNTIL_ASC'
  | 'EDITABLE_UNTIL_DESC'
  | 'EDITION_ID_ASC'
  | 'EDITION_ID_DESC'
  | 'GITHUB_LINK_ASC'
  | 'GITHUB_LINK_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'IS_APPROVED_ASC'
  | 'IS_APPROVED_DESC'
  | 'IS_HIDDEN_ASC'
  | 'IS_HIDDEN_DESC'
  | 'IS_PUBLISHED_ASC'
  | 'IS_PUBLISHED_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'NATURAL'
  | 'PHOTO_ASC'
  | 'PHOTO_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'UPLOAD_DATA_ASC'
  | 'UPLOAD_DATA_DESC';

/** All input for the `getOrCreateUser` mutation. */
export type GetOrCreateUserInput = {
  readonly avatar?: Maybe<Scalars['String']>;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly identity?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly userName?: Maybe<Scalars['String']>;
};




/** Methods to use when ordering `HeroDatum`. */
export type HeroDataOrderBy =
  | 'ACTIVE_ASC'
  | 'ACTIVE_DESC'
  | 'BACKGROUND_IMAGE_ASC'
  | 'BACKGROUND_IMAGE_DESC'
  | 'CALL_TO_ACTION_TEXT_ASC'
  | 'CALL_TO_ACTION_TEXT_DESC'
  | 'CALL_TO_ACTION_URL_ASC'
  | 'CALL_TO_ACTION_URL_DESC'
  | 'COUNTDOWN_DATE_ASC'
  | 'COUNTDOWN_DATE_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'EDITION_ID_ASC'
  | 'EDITION_ID_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NATURAL'
  | 'PAGE_ASC'
  | 'PAGE_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'PRIMARY_TEXT_ASC'
  | 'PRIMARY_TEXT_DESC'
  | 'SECONDARY_TEXT_ASC'
  | 'SECONDARY_TEXT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC';


/**
 * A condition to be used against `HeroDatum` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HeroDatumCondition = {
  /** Checks for equality with the object’s `active` field. */
  readonly active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `backgroundImage` field. */
  readonly backgroundImage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `callToActionText` field. */
  readonly callToActionText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `callToActionUrl` field. */
  readonly callToActionUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `countdownDate` field. */
  readonly countdownDate?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `editionId` field. */
  readonly editionId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `page` field. */
  readonly page?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `primaryText` field. */
  readonly primaryText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `secondaryText` field. */
  readonly secondaryText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `HeroDatum` object types. All fields are combined with a logical ‘and.’ */
export type HeroDatumFilter = {
  /** Filter by the object’s `active` field. */
  readonly active?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<HeroDatumFilter>>;
  /** Filter by the object’s `backgroundImage` field. */
  readonly backgroundImage?: Maybe<StringFilter>;
  /** Filter by the object’s `callToActionText` field. */
  readonly callToActionText?: Maybe<StringFilter>;
  /** Filter by the object’s `callToActionUrl` field. */
  readonly callToActionUrl?: Maybe<StringFilter>;
  /** Filter by the object’s `countdownDate` field. */
  readonly countdownDate?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `editionId` field. */
  readonly editionId?: Maybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<HeroDatumFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<HeroDatumFilter>>;
  /** Filter by the object’s `page` field. */
  readonly page?: Maybe<StringFilter>;
  /** Filter by the object’s `primaryText` field. */
  readonly primaryText?: Maybe<StringFilter>;
  /** Filter by the object’s `secondaryText` field. */
  readonly secondaryText?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
};

/** An input for mutations affecting `HeroDatum` */
export type HeroDatumInput = {
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly backgroundImage: Scalars['String'];
  readonly callToActionText: Scalars['String'];
  readonly callToActionUrl: Scalars['String'];
  readonly countdownDate?: Maybe<Scalars['Datetime']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly page?: Maybe<Scalars['String']>;
  readonly primaryText: Scalars['String'];
  readonly secondaryText: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `HeroDatum`. Fields that are set will be updated. */
export type HeroDatumPatch = {
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly backgroundImage?: Maybe<Scalars['String']>;
  readonly callToActionText?: Maybe<Scalars['String']>;
  readonly callToActionUrl?: Maybe<Scalars['String']>;
  readonly countdownDate?: Maybe<Scalars['Datetime']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly page?: Maybe<Scalars['String']>;
  readonly primaryText?: Maybe<Scalars['String']>;
  readonly secondaryText?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Int']>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Int']>>;
};


/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contained by the specified JSON. */
  readonly containedBy?: Maybe<Scalars['JSON']>;
  /** Contains the specified JSON. */
  readonly contains?: Maybe<Scalars['JSON']>;
  /** Contains all of the specified keys. */
  readonly containsAllKeys?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Contains any of the specified keys. */
  readonly containsAnyKeys?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Contains the specified key. */
  readonly containsKey?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['JSON']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['JSON']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['JSON']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['JSON']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['JSON']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['JSON']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['JSON']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['JSON']>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['JSON']>>;
};


/**
 * A condition to be used against `MenuItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MenuItemCondition = {
  /** Checks for equality with the object’s `active` field. */
  readonly active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `editionId` field. */
  readonly editionId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `orderNumber` field. */
  readonly orderNumber?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `url` field. */
  readonly url?: Maybe<Scalars['String']>;
};

/** A filter to be used against `MenuItem` object types. All fields are combined with a logical ‘and.’ */
export type MenuItemFilter = {
  /** Filter by the object’s `active` field. */
  readonly active?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<MenuItemFilter>>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `editionId` field. */
  readonly editionId?: Maybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<MenuItemFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<MenuItemFilter>>;
  /** Filter by the object’s `orderNumber` field. */
  readonly orderNumber?: Maybe<IntFilter>;
  /** Filter by the object’s `title` field. */
  readonly title?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `url` field. */
  readonly url?: Maybe<StringFilter>;
};

/** An input for mutations affecting `MenuItem` */
export type MenuItemInput = {
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly orderNumber?: Maybe<Scalars['Int']>;
  readonly title: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly url: Scalars['String'];
};

/** Represents an update to a `MenuItem`. Fields that are set will be updated. */
export type MenuItemPatch = {
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly orderNumber?: Maybe<Scalars['Int']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly url?: Maybe<Scalars['String']>;
};



/** Methods to use when ordering `MenuItem`. */
export type MenuItemsOrderBy =
  | 'ACTIVE_ASC'
  | 'ACTIVE_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'EDITION_ID_ASC'
  | 'EDITION_ID_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NATURAL'
  | 'ORDER_NUMBER_ASC'
  | 'ORDER_NUMBER_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'URL_ASC'
  | 'URL_DESC';




/** A condition to be used against `Page` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PageCondition = {
  /** Checks for equality with the object’s `content` field. */
  readonly content?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `editionId` field. */
  readonly editionId?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `key` field. */
  readonly key?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `Page` object types. All fields are combined with a logical ‘and.’ */
export type PageFilter = {
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<PageFilter>>;
  /** Filter by the object’s `content` field. */
  readonly content?: Maybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `editionId` field. */
  readonly editionId?: Maybe<UuidFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `key` field. */
  readonly key?: Maybe<StringFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<PageFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<PageFilter>>;
  /** Filter by the object’s `title` field. */
  readonly title?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
};


/** An input for mutations affecting `Page` */
export type PageInput = {
  readonly content: Scalars['String'];
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly key: Scalars['String'];
  readonly title: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** Represents an update to a `Page`. Fields that are set will be updated. */
export type PagePatch = {
  readonly content?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly editionId?: Maybe<Scalars['UUID']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly key?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};



/** Methods to use when ordering `Page`. */
export type PagesOrderBy =
  | 'CONTENT_ASC'
  | 'CONTENT_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'EDITION_ID_ASC'
  | 'EDITION_ID_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'KEY_ASC'
  | 'KEY_DESC'
  | 'NATURAL'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC';



/**
 * A condition to be used against `SocialLink` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SocialLinkCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `url` field. */
  readonly url?: Maybe<Scalars['String']>;
};

/** A filter to be used against `SocialLink` object types. All fields are combined with a logical ‘and.’ */
export type SocialLinkFilter = {
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<SocialLinkFilter>>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<SocialLinkFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<SocialLinkFilter>>;
  /** Filter by the object’s `title` field. */
  readonly title?: Maybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `url` field. */
  readonly url?: Maybe<StringFilter>;
};

/** An input for mutations affecting `SocialLink` */
export type SocialLinkInput = {
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly title: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly url: Scalars['String'];
};

/** Represents an update to a `SocialLink`. Fields that are set will be updated. */
export type SocialLinkPatch = {
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly url?: Maybe<Scalars['String']>;
};



/** Methods to use when ordering `SocialLink`. */
export type SocialLinksOrderBy =
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NATURAL'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'URL_ASC'
  | 'URL_DESC';

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  readonly distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  readonly endsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  readonly endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  readonly equalToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  readonly greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  readonly greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  readonly inInsensitive?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  readonly includes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  readonly includesInsensitive?: Maybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  readonly lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  readonly lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly like?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly likeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  readonly notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  readonly notEndsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  readonly notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  readonly notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  readonly notInInsensitive?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  readonly notIncludes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  readonly notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly notLike?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  readonly notStartsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  readonly notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  readonly startsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  readonly startsWithInsensitive?: Maybe<Scalars['String']>;
};


/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['UUID']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['UUID']>>;
};

/** All input for the `updateEditionByName` mutation. */
export type UpdateEditionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  /** An object where the defined keys will be set on the `Edition` being updated. */
  readonly patch: EditionPatch;
};

/** All input for the `updateEditionByNodeId` mutation. */
export type UpdateEditionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Edition` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Edition` being updated. */
  readonly patch: EditionPatch;
};

/** All input for the `updateEdition` mutation. */
export type UpdateEditionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Edition` being updated. */
  readonly patch: EditionPatch;
};


/** All input for the `updateFlywaySchemaHistoryByNodeId` mutation. */
export type UpdateFlywaySchemaHistoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  readonly patch: FlywaySchemaHistoryPatch;
};

/** All input for the `updateFlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly installedRank: Scalars['Int'];
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  readonly patch: FlywaySchemaHistoryPatch;
};


/** All input for the `updateGameByNodeId` mutation. */
export type UpdateGameByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Game` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Game` being updated. */
  readonly patch: GamePatch;
};

/** All input for the `updateGame` mutation. */
export type UpdateGameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Game` being updated. */
  readonly patch: GamePatch;
};


/** All input for the `updateHeroDatumByNodeId` mutation. */
export type UpdateHeroDatumByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `HeroDatum` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `HeroDatum` being updated. */
  readonly patch: HeroDatumPatch;
};

/** All input for the `updateHeroDatum` mutation. */
export type UpdateHeroDatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `HeroDatum` being updated. */
  readonly patch: HeroDatumPatch;
};


/** All input for the `updateMenuItemByNodeId` mutation. */
export type UpdateMenuItemByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenuItem` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MenuItem` being updated. */
  readonly patch: MenuItemPatch;
};

/** All input for the `updateMenuItem` mutation. */
export type UpdateMenuItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `MenuItem` being updated. */
  readonly patch: MenuItemPatch;
};


/** All input for the `updatePageByEditionIdAndKey` mutation. */
export type UpdatePageByEditionIdAndKeyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly editionId: Scalars['UUID'];
  readonly key: Scalars['String'];
  /** An object where the defined keys will be set on the `Page` being updated. */
  readonly patch: PagePatch;
};

/** All input for the `updatePageByNodeId` mutation. */
export type UpdatePageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Page` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Page` being updated. */
  readonly patch: PagePatch;
};

/** All input for the `updatePage` mutation. */
export type UpdatePageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Page` being updated. */
  readonly patch: PagePatch;
};


/** All input for the `updateSocialLinkByNodeId` mutation. */
export type UpdateSocialLinkByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SocialLink` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SocialLink` being updated. */
  readonly patch: SocialLinkPatch;
};

/** All input for the `updateSocialLink` mutation. */
export type UpdateSocialLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `SocialLink` being updated. */
  readonly patch: SocialLinkPatch;
};


/** All input for the `updateUserByIdentityId` mutation. */
export type UpdateUserByIdentityIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly identityId: Scalars['String'];
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch;
};

/** All input for the `updateUserByNodeId` mutation. */
export type UpdateUserByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  readonly patch: UserPatch;
};



/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `active` field. */
  readonly active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `avatar` field. */
  readonly avatar?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  readonly description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  readonly email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `identityId` field. */
  readonly identityId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `kind` field. */
  readonly kind?: Maybe<UserTypeT>;
  /** Checks for equality with the object’s `name` field. */
  readonly name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `userName` field. */
  readonly userName?: Maybe<Scalars['String']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `active` field. */
  readonly active?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<UserFilter>>;
  /** Filter by the object’s `avatar` field. */
  readonly avatar?: Maybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `description` field. */
  readonly description?: Maybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  readonly email?: Maybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `identityId` field. */
  readonly identityId?: Maybe<StringFilter>;
  /** Filter by the object’s `kind` field. */
  readonly kind?: Maybe<UserTypeTFilter>;
  /** Filter by the object’s `name` field. */
  readonly name?: Maybe<StringFilter>;
  /** Negates the expression. */
  readonly not?: Maybe<UserFilter>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<UserFilter>>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `userName` field. */
  readonly userName?: Maybe<StringFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly avatar: Scalars['String'];
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly description: Scalars['String'];
  readonly email: Scalars['String'];
  readonly id?: Maybe<Scalars['UUID']>;
  readonly identityId: Scalars['String'];
  readonly kind?: Maybe<UserTypeT>;
  readonly name: Scalars['String'];
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly userName: Scalars['String'];
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly avatar?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['UUID']>;
  readonly identityId?: Maybe<Scalars['String']>;
  readonly kind?: Maybe<UserTypeT>;
  readonly name?: Maybe<Scalars['String']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
  readonly userName?: Maybe<Scalars['String']>;
};

export type UserTypeT =
  | 'ADMIN'
  | 'EXPERT'
  | 'REGULAR'
  | 'TEAM';

/** A filter to be used against UserTypeT fields. All fields are combined with a logical ‘and.’ */
export type UserTypeTFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<UserTypeT>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<UserTypeT>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<UserTypeT>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<UserTypeT>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<UserTypeT>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<UserTypeT>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<UserTypeT>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<UserTypeT>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<UserTypeT>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<UserTypeT>>;
};



/** Methods to use when ordering `User`. */
export type UsersOrderBy =
  | 'ACTIVE_ASC'
  | 'ACTIVE_DESC'
  | 'AVATAR_ASC'
  | 'AVATAR_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'EMAIL_ASC'
  | 'EMAIL_DESC'
  | 'IDENTITY_ID_ASC'
  | 'IDENTITY_ID_DESC'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'KIND_ASC'
  | 'KIND_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'NATURAL'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'USER_NAME_ASC'
  | 'USER_NAME_DESC';

export type EditionByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type EditionByNameQuery = { readonly editionByName?: Maybe<{ readonly id: any, readonly name: string, readonly theme: string, readonly startsAt: any, readonly endsAt: any }> };

export type EditionByIdQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type EditionByIdQuery = { readonly edition?: Maybe<{ readonly id: any, readonly name: string, readonly theme: string, readonly startsAt: any, readonly endsAt: any }> };

export type CurrentEditionIdQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentEditionIdQuery = { readonly currentEdition?: Maybe<any> };

export type GetOrCreateUserMutationVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  identity?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
}>;


export type GetOrCreateUserMutation = { readonly getOrCreateUser?: Maybe<{ readonly user?: Maybe<{ readonly id: any }> }> };

export type HeroDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroDataQuery = { readonly heroData?: Maybe<{ readonly nodes: ReadonlyArray<{ readonly primaryText: string, readonly secondaryText: string, readonly countdownDate?: Maybe<any>, readonly backgroundImage: string, readonly callToActionText: string, readonly callToActionUrl: string }> }> };

export type MenuItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuItemsQuery = { readonly menuItems?: Maybe<{ readonly nodes: ReadonlyArray<{ readonly title: string, readonly url: string }> }> };

export type PageByEditionAndKeyQueryVariables = Exact<{
  editionId: Scalars['UUID'];
  key: Scalars['String'];
}>;


export type PageByEditionAndKeyQuery = { readonly page?: Maybe<{ readonly content: string, readonly id: any, readonly key: string, readonly title: string }> };

export type SocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialLinksQuery = { readonly socialLinks?: Maybe<{ readonly nodes: ReadonlyArray<{ readonly title: string, readonly url: string }> }> };

export type UsersQueryVariables = Exact<{
  userName?: Maybe<Scalars['String']>;
}>;


export type UsersQuery = { readonly users?: Maybe<{ readonly nodes: ReadonlyArray<{ readonly avatar: string, readonly email: string, readonly name: string, readonly description: string }> }> };


export const EditionByNameDocument = gql`
    query editionByName($name: String!) {
  editionByName(name: $name) {
    id
    name
    theme
    startsAt
    endsAt
  }
}
    `;

/**
 * __useEditionByNameQuery__
 *
 * To run a query within a React component, call `useEditionByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditionByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditionByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useEditionByNameQuery(baseOptions?: Apollo.QueryHookOptions<EditionByNameQuery, EditionByNameQueryVariables>) {
        return Apollo.useQuery<EditionByNameQuery, EditionByNameQueryVariables>(EditionByNameDocument, baseOptions);
      }
export function useEditionByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditionByNameQuery, EditionByNameQueryVariables>) {
          return Apollo.useLazyQuery<EditionByNameQuery, EditionByNameQueryVariables>(EditionByNameDocument, baseOptions);
        }
export type EditionByNameQueryHookResult = ReturnType<typeof useEditionByNameQuery>;
export type EditionByNameLazyQueryHookResult = ReturnType<typeof useEditionByNameLazyQuery>;
export type EditionByNameQueryResult = Apollo.QueryResult<EditionByNameQuery, EditionByNameQueryVariables>;
export function refetchEditionByNameQuery(variables?: EditionByNameQueryVariables) {
      return { query: EditionByNameDocument, variables: variables }
    }
export const EditionByIdDocument = gql`
    query editionById($id: UUID!) {
  edition(id: $id) {
    id
    name
    theme
    startsAt
    endsAt
  }
}
    `;

/**
 * __useEditionByIdQuery__
 *
 * To run a query within a React component, call `useEditionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditionByIdQuery(baseOptions?: Apollo.QueryHookOptions<EditionByIdQuery, EditionByIdQueryVariables>) {
        return Apollo.useQuery<EditionByIdQuery, EditionByIdQueryVariables>(EditionByIdDocument, baseOptions);
      }
export function useEditionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditionByIdQuery, EditionByIdQueryVariables>) {
          return Apollo.useLazyQuery<EditionByIdQuery, EditionByIdQueryVariables>(EditionByIdDocument, baseOptions);
        }
export type EditionByIdQueryHookResult = ReturnType<typeof useEditionByIdQuery>;
export type EditionByIdLazyQueryHookResult = ReturnType<typeof useEditionByIdLazyQuery>;
export type EditionByIdQueryResult = Apollo.QueryResult<EditionByIdQuery, EditionByIdQueryVariables>;
export function refetchEditionByIdQuery(variables?: EditionByIdQueryVariables) {
      return { query: EditionByIdDocument, variables: variables }
    }
export const CurrentEditionIdDocument = gql`
    query currentEditionId {
  currentEdition
}
    `;

/**
 * __useCurrentEditionIdQuery__
 *
 * To run a query within a React component, call `useCurrentEditionIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentEditionIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentEditionIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentEditionIdQuery(baseOptions?: Apollo.QueryHookOptions<CurrentEditionIdQuery, CurrentEditionIdQueryVariables>) {
        return Apollo.useQuery<CurrentEditionIdQuery, CurrentEditionIdQueryVariables>(CurrentEditionIdDocument, baseOptions);
      }
export function useCurrentEditionIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentEditionIdQuery, CurrentEditionIdQueryVariables>) {
          return Apollo.useLazyQuery<CurrentEditionIdQuery, CurrentEditionIdQueryVariables>(CurrentEditionIdDocument, baseOptions);
        }
export type CurrentEditionIdQueryHookResult = ReturnType<typeof useCurrentEditionIdQuery>;
export type CurrentEditionIdLazyQueryHookResult = ReturnType<typeof useCurrentEditionIdLazyQuery>;
export type CurrentEditionIdQueryResult = Apollo.QueryResult<CurrentEditionIdQuery, CurrentEditionIdQueryVariables>;
export function refetchCurrentEditionIdQuery(variables?: CurrentEditionIdQueryVariables) {
      return { query: CurrentEditionIdDocument, variables: variables }
    }
export const GetOrCreateUserDocument = gql`
    mutation getOrCreateUser($name: String, $avatar: String, $email: String, $identity: String, $userName: String) {
  getOrCreateUser(
    input: {avatar: $avatar, email: $email, identity: $identity, name: $name, userName: $userName}
  ) {
    user {
      id
    }
  }
}
    `;
export type GetOrCreateUserMutationFn = Apollo.MutationFunction<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>;

/**
 * __useGetOrCreateUserMutation__
 *
 * To run a mutation, you first call `useGetOrCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetOrCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getOrCreateUserMutation, { data, loading, error }] = useGetOrCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      avatar: // value for 'avatar'
 *      email: // value for 'email'
 *      identity: // value for 'identity'
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useGetOrCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>) {
        return Apollo.useMutation<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>(GetOrCreateUserDocument, baseOptions);
      }
export type GetOrCreateUserMutationHookResult = ReturnType<typeof useGetOrCreateUserMutation>;
export type GetOrCreateUserMutationResult = Apollo.MutationResult<GetOrCreateUserMutation>;
export type GetOrCreateUserMutationOptions = Apollo.BaseMutationOptions<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>;
export const HeroDataDocument = gql`
    query heroData {
  heroData {
    nodes {
      primaryText
      secondaryText
      countdownDate
      backgroundImage
      callToActionText
      callToActionUrl
    }
  }
}
    `;

/**
 * __useHeroDataQuery__
 *
 * To run a query within a React component, call `useHeroDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeroDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeroDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeroDataQuery(baseOptions?: Apollo.QueryHookOptions<HeroDataQuery, HeroDataQueryVariables>) {
        return Apollo.useQuery<HeroDataQuery, HeroDataQueryVariables>(HeroDataDocument, baseOptions);
      }
export function useHeroDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeroDataQuery, HeroDataQueryVariables>) {
          return Apollo.useLazyQuery<HeroDataQuery, HeroDataQueryVariables>(HeroDataDocument, baseOptions);
        }
export type HeroDataQueryHookResult = ReturnType<typeof useHeroDataQuery>;
export type HeroDataLazyQueryHookResult = ReturnType<typeof useHeroDataLazyQuery>;
export type HeroDataQueryResult = Apollo.QueryResult<HeroDataQuery, HeroDataQueryVariables>;
export function refetchHeroDataQuery(variables?: HeroDataQueryVariables) {
      return { query: HeroDataDocument, variables: variables }
    }
export const MenuItemsDocument = gql`
    query menuItems {
  menuItems(condition: {active: true}, orderBy: [ORDER_NUMBER_ASC]) {
    nodes {
      title
      url
    }
  }
}
    `;

/**
 * __useMenuItemsQuery__
 *
 * To run a query within a React component, call `useMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenuItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMenuItemsQuery(baseOptions?: Apollo.QueryHookOptions<MenuItemsQuery, MenuItemsQueryVariables>) {
        return Apollo.useQuery<MenuItemsQuery, MenuItemsQueryVariables>(MenuItemsDocument, baseOptions);
      }
export function useMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenuItemsQuery, MenuItemsQueryVariables>) {
          return Apollo.useLazyQuery<MenuItemsQuery, MenuItemsQueryVariables>(MenuItemsDocument, baseOptions);
        }
export type MenuItemsQueryHookResult = ReturnType<typeof useMenuItemsQuery>;
export type MenuItemsLazyQueryHookResult = ReturnType<typeof useMenuItemsLazyQuery>;
export type MenuItemsQueryResult = Apollo.QueryResult<MenuItemsQuery, MenuItemsQueryVariables>;
export function refetchMenuItemsQuery(variables?: MenuItemsQueryVariables) {
      return { query: MenuItemsDocument, variables: variables }
    }
export const PageByEditionAndKeyDocument = gql`
    query pageByEditionAndKey($editionId: UUID!, $key: String!) {
  page: pageByEditionIdAndKey(editionId: $editionId, key: $key) {
    content
    id
    key
    title
  }
}
    `;

/**
 * __usePageByEditionAndKeyQuery__
 *
 * To run a query within a React component, call `usePageByEditionAndKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageByEditionAndKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageByEditionAndKeyQuery({
 *   variables: {
 *      editionId: // value for 'editionId'
 *      key: // value for 'key'
 *   },
 * });
 */
export function usePageByEditionAndKeyQuery(baseOptions?: Apollo.QueryHookOptions<PageByEditionAndKeyQuery, PageByEditionAndKeyQueryVariables>) {
        return Apollo.useQuery<PageByEditionAndKeyQuery, PageByEditionAndKeyQueryVariables>(PageByEditionAndKeyDocument, baseOptions);
      }
export function usePageByEditionAndKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageByEditionAndKeyQuery, PageByEditionAndKeyQueryVariables>) {
          return Apollo.useLazyQuery<PageByEditionAndKeyQuery, PageByEditionAndKeyQueryVariables>(PageByEditionAndKeyDocument, baseOptions);
        }
export type PageByEditionAndKeyQueryHookResult = ReturnType<typeof usePageByEditionAndKeyQuery>;
export type PageByEditionAndKeyLazyQueryHookResult = ReturnType<typeof usePageByEditionAndKeyLazyQuery>;
export type PageByEditionAndKeyQueryResult = Apollo.QueryResult<PageByEditionAndKeyQuery, PageByEditionAndKeyQueryVariables>;
export function refetchPageByEditionAndKeyQuery(variables?: PageByEditionAndKeyQueryVariables) {
      return { query: PageByEditionAndKeyDocument, variables: variables }
    }
export const SocialLinksDocument = gql`
    query socialLinks {
  socialLinks {
    nodes {
      title
      url
    }
  }
}
    `;

/**
 * __useSocialLinksQuery__
 *
 * To run a query within a React component, call `useSocialLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialLinksQuery(baseOptions?: Apollo.QueryHookOptions<SocialLinksQuery, SocialLinksQueryVariables>) {
        return Apollo.useQuery<SocialLinksQuery, SocialLinksQueryVariables>(SocialLinksDocument, baseOptions);
      }
export function useSocialLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SocialLinksQuery, SocialLinksQueryVariables>) {
          return Apollo.useLazyQuery<SocialLinksQuery, SocialLinksQueryVariables>(SocialLinksDocument, baseOptions);
        }
export type SocialLinksQueryHookResult = ReturnType<typeof useSocialLinksQuery>;
export type SocialLinksLazyQueryHookResult = ReturnType<typeof useSocialLinksLazyQuery>;
export type SocialLinksQueryResult = Apollo.QueryResult<SocialLinksQuery, SocialLinksQueryVariables>;
export function refetchSocialLinksQuery(variables?: SocialLinksQueryVariables) {
      return { query: SocialLinksDocument, variables: variables }
    }
export const UsersDocument = gql`
    query users($userName: String) {
  users(filter: {userName: {equalTo: $userName}}) {
    nodes {
      avatar
      email
      name
      description
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export function refetchUsersQuery(variables?: UsersQueryVariables) {
      return { query: UsersDocument, variables: variables }
    }