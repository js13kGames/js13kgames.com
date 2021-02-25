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
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};









/** Methods to use when ordering `FlywaySchemaHistory`. */
export type FlywaySchemaHistoriesOrderBy =
  | 'NATURAL'
  | 'INSTALLED_RANK_ASC'
  | 'INSTALLED_RANK_DESC'
  | 'VERSION_ASC'
  | 'VERSION_DESC'
  | 'DESCRIPTION_ASC'
  | 'DESCRIPTION_DESC'
  | 'TYPE_ASC'
  | 'TYPE_DESC'
  | 'SCRIPT_ASC'
  | 'SCRIPT_DESC'
  | 'CHECKSUM_ASC'
  | 'CHECKSUM_DESC'
  | 'INSTALLED_BY_ASC'
  | 'INSTALLED_BY_DESC'
  | 'INSTALLED_ON_ASC'
  | 'INSTALLED_ON_DESC'
  | 'EXECUTION_TIME_ASC'
  | 'EXECUTION_TIME_DESC'
  | 'SUCCESS_ASC'
  | 'SUCCESS_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `FlywaySchemaHistory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type FlywaySchemaHistoryCondition = {
  /** Checks for equality with the object’s `installedRank` field. */
  readonly installedRank?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `version` field. */
  readonly version?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  readonly description?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `type` field. */
  readonly type?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `script` field. */
  readonly script?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `checksum` field. */
  readonly checksum?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `installedBy` field. */
  readonly installedBy?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `installedOn` field. */
  readonly installedOn?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `executionTime` field. */
  readonly executionTime?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `success` field. */
  readonly success?: Maybe<Scalars['Boolean']>;
};

/** A filter to be used against `FlywaySchemaHistory` object types. All fields are combined with a logical ‘and.’ */
export type FlywaySchemaHistoryFilter = {
  /** Filter by the object’s `installedRank` field. */
  readonly installedRank?: Maybe<IntFilter>;
  /** Filter by the object’s `version` field. */
  readonly version?: Maybe<StringFilter>;
  /** Filter by the object’s `description` field. */
  readonly description?: Maybe<StringFilter>;
  /** Filter by the object’s `type` field. */
  readonly type?: Maybe<StringFilter>;
  /** Filter by the object’s `script` field. */
  readonly script?: Maybe<StringFilter>;
  /** Filter by the object’s `checksum` field. */
  readonly checksum?: Maybe<IntFilter>;
  /** Filter by the object’s `installedBy` field. */
  readonly installedBy?: Maybe<StringFilter>;
  /** Filter by the object’s `installedOn` field. */
  readonly installedOn?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `executionTime` field. */
  readonly executionTime?: Maybe<IntFilter>;
  /** Filter by the object’s `success` field. */
  readonly success?: Maybe<BooleanFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<FlywaySchemaHistoryFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<FlywaySchemaHistoryFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<FlywaySchemaHistoryFilter>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  readonly includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  readonly notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  readonly includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  readonly notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  readonly startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  readonly notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  readonly startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  readonly notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  readonly endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  readonly notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  readonly endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  readonly notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly like?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly notLike?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly likeInsensitive?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  readonly notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  readonly equalToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  readonly notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  readonly distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  readonly notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list (case-insensitive). */
  readonly inInsensitive?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  readonly notInInsensitive?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Less than the specified value (case-insensitive). */
  readonly lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  readonly lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  readonly greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  readonly greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Datetime']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Datetime']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Datetime']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['Boolean']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>;
};





/** Methods to use when ordering `HeroDatum`. */
export type HeroDataOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'PRIMARY_TEXT_ASC'
  | 'PRIMARY_TEXT_DESC'
  | 'SECONDARY_TEXT_ASC'
  | 'SECONDARY_TEXT_DESC'
  | 'COUNTDOWN_DATE_ASC'
  | 'COUNTDOWN_DATE_DESC'
  | 'CALL_TO_ACTION_TEXT_ASC'
  | 'CALL_TO_ACTION_TEXT_DESC'
  | 'CALL_TO_ACTION_URL_ASC'
  | 'CALL_TO_ACTION_URL_DESC'
  | 'BACKGROUND_IMAGE_ASC'
  | 'BACKGROUND_IMAGE_DESC'
  | 'ACTIVE_ASC'
  | 'ACTIVE_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `HeroDatum` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type HeroDatumCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `primaryText` field. */
  readonly primaryText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `secondaryText` field. */
  readonly secondaryText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `countdownDate` field. */
  readonly countdownDate?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `callToActionText` field. */
  readonly callToActionText?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `callToActionUrl` field. */
  readonly callToActionUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `backgroundImage` field. */
  readonly backgroundImage?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  readonly active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `HeroDatum` object types. All fields are combined with a logical ‘and.’ */
