import { InputHTMLAttributes, useRef, useState } from "react";
import { useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { MenuButtons, MenuState, openButtonClasses } from "./ui-grid-row-menu";
import { IconMenu } from "../ui/icons";
import { useClickAway } from "react-use";
import { turnOffAutoComplete } from "@/utils";
import { atomWithProxy } from "jotai-valtio";

function RowItem({ item, name = 'dispname', ...rest }: { item: CatalogItem; name: keyof CatalogItem } & InputHTMLAttributes<HTMLInputElement>) {
    // const snap = useState(atomWithProxy(item))[0];
    const snap = useSnapshot(item);
    return (
        <input
            className="px-2 py-1 w-full text-xs text-primary-300 bg-primary-700 rounded" {...turnOffAutoComplete} {...rest}
            value={snap[name]} onChange={(e) => { item[name] = e.target.value; }}
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

            <RowItem item={item} name="dispname" />
            {/* <RowItem item={item} value={snap.dispname} onChange={(e) => { item.dispname = e.target.value; }} /> */}
            {/* <RowItem item={item} value={snap.dispname} onChange={(e) => { item.dispname = e.target.value; }} /> */}
            {/* <div className=""></div> */}

            <RowItem item={item} name="dbname" />
            {/* <RowItem item={item} />
            <RowItem item={item} /> */}

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
