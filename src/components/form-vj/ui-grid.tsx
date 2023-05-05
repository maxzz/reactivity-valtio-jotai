import { Fragment, InputHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { classNames, swap, turnOffAutoComplete, uuid as uuidShort } from "@/utils";
import { inputFocusClasses } from "./ui-controls";
import { MenuState, RowPopupMenu } from "./ui-grid-row-menu";
import { IconFieldPassword, IconFieldText } from "../ui";

const gridRowClasses = "grid grid-cols-2 @[300px]:grid-cols-[1.5rem_1fr_1fr_20px] gap-0.5 items-center select-none @[300px]:gap-1";
const gridHeaderClasses = "px-1 text-[.65rem] text-primary-500 border-primary-500 border-b hidden @[300px]:block";
const gridHeaderFirstColumnClasses = " px-0 text-center";
const gridHeaderLastColumnClasses = " border-b-0";

const rowColumns = [
    ['Type',                /**/ 'Type of field', gridHeaderFirstColumnClasses],
    ['Label',               /**/ 'display name'],
    ['Value',               /**/ 'id'],
    ['',                    /**/ '', gridHeaderLastColumnClasses],
];

function TableHeader() {
    return (
        <div className={gridRowClasses}>
            {rowColumns.map(([title, hint, classes = ''], idx) => (
                <div className={`${gridHeaderClasses}${classes}`} title={hint} key={idx}>
                    {title}
                </div>
            ))}
        </div>
    );
}

type StringRowKey = keyof Pick<CatalogItem, 'dispname' | 'dbname'>;

function RowItemInput({ item, name, ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(item, { sync: true });
    return (
        <input
            className={classNames("px-2 py-1 w-full text-primary-300 bg-primary-700 rounded-sm col-span-full @[300px]:col-span-1", inputFocusClasses)}
            {...turnOffAutoComplete}
            {...rest}
            value={snap[name]}
            onChange={(e) => { item[name] = e.target.value; }}
        />
    );
}

function RowItemType({ item }: { item: CatalogItem; }) {
    const { password: isPsw = false } = useSnapshot(item);
    const title = `${isPsw ? "Password" : "Text"}. Click to change`;
    return (
        <div className="w-6 h-6 text-[0.65rem] cursor-pointer" onClick={() => isPsw ? delete item.password : item.password = true}>
            {isPsw ? <IconFieldPassword title={title} /> : <IconFieldText title={title} />}
        </div>
    );

}

function Row({ item, idx, menuState }: { item: CatalogItem; idx: number; menuState: MenuState; }) {
    return (
        <div className={gridRowClasses}>
            <RowItemType item={item} />
            <RowItemInput item={item} name="dispname" />
            <RowItemInput item={item} name="dbname" />
            <RowPopupMenu menuState={menuState} />
        </div>
    );
}

export function ItemsGrid() {
    const items = appUi.formVjInputs.items;
    const snap = useSnapshot(items);
    return (
        <div className="@container px-2 text-xs grid gap-y-1">
            <TableHeader />
            {snap.map((item, idx) => {
                const menuState: MenuState = {
                    onDelete: () => { items.splice(idx, 1); },
                    onUp: () => { idx > 0 && swap(items, idx - 1, idx); },
                    onDn: () => { idx < items.length - 1 && swap(items, idx, idx + 1); },
                    hasUp: idx > 0,
                    hasDn: idx < snap.length - 1,
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
