import { Fragment, InputHTMLAttributes, useEffect, useRef } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { classNames, swap, turnOffAutoComplete, uuid as uuidShort } from "@/utils";
import { inputFocusClasses } from "./ui-controls";
import { MenuState, RowPopupMenu } from "./ui-grid-row-menu";
import { IconFieldPassword, IconFieldText } from "../ui";

const gridRowClasses = "grid grid-cols-2 @[300px]:grid-cols-[1.5rem_1fr_1fr_20px] gap-0.5 items-center select-none @[300px]:gap-1";
const gridHeaderClasses = "px-1 text-[.65rem] text-primary-500 border-primary-400 dark:border-primary-500 border-b hidden @[300px]:block";
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

function RowItemType({ item }: { item: CatalogItem; }) {
    const { password: isPsw = false } = useSnapshot(item);
    const title = `${isPsw ? "Password" : "Text"}. Click to change`;
    return (
        <div className="w-6 h-6 text-[0.65rem] cursor-pointer" onClick={() => isPsw ? delete item.password : item.password = true}>
            {isPsw ? <IconFieldPassword title={title} /> : <IconFieldText title={title} />}
        </div>
    );
}

type StringRowKey = keyof Pick<CatalogItem, 'dispname' | 'dbname'>;

function RowItemInput({ item, name, ...rest }: { item: CatalogItem; name: StringRowKey; } & InputHTMLAttributes<HTMLInputElement>) {
    const snap = useSnapshot(item, { sync: true });
    return (
        <input
            className={classNames("px-2 py-1 w-full text-primary-800 bg-primary-50 dark:text-primary-300 dark:bg-primary-700 rounded-sm col-span-full @[300px]:col-span-1", inputFocusClasses)}
            name={name}
            {...turnOffAutoComplete}
            {...rest}
            value={snap[name]}
            onChange={(e) => { item[name] = e.target.value; }}
        />
    );
}

function Row({ item, idx, menuState }: { item: CatalogItem; idx: number; menuState: MenuState; }) {
    const { newItem } = useSnapshot(item);
    const scrollToRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (scrollToRef.current) {
            const rowEl = scrollToRef.current;
            rowEl.querySelector<HTMLElement>('input[name="dispname"]')?.focus();
            rowEl.scrollIntoView({ behavior: "smooth", block: "center" });
            delete item.newItem;
            scrollToRef.current = null;
        }
    }, [scrollToRef]);
    return (
        <div ref={newItem ? scrollToRef : null} className={gridRowClasses}>
            <RowItemType item={item} />
            <RowItemInput item={item} name="dispname" />
            <RowItemInput item={item} name="dbname" />
            <RowPopupMenu menuState={menuState} />
        </div>
    );
}

export function GridRows() {
    const items = appUi.formVjInputs.items;
    const snap = useSnapshot(items);
    return (
        <div className="@container pl-2 pr-[10px] pb-1 text-xs grid gap-y-1">
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
