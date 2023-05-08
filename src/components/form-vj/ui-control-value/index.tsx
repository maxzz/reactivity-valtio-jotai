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

export function valueLife4Mani2({ askalways, onetvalue, value, password, fType }: { askalways?: boolean, onetvalue?: boolean, value?: string; password?: boolean, fType: FieldTyp; }): ValueLife {
    const vl: ValueLife = {
        valueAs:
            (!onetvalue && !askalways)
                ? ValueAs.askReuse
                : (!onetvalue && askalways)
                    ? ValueAs.askConfirm
                    : ValueAs.askAlways, // legal:(onetvalue && askalways) and illegal:(onetvalue && !askalways)
        ...(password && { isPsw: true }),
        //...(field.type !== 'edit' && field.type !== 'combo' && { isBtn: true }),
        fType: fType,
    };
    if (value) {
        vl.isRef = value?.[0] === '@';
        vl.value = value?.replace(/^@/, '');
        vl.isRef = vl.isRef && !!vl.value && vl.value[0] !== '@'; // case for '@@'
    }
    return vl;
}


export function valueLife4Mani(field: Mani.Field): ValueLife {
    const { askalways, onetvalue, value } = field;
    return valueLife4Mani2({ askalways, onetvalue, value, password: field.password, fType: fieldTyp4Str(field) });

    // const vl: ValueLife = {
    //     valueAs:
    //         (!onetvalue && !askalways)
    //             ? ValueAs.askReuse
    //             : (!onetvalue && askalways)
    //                 ? ValueAs.askConfirm
    //                 : ValueAs.askAlways, // legal:(onetvalue && askalways) and illegal:(onetvalue && !askalways)
    //     ...(field.password && { isPsw: true }),
    //     //...(field.type !== 'edit' && field.type !== 'combo' && { isBtn: true }),
    //     fType: fieldTyp4Str(field),
    // };
    // if (value) {
    //     vl.isRef = value?.[0] === '@';
    //     vl.value = value?.replace(/^@/, '');
    //     vl.isRef = vl.isRef && !!vl.value && vl.value[0] !== '@'; // case for '@@'
    // }
    // return vl;
}


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