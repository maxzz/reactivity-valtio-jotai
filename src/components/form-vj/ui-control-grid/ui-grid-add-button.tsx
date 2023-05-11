import { ButtonHTMLAttributes } from "react";
import { appUi, useSnapshot } from "@/store";
import { CatalogItem } from "@/store/form-vj-types";
import { classNames, uuid as uuidShort } from "@/utils";
import { v4 } from "uuid";
import { IconAdd } from "@/components/ui";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";

export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const items = appUi.formVjInputs.items;
    const snap = useSnapshot(items);
    return (
        <button
            className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
            onClick={() => items.push(generateNewItem(snap.length))}
            {...rest}
        >
            <IconAdd />
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
