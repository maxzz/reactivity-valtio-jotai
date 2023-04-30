import { Fragment, InputHTMLAttributes, useRef, useState } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { MenuButtons, MenuState, openButtonClasses } from "./ui-grid-row-menu";
import { IconMenu } from "../ui/icons";
import { useClickAway } from "react-use";
import { swap, turnOffAutoComplete } from "@/utils";

type StringRowKey = keyof Pick<CatalogItem, 'dispname' | 'dbname'>;

function RowItem({ item, name = 'dispname', ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(item, { sync: true });
    return (
        <input
            className="px-2 py-1 w-full text-xs text-primary-300 bg-primary-700 rounded" {...turnOffAutoComplete} {...rest}
            value={snap[name]}
            onChange={(e) => { item[name] = e.target.value; }}
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
    const onClose = () => setMenuOpen(v => !v);
    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));

    const { password: isPsw = false } = useSnapshot(item);
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-1">

            <div className="">type {isPsw ? 'psw' : 'txt'}</div>
            <RowItem item={item} name="dispname" />
            <RowItem item={item} name="dbname" />

            <button ref={btnRef} className="relative">
                <IconMenu className={openButtonClasses} onClick={() => { setMenuOpen(v => !v); }} />

                {menuOpen &&
                    <MenuButtons onClose={onClose} {...menuState} />
                }
            </button>
        </div>
    );
}

export function ItemsArray() {
    const form = appUi.formVjInputs;
    const items = form.items;
    const snap = useSnapshot(form);
    return (
        <div className="text-xs grid gap-y-1">
            {snap.items.map((item, idx) => {
                const menuState: MenuState = {
                    onDelete: () => { form.items.splice(idx, 1); },
                    onUp: () => { idx > 0 && swap(items, idx - 1, idx); },
                    onDn: () => { idx < items.length - 1 && swap(items, idx, idx + 1); },
                    hasUp: idx > 0,
                    hasDn: idx < snap.items.length - 1,
                };
                return (
                    <Fragment key={item.uuid}>
                        <Row item={items[idx]} idx={idx} menuState={menuState} key={item.uuid} />
                    </Fragment>
                );
            })}
        </div>
    );
}
