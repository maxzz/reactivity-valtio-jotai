import { PrimitiveAtom } from "jotai";
import { atomWithProxy } from "jotai-valtio";
import { CatalogItem, ValueLife } from "@/store/manifest";
import { FieldValue } from "./control";
import { useState } from "react";

export function FieldValueInput({ item }: { item: CatalogItem; }) {
    const useIt = true;
    const choosevalue = undefined;
    const valueLifeAtom = useState<PrimitiveAtom<CatalogItem>>(atomWithProxy<CatalogItem>(item))[0];

    return (
        <FieldValue useIt={useIt} valueLifeAtom={valueLifeAtom} choosevalue={choosevalue} />
    );
}