/* tslint:disable */


export namespace social_linksFields {
    export type id = string;
    export type title = string;
    export type url = string;
    export type created_at = Date;
    export type updated_at = Date;

}

export interface social_links {
    id: social_linksFields.id;
    title: social_linksFields.title;
    url: social_linksFields.url;
    created_at: social_linksFields.created_at;
    updated_at: social_linksFields.updated_at;

}

export namespace menu_itemsFields {
    export type id = string;
    export type title = string;
    export type url = string;
    export type active = boolean;
    export type created_at = Date;
    export type updated_at = Date;

}

export interface menu_items {
    id: menu_itemsFields.id;
    title: menu_itemsFields.title;
    url: menu_itemsFields.url;
    active: menu_itemsFields.active;
    created_at: menu_itemsFields.created_at;
    updated_at: menu_itemsFields.updated_at;

}

export namespace flyway_schema_historyFields {
    export type installed_rank = number;
    export type version = string | null;
    export type description = string;
    export type type = string;
    export type script = string;
    export type checksum = number | null;
    export type installed_by = string;
    export type installed_on = Date;
    export type execution_time = number;
    export type success = boolean;

}

export interface flyway_schema_history {
    installed_rank: flyway_schema_historyFields.installed_rank;
    version: flyway_schema_historyFields.version;
    description: flyway_schema_historyFields.description;
    type: flyway_schema_historyFields.type;
    script: flyway_schema_historyFields.script;
    checksum: flyway_schema_historyFields.checksum;
    installed_by: flyway_schema_historyFields.installed_by;
    installed_on: flyway_schema_historyFields.installed_on;
    execution_time: flyway_schema_historyFields.execution_time;
    success: flyway_schema_historyFields.success;

}

export namespace hero_dataFields {
    export type id = string;
    export type primary_text = string;
    export type secondary_text = string;
    export type countdown_date = Date | null;
    export type call_to_action_text = string;
    export type call_to_action_url = string;
    export type background_image = string;
    export type active = boolean;
    export type created_at = Date;
    export type updated_at = Date;

}

export interface hero_data {
    id: hero_dataFields.id;
    primary_text: hero_dataFields.primary_text;
    secondary_text: hero_dataFields.secondary_text;
    countdown_date: hero_dataFields.countdown_date;
    call_to_action_text: hero_dataFields.call_to_action_text;
    call_to_action_url: hero_dataFields.call_to_action_url;
    background_image: hero_dataFields.background_image;
    active: hero_dataFields.active;
    created_at: hero_dataFields.created_at;
    updated_at: hero_dataFields.updated_at;

}
import {PgDb, PgSchema, PgTable} from "pogi";

export interface PgDbType extends PgDb {
    'public': PgSchema_public;
    'schemas': {
        'public': PgSchema_public;
    }
}
export interface PgSchema_public extends PgSchema {
    'flyway_schema_history': PgTable<any>;
    'menu_items': PgTable<any>;
    'social_links': PgTable<any>;
    'hero_data': PgTable<any>;
    tables: {
        'flyway_schema_history': PgTable<any>;
        'menu_items': PgTable<any>;
        'social_links': PgTable<any>;
        'hero_data': PgTable<any>;
    }
}
