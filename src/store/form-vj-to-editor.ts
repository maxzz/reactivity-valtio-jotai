import { type CatalogFile, type CatalogItem, catalogItemInFileToFieldValue } from "./form-vj-types";
import { uuid } from "@/utils";

export function buildCatalogMetaFromNames(names: CatalogFile.ItemInFile[] | undefined): CatalogItem[] {
    const items = names?.map((item, idx) => {
        const now = uuid.asRelativeNumber();
        const rv: CatalogItem = {
            ...catalogItemInFileToFieldValue(item),
            index: idx,
            uuid: now,
            mru: now,
            editor: {
                selected: false,
            },
        };
        return rv;
    }) || [];
    return items;
}
