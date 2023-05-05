import { useState, useRef } from "react";
import { classNames } from "@/utils";
import { IconArrowUp, IconArrowDown, IconTrash, IconClose, IconMenu } from "../ui";
import { useClickAway } from "react-use";

export type MenuState = {
    onDelete: (event: React.MouseEvent) => void;
    onUp: (event: React.MouseEvent) => void;
    onDn: (event: React.MouseEvent) => void;
    hasUp: boolean;
    hasDn: boolean;
};

const containerClasses = "animate-row-menu-left absolute -right-[9px] -top-[5px] px-2 py-1 bg-primary-900 border-gray-500/50 border shadow rounded flex";
export const openButtonClasses = "p-1 w-5 h-5 hover:text-white hover:bg-primary-500 rounded";
const buttonClasses = "p-1 w-5 h-5 hover:text-primary-200 hover:bg-primary-500 rounded cursor-pointer";

function MenuButtons({ onClose, onDelete, onUp, onDn, hasUp, hasDn }: { onClose: (event: React.MouseEvent) => void; } & MenuState) {
    return (
        <div className={containerClasses}>
            <IconArrowUp className={classNames(buttonClasses, !hasUp && "opacity-30 pointer-events-none")} title="Move field up" onClick={onUp} />
            <IconArrowDown className={classNames(buttonClasses, !hasDn && "opacity-30 pointer-events-none")} title="Move field down" onClick={onDn} />
            <IconTrash className="p-1 w-5 h-5 hover:text-white hover:bg-red-600 rounded" title="Delete field" onClick={onDelete} />
            <IconClose className={buttonClasses} onClick={onClose} />
        </div>
    );
}

export function RowPopupMenu({ menuState }: { menuState: MenuState; }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = () => setMenuOpen(v => !v);
    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));
    return (
        <div ref={btnRef} className="relative col-start-2 row-start-1 @[300px]:row-start-auto place-self-end @[300px]:col-start-auto @[300px]:place-self-auto">
            
            <IconMenu className={openButtonClasses} onClick={() => setMenuOpen(v => !v)} />

            {/* <div className={openButtonClasses} onClick={() => setMenuOpen(v => !v)}>
                <IconMenu   />
            </div> */}


            {menuOpen &&
                <MenuButtons onClose={onClose} {...menuState} />
            }
        </div>
    );
}
