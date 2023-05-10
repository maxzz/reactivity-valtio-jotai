import { useEffect, useState } from "react";
import { proxy, snapshot, subscribe } from "valtio";
import { atomWithProxy } from "jotai-valtio";
import { CatalogItem, TransformValue } from "@/store/manifest";
import { FieldValueUi } from "./fieldvalue-ui";

export function FieldValueBinding({ proxyItem }: { proxyItem: CatalogItem; }) {
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
        <FieldValueUi useIt={useIt} valueLifeAtom={valueLifeAtom} choosevalue={choosevalue} />
    </>);
}
