import { InputHTMLAttributes, useRef, useState } from "react";
import { useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { MenuButtons, MenuState, openButtonClasses } from "./ui-grid-row-menu";
import { IconMenu } from "../ui/icons";
import { useClickAway } from "react-use";
import { turnOffAutoComplete } from "@/utils";
import { atomWithProxy } from "jotai-valtio";
import { useAtom } from "jotai";

type StringRowKey = keyof Pick<CatalogItem, 'dispname' | 'dbname'>;

function RowItem({ item, name = 'dispname', ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(item);
    const snapAtom = useState(atomWithProxy(item))[0];
    // const snap = useState(atomWithProxy(item))[0];

    console.log('row', {'item': item, 'snap': snap});
    
    return (
        <input
            className="px-2 py-1 w-full text-xs text-primary-300 bg-primary-700 rounded" {...turnOffAutoComplete} {...rest}
            value={snap[name]} onChange={(e) => { item[name] = e.target.value; }}
        />
    );
}

function RowItem2({ item, name = 'dispname', ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(item);
    const snapAtom = useState(atomWithProxy(item))[0];
    const [snapAtomAccess, setSnapAtomAccess] = useAtom(snapAtom)

    console.log('row', {'item': item, 'snap': snap});
    
    return (
        <input
            className="px-2 py-1 w-full text-xs text-primary-300 bg-primary-700 rounded" {...turnOffAutoComplete} {...rest}
            value={snapAtomAccess.dispname} onChange={(e) => { setSnapAtomAccess((v)=>({...v, [name]: e.target.value})) }}
        />
    );
}

type RowParams = {
    item: CatalogItem;
    idx: number;
    menuState: MenuState;
};

export function Row({ item, idx, menuState }: RowParams) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); };
    const btnRef = useRef(null);
    useClickAway(btnRef, () => { setMenuOpen(false); });

    console.log('item', item);

    //const snap = useSnapshot(item);
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-1">

            {/* <div className="">type {snap.password?'psw':'txt'}</div> */}
            <RowItem2 item={item} name="dispname" />
            <RowItem item={item} name="dispname" />
            <RowItem item={item} name="dbname" />

            <button ref={btnRef} className="relative">
                <IconMenu
                    className={openButtonClasses}
                    onClick={(event) => { event.preventDefault(); setMenuOpen(v => !v); }}
                />

                {menuOpen &&
                    <MenuButtons onClose={onClose} {...menuState} />
                }
            </button>
        </div>
    );
}
