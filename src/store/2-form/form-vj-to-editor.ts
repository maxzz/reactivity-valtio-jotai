import { type CatalogFile, fcItemInFileToFieldValue } from ".";
import { type FceItem } from "../9-types";
import { uuid } from "@/utils";

export function buildCatalogMetaFromNames(names: CatalogFile.ItemInFile[] | undefined): FceItem[] {

    const items = names?.map(
        (item, idx) => {
            const now = uuid.asRelativeNumber();
            const rv: FceItem = {
                ...fcItemInFileToFieldValue(item),
                index: idx,
                uuid: now,
                //mru: now,
                editor: {
                    selected: false,
                },
            };
            return rv;
        }
    ) || [];

    return items;
}
