import { ButtonHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { classNames, uuid as uuidShort } from "@/utils";
import { dlgBottomButtonClasses } from "./ui-controls";
import { v4 } from "uuid";
import { GridRows } from "./ui-grid-rows";
import { IconAdd, Scroller } from "../ui";

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

export function GridRowsWithAddButton() {
    return (
        <fieldset className="relative border-primary-500 border rounded max-h-[30vh]">
            <legend className="mx-0.5 px-2 select-none">Catalog Items</legend>

            <Scroller>
                <GridRows />
            </Scroller>

            <ButtonAdd className="absolute p-1 top-0 right-0 mx-2 -my-6 w-6 h-6 bg-primary-200 dark:bg-primary-700" />
        </fieldset>
    );
}
