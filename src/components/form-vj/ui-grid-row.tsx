import { useRef, useState } from "react";
import { useSnapshot } from "@/store";
import { IconMenu } from "../ui/icons";
import { MenuButtons, MenuState, openButtonClasses } from "./ui-grid-row-menu";
import { useClickAway } from "react-use";
import { turnOffAutoComplete } from "@/utils";
import { CatalogItem } from "@/store/form-vj-types";
import { atomWithProxy } from "jotai-valtio";

function RowItem({ item }: { item: CatalogItem; }) {
    // const snap = useState(atomWithProxy(item))[0];
    return (
        <input className="px-2 py-1 w-full text-sm text-primary-300 bg-primary-700 rounded" {...turnOffAutoComplete} />
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
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-1">

            <RowItem item={item} />
            <RowItem item={item} />
            <RowItem item={item} />

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
