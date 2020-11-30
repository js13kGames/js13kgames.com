/* tslint:disable */


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
    tables: {
        'flyway_schema_history': PgTable<any>;
        'menu_items': PgTable<any>;
    }
}
