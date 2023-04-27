import { buildCatalogMetaFromNames, catalogTestNames } from "./form-vj-initial-data";

export declare module Catalog { // pmat/include/ots_storagecatalog_io.h
    interface Descriptor {
        id?: string;            // default as guid
    }

    interface Name {
        dispname: string;
        dbname: string;
        value?: string;
        ownernote?: string;
        askalways?: boolean;    // undefined : '1' 
        onetvalue?: boolean;    // undefined : '1'
        password?: boolean;     // undefined : '1'
    }

    interface Root {
        descriptor?: Descriptor;
        names: Name[];
    }

} //module Catalog

export type CatalogItem =       // Item in memory w/ meta information
    Catalog.Name
    & {
        index: number;          // index in loaded file.
        uuid: number;           // local (in memory only) unique ID (not updated through one session).
        mru: number;            // most recently used timestamp (as uuid but updated on each use through one session)
    };

//

export type FormVjInputs = {
    name: string,
    items: CatalogItem[];
};

export const formVjDefaultValues: FormVjInputs = {
    name: 'Max Z.',
    items: buildCatalogMetaFromNames(catalogTestNames),
};

// field value choice

export type SelectOption = {
    label: React.ReactNode;
    value: string | number | string[];
};

export const LIST_valueAskNames: SelectOption[] = [
    { label: "Ask - Resuse", value: 1, },
    { label: "Ask - Confirm", value: 2, },
    { label: "Ask Always ", value: 3, },
];
