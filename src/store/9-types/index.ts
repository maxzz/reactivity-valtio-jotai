import { type CatalogItem } from "../manifest";

export type FceItem = CatalogItem & {
    isNewItem?: boolean; // non-reactive flag: just for edit dialog: flag set when new item created so we scroll it into view and reset after scroll done
};
