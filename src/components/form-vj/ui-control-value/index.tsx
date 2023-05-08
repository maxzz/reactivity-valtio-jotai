import { PrimitiveAtom } from "jotai";
import { atomWithProxy } from "jotai-valtio";
import { CatalogItem, FieldTyp, Mani, ValueAs, ValueLife, fieldTyp4Str } from "@/store/manifest";
import { FieldValue } from "./control";
import { useState } from "react";

// function catalogItemToManiField(item: CatalogItem) {
//     const field: Mani.Field = {
//         type: item.password ? 'edit': 'edit',
//         askalways,
//         onetvalue,
//         value
//     }
// }

export function FieldValueInput({ proxyItem }: { proxyItem: CatalogItem; }) {
    const useIt = true;
    const choosevalue = undefined;
    const valueLifeAtom = useState<PrimitiveAtom<CatalogItem>>(atomWithProxy<CatalogItem>(proxyItem))[0];

    return (
        <>
            {/* <FieldValue useIt={useIt} valueLifeAtom={valueLifeAtom} choosevalue={choosevalue} /> */}
        </>
    );
}