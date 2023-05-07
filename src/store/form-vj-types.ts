import { buildCatalogMetaFromNames, catalogTestNames } from "./form-vj-initial-data";
import { CatalogItem } from "./manifest/mani-types";
export * from "./manifest/mani-types";;

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
