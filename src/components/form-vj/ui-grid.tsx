import { Fragment, InputHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { classNames, swap, turnOffAutoComplete } from "@/utils";
import { inputFocusClasses } from "./ui-controls";
import { MenuState, RowPopupMenu } from "./ui-grid-row-menu";

type StringRowKey = keyof Pick<CatalogItem, 'dispname' | 'dbname'>;

function RowItem({ item, name = 'dispname', ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(item, { sync: true });
    return (
        <input
            className={classNames("px-2 py-1 w-full text-primary-300 bg-primary-700 rounded-sm", inputFocusClasses)}
            {...turnOffAutoComplete}
            {...rest}
            value={snap[name]}
            onChange={(e) => { item[name] = e.target.value; }}
        />
    );
}

export function Row({ item, idx, menuState }: { item: CatalogItem; idx: number; menuState: MenuState; }) {
    const { password: isPsw = false } = useSnapshot(item, { sync: true });
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-x-1">

            <div className="select-none">type {isPsw ? 'psw' : 'txt'}</div>
            <RowItem item={item} name="dispname" />
            <RowItem item={item} name="dbname" />

            <RowPopupMenu menuState={menuState} />
        </div>
    );
}

export function ItemsArray() {
    const form = appUi.formVjInputs;
    const items = form.items;
    const snap = useSnapshot(form, { sync: true });
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