export type HeroDatumFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `primaryText` field. */
  readonly primaryText?: Maybe<StringFilter>;
  /** Filter by the object’s `secondaryText` field. */
  readonly secondaryText?: Maybe<StringFilter>;
  /** Filter by the object’s `countdownDate` field. */
  readonly countdownDate?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `callToActionText` field. */
  readonly callToActionText?: Maybe<StringFilter>;
  /** Filter by the object’s `callToActionUrl` field. */
  readonly callToActionUrl?: Maybe<StringFilter>;
  /** Filter by the object’s `backgroundImage` field. */
  readonly backgroundImage?: Maybe<StringFilter>;
  /** Filter by the object’s `active` field. */
  readonly active?: Maybe<BooleanFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<HeroDatumFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<HeroDatumFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<HeroDatumFilter>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  readonly isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  readonly equalTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  readonly notEqualTo?: Maybe<Scalars['UUID']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  readonly distinctFrom?: Maybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  readonly notDistinctFrom?: Maybe<Scalars['UUID']>;
  /** Included in the specified list. */
  readonly in?: Maybe<ReadonlyArray<Scalars['UUID']>>;
  /** Not included in the specified list. */
  readonly notIn?: Maybe<ReadonlyArray<Scalars['UUID']>>;
  /** Less than the specified value. */
  readonly lessThan?: Maybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  readonly lessThanOrEqualTo?: Maybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  readonly greaterThan?: Maybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  readonly greaterThanOrEqualTo?: Maybe<Scalars['UUID']>;
};




/** Methods to use when ordering `MenuItem`. */
export type MenuItemsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'URL_ASC'
  | 'URL_DESC'
  | 'ACTIVE_ASC'
  | 'ACTIVE_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `MenuItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MenuItemCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  readonly url?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `active` field. */
  readonly active?: Maybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `MenuItem` object types. All fields are combined with a logical ‘and.’ */
export type MenuItemFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `title` field. */
  readonly title?: Maybe<StringFilter>;
  /** Filter by the object’s `url` field. */
  readonly url?: Maybe<StringFilter>;
  /** Filter by the object’s `active` field. */
  readonly active?: Maybe<BooleanFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<MenuItemFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<MenuItemFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<MenuItemFilter>;
};




/** Methods to use when ordering `SocialLink`. */
export type SocialLinksOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'TITLE_ASC'
  | 'TITLE_DESC'
  | 'URL_ASC'
  | 'URL_DESC'
  | 'CREATED_AT_ASC'
  | 'CREATED_AT_DESC'
  | 'UPDATED_AT_ASC'
  | 'UPDATED_AT_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `SocialLink` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type SocialLinkCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  readonly title?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  readonly url?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `SocialLink` object types. All fields are combined with a logical ‘and.’ */
export type SocialLinkFilter = {
  /** Filter by the object’s `id` field. */
  readonly id?: Maybe<UuidFilter>;
  /** Filter by the object’s `title` field. */
  readonly title?: Maybe<StringFilter>;
  /** Filter by the object’s `url` field. */
  readonly url?: Maybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  readonly createdAt?: Maybe<DatetimeFilter>;
  /** Filter by the object’s `updatedAt` field. */
  readonly updatedAt?: Maybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  readonly and?: Maybe<ReadonlyArray<SocialLinkFilter>>;
  /** Checks for any expressions in this list. */
  readonly or?: Maybe<ReadonlyArray<SocialLinkFilter>>;
  /** Negates the expression. */
  readonly not?: Maybe<SocialLinkFilter>;
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

/** An input for mutations affecting `FlywaySchemaHistory` */
export type FlywaySchemaHistoryInput = {
  readonly installedRank: Scalars['Int'];
  readonly version?: Maybe<Scalars['String']>;
  readonly description: Scalars['String'];
  readonly type: Scalars['String'];
  readonly script: Scalars['String'];
  readonly checksum?: Maybe<Scalars['Int']>;
  readonly installedBy: Scalars['String'];
  readonly installedOn?: Maybe<Scalars['Datetime']>;
  readonly executionTime: Scalars['Int'];
  readonly success: Scalars['Boolean'];
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

/** An input for mutations affecting `HeroDatum` */
export type HeroDatumInput = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly primaryText: Scalars['String'];
  readonly secondaryText: Scalars['String'];
  readonly countdownDate?: Maybe<Scalars['Datetime']>;
  readonly callToActionText: Scalars['String'];
  readonly callToActionUrl: Scalars['String'];
  readonly backgroundImage: Scalars['String'];
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
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

/** An input for mutations affecting `MenuItem` */
export type MenuItemInput = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
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

/** An input for mutations affecting `SocialLink` */
export type SocialLinkInput = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};


/** All input for the `updateFlywaySchemaHistory` mutation. */
export type UpdateFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  readonly flywaySchemaHistoryPatch: FlywaySchemaHistoryPatch;
};

