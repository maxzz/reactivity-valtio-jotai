import { ButtonHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { classNames, uuid as uuidShort } from "@/utils";
import { v4 } from "uuid";
import { IconAdd } from "@/components/ui";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";
import { AddPopupMenu } from "./ui-grid-add-menu";

export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const items = appUi.formVjInputs.items;
    const { length } = useSnapshot(items);
    return (
        <button
            className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
            onClick={() => items.push(generateNewItem('name', length, false))}
            {...rest}
        >
            <IconAdd />
            <AddPopupMenu />
        </button>
    );

    function generateNewItem(newName: string, newIndex: number, isPassword: boolean): CatalogItem {
        const guid = v4();
        const now = uuidShort.asRelativeNumber();
        const rv: CatalogItem = {
            dispname: 'name',
            dbname: `{${guid}}`,
            index: newIndex,
            uuid: now,
            mru: now,
            newItem: true,
        };
        isPassword && (rv.password = true);
        return rv;
    }
}

/* 
export function ButtonAddWOPopup({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const items = appUi.formVjInputs.items;
    const { length } = useSnapshot(items);
    return (
        <button
            className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
            onClick={() => items.push(generateNewItem(length))}
            {...rest}
        >
            <IconAdd />
            <AddPopupMenu />
        </button>
    );

    function generateNewItem(index: number): CatalogItem {
        const guid = v4();
        const now = uuidShort.asRelativeNumber();
        return {
            dispname: 'name',
            dbname: `{${guid}}`,
            index,
            uuid: now,
            mru: now,
            newItem: true,
        };
    }
}
 */