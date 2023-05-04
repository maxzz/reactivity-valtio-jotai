import { ButtonHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { classNames, uuid as uuidShort } from "@/utils";
import { dlgBottomButtonClasses } from "./ui-controls";
import { IconAdd } from "../ui/icons";
import { v4 } from "uuid";
import { ItemsArray } from "./ui-grid-array";

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