/** Represents an update to a `FlywaySchemaHistory`. Fields that are set will be updated. */
export type FlywaySchemaHistoryPatch = {
  readonly installedRank?: Maybe<Scalars['Int']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly script?: Maybe<Scalars['String']>;
  readonly checksum?: Maybe<Scalars['Int']>;
  readonly installedBy?: Maybe<Scalars['String']>;
  readonly installedOn?: Maybe<Scalars['Datetime']>;
  readonly executionTime?: Maybe<Scalars['Int']>;
  readonly success?: Maybe<Scalars['Boolean']>;
};

/** All input for the `updateFlywaySchemaHistoryByInstalledRank` mutation. */
export type UpdateFlywaySchemaHistoryByInstalledRankInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FlywaySchemaHistory` being updated. */
  readonly flywaySchemaHistoryPatch: FlywaySchemaHistoryPatch;
  readonly installedRank: Scalars['Int'];
};


/** All input for the `updateHeroDatum` mutation. */
export type UpdateHeroDatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `HeroDatum` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `HeroDatum` being updated. */
  readonly heroDatumPatch: HeroDatumPatch;
};

/** Represents an update to a `HeroDatum`. Fields that are set will be updated. */
export type HeroDatumPatch = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly primaryText?: Maybe<Scalars['String']>;
  readonly secondaryText?: Maybe<Scalars['String']>;
  readonly countdownDate?: Maybe<Scalars['Datetime']>;
  readonly callToActionText?: Maybe<Scalars['String']>;
  readonly callToActionUrl?: Maybe<Scalars['String']>;
  readonly backgroundImage?: Maybe<Scalars['String']>;
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** All input for the `updateHeroDatumById` mutation. */
export type UpdateHeroDatumByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `HeroDatum` being updated. */
  readonly heroDatumPatch: HeroDatumPatch;
  readonly id: Scalars['UUID'];
};


/** All input for the `updateMenuItem` mutation. */
export type UpdateMenuItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenuItem` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `MenuItem` being updated. */
  readonly menuItemPatch: MenuItemPatch;
};

/** Represents an update to a `MenuItem`. Fields that are set will be updated. */
export type MenuItemPatch = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly active?: Maybe<Scalars['Boolean']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** All input for the `updateMenuItemById` mutation. */
export type UpdateMenuItemByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `MenuItem` being updated. */
  readonly menuItemPatch: MenuItemPatch;
  readonly id: Scalars['UUID'];
};


/** All input for the `updateSocialLink` mutation. */
export type UpdateSocialLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SocialLink` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `SocialLink` being updated. */
  readonly socialLinkPatch: SocialLinkPatch;
};

/** Represents an update to a `SocialLink`. Fields that are set will be updated. */
export type SocialLinkPatch = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  readonly updatedAt?: Maybe<Scalars['Datetime']>;
};

/** All input for the `updateSocialLinkById` mutation. */
export type UpdateSocialLinkByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `SocialLink` being updated. */
  readonly socialLinkPatch: SocialLinkPatch;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteFlywaySchemaHistory` mutation. */
export type DeleteFlywaySchemaHistoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FlywaySchemaHistory` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteFlywaySchemaHistoryByInstalledRank` mutation. */
export type DeleteFlywaySchemaHistoryByInstalledRankInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly installedRank: Scalars['Int'];
};


/** All input for the `deleteHeroDatum` mutation. */
export type DeleteHeroDatumInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `HeroDatum` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteHeroDatumById` mutation. */
export type DeleteHeroDatumByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteMenuItem` mutation. */
export type DeleteMenuItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `MenuItem` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteMenuItemById` mutation. */
export type DeleteMenuItemByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};


/** All input for the `deleteSocialLink` mutation. */
export type DeleteSocialLinkInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `SocialLink` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** All input for the `deleteSocialLinkById` mutation. */
export type DeleteSocialLinkByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};

export type HeroDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HeroDataQuery = { readonly heroData?: Maybe<{ readonly nodes: ReadonlyArray<Maybe<{ readonly primaryText: string, readonly secondaryText: string, readonly countdownDate?: Maybe<any>, readonly backgroundImage: string, readonly callToActionText: string, readonly callToActionUrl: string }>> }> };

export type MenuItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type MenuItemsQuery = { readonly menuItems?: Maybe<{ readonly nodes: ReadonlyArray<Maybe<{ readonly title: string, readonly url: string }>> }> };

export type SocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialLinksQuery = { readonly socialLinks?: Maybe<{ readonly nodes: ReadonlyArray<Maybe<{ readonly title: string, readonly url: string }>> }> };


export const HeroDataDocument = gql`
    query heroData {
  heroData: allHeroData {
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
  menuItems: allMenuItems(condition: {active: true}) {
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
export const SocialLinksDocument = gql`
    query socialLinks {
  socialLinks: allSocialLinks {
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