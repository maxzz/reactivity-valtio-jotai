import { useEffect, useState } from "react";
import { proxy, snapshot, subscribe } from "valtio";
import { atomWithProxy } from "jotai-valtio";
import { CatalogItem, TransformValue } from "@/store/manifest";
import { FieldValue } from "./control";

export function FieldValueInput({ proxyItem }: { proxyItem: CatalogItem; }) {
    const useIt = true;
    const choosevalue = undefined;

    const valueLifeProxy = useState(() => proxy(TransformValue.valueLife4Catalog(proxyItem)))[0];
    const valueLifeAtom = useState(atomWithProxy(valueLifeProxy, {sync: true}))[0];

    useEffect(() => {
        const unsub = subscribe(valueLifeProxy, () => {
            TransformValue.valueLife2Mani(snapshot(valueLifeProxy), proxyItem);
        });
        return unsub;
    }, [valueLifeProxy]);

    return (<>
        <FieldValue useIt={useIt} valueLifeAtom={valueLifeAtom} choosevalue={choosevalue} />
    </>);
}
