import { ButtonHTMLAttributes, Fragment, InputHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { classNames, swap, turnOffAutoComplete, uuid as uuidShort } from "@/utils";
import { dlgBottomButtonClasses, inputFocusClasses } from "./ui-controls";
import { MenuState, RowPopupMenu } from "./ui-grid-row-menu";
import { IconAdd } from "../ui/icons";
import { v4 } from "uuid";

const gridRowClasses = "grid grid-cols-2 @[300px]:grid-cols-[3rem_1fr_1fr_20px] gap-0.5 items-center select-none @[300px]:gap-1";
const gridHeaderClasses = "px-1 text-[.65rem] text-primary-500 border-primary-500 border-b hidden @[300px]:block";
const gridHeaderLastColumnClasses = " border-b-0";

const rowColumns = [
    ['Type',                /**/ 'Type of field'],
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

function RowItem({ item, name, ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
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

export function Row({ item, idx, menuState }: { item: CatalogItem; idx: number; menuState: MenuState; }) {
    const { password: isPsw = false } = useSnapshot(item);
    return (
        <div className={gridRowClasses}>
            <div className="text-[0.65rem]">{isPsw ? 'password' : 'text'}</div>
            <RowItem item={item} name="dispname" />
            <RowItem item={item} name="dbname" />

            <RowPopupMenu menuState={menuState} />
        </div>
    );
}

export function ItemsArray() {
    const items = appUi.formVjInputs.items;
    const snap = useSnapshot(items);
    return (
        <div className="@container pl-2 text-xs grid gap-y-1">
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

export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const items = appUi.formVjInputs.items;
    const snap = useSnapshot(items);
    return (
        <button
            className={classNames(dlgBottomButtonClasses, className)}
            onClick={() => items.push(generateNewItem(snap.length))}
            {...rest}
        >
            <IconAdd />
        </button>
    );

    function generateNewItem(index: number) {
        const guid = v4();
        const now = uuidShort.asRelativeNumber();
        return {
            dispname: 'name',
            dbname: `{${guid}}`,
            index,
            uuid: now,
            mru: now,
        };
    }
}

export function ItemsArrayWithAdd() {
    return (
        <fieldset className="relative p-2 border-primary-500 border rounded">
            <legend className="mx-0.5 px-2 select-none">Catalog Items</legend>
            <ItemsArray />
            <ButtonAdd className="absolute p-1 top-0 right-0 mx-2 -my-6 w-6 h-6 bg-primary-700" />
        </fieldset>
    );
}