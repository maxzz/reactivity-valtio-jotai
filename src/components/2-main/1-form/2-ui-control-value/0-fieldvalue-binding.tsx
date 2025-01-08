import { type HTMLAttributes, useEffect, useState } from "react";
import { proxy, snapshot, subscribe } from "valtio";
import { atomWithProxy } from "jotai-valtio";
import { type FceItem, TransformValue } from "@/store";
import { FieldValueUi } from "./fieldvalue-ui";

export function FieldValueBinding({ proxyItem, ...rest }: { proxyItem: FceItem; } & HTMLAttributes<HTMLElement>) {
    const useIt = true;
    const choosevalue = undefined;

    const valueLifeProxy = useState(() => proxy(TransformValue.valueLife4Catalog(proxyItem)))[0];
    const valueLifeAtom = useState(atomWithProxy(valueLifeProxy, { sync: true }))[0];

    useEffect(() => {
        const unsub = subscribe(valueLifeProxy, () => TransformValue.valueLife2Mani(snapshot(valueLifeProxy), proxyItem));
        return unsub;
    }, [valueLifeProxy]);

    return (<>
        <FieldValueUi useIt={useIt} valueLifeAtom={valueLifeAtom} choosevalue={choosevalue} {...rest} />
    </>);
}
