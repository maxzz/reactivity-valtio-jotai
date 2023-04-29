import { useRef, useState } from "react";
import { IconMenu } from "../ui/icons";
import { MenuButtons, MenuState } from "./ui-row-menu";
import { useClickAway } from "react-use";
import { turnOffAutoComplete } from "@/utils";
import { CatalogItem } from "@/store/form-vj-types";

function RowItem() {
    return (
        <input className="px-2 py-1 w-full text-sm rounded" {...turnOffAutoComplete} />
    );
}

type RowParams = {
    item: CatalogItem;
    idx: number;
    menuState: MenuState;
};

function Row({ item: field, idx, menuState }: RowParams) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); };
    const btnRef = useRef(null);
    useClickAway(btnRef, () => { setMenuOpen(false); });
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-1">

            <RowItem  />
            <RowItem  />
            <RowItem  />

            <button ref={btnRef} className="relative">
                <IconMenu
                    className="p-1 w-5 h-5 hover:text-white hover:bg-yellow-500 rounded"
                    onClick={(event) => { event.preventDefault(); setMenuOpen(v => !v); }}
                />
                {menuOpen &&
                    <MenuButtons onClose={onClose} {...menuState} />
                }
            </button>
        </div>
    );
}
