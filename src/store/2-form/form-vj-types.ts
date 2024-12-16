import { type FceItem } from "../9-types";
import { catalogTestNames } from "./form-vj-initial-data";
import { buildCatalogMetaFromNames } from "./form-vj-to-editor";

export * from "../8-manifest";

export type FormVjInputs = {
    name: string,
    items: FceItem[];
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
