import { PrimitiveAtom } from "jotai";
import { atomWithProxy } from "jotai-valtio";
import { CatalogItem, FieldTyp, Mani, TransformValue, ValueAs, ValueLife, fieldTyp4Str } from "@/store/manifest";
import { FieldValue } from "./control";
import { useEffect, useState } from "react";
import { proxy, snapshot, subscribe } from "valtio";

export function FieldValueInput({ proxyItem }: { proxyItem: CatalogItem; }) {
    const useIt = true;
    const choosevalue = undefined;

    const valueLifeProxy = useState(() => proxy(TransformValue.valueLife4Catalog(proxyItem)))[0];
    const valueLifeAtom = useState(atomWithProxy(valueLifeProxy, {sync: true}))[0];

    useEffect(() => {
        console.log('valueLife subscribe');
        const unsub = subscribe(valueLifeProxy, () => {
            console.log('valueLife update', snapshot(valueLifeProxy));
            TransformValue.valueLife2Mani(snapshot(valueLifeProxy), proxyItem);
        });
        return unsub;
    }, [valueLifeProxy]);

    return (<>
        <FieldValue useIt={useIt} valueLifeAtom={valueLifeAtom} choosevalue={choosevalue} />
    </>);
}
