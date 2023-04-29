import { classNames } from "@/utils";
import { IconArrowUp, IconArrowDown, IconTrash, IconClose } from "../ui/icons";

export type MenuState = {
    onDelete: (event: React.MouseEvent) => void;
    onUp: (event: React.MouseEvent) => void;
    onDn: (event: React.MouseEvent) => void;
    hasUp: boolean;
    hasDn: boolean;
};

export function MenuButtons({ onClose, onDelete, onUp, onDn, hasUp, hasDn }: { onClose: (event: React.MouseEvent) => void; } & MenuState) {
    return (
        <div className="absolute -right-2 top-0 px-2 py-1 bg-yellow-500 border-gray-900/20 border shadow rounded-sm flex">
            <IconArrowUp className={classNames("p-1 w-5 h-5 hover:bg-yellow-400 rounded", !hasUp && "invisible")} title="Move field up" onClick={onUp} />
            <IconArrowDown className={classNames("p-1 w-5 h-5 hover:bg-yellow-400 rounded", !hasDn && "invisible")} title="Move field down" onClick={onDn} />
            <IconTrash className="p-1 w-5 h-5 hover:text-white hover:bg-red-600 rounded" title="Delete field" onClick={onDelete} />
            <IconClose className="p-1 w-5 h-5 hover:bg-yellow-400 rounded" onClick={onClose} />
        </div>
    );
}
