import { ButtonHTMLAttributes } from "react";
import { appUi, generateNewCatalogItem, useSnapshot } from "@/store";
import { classNames } from "@/utils";
import { IconAdd } from "@/components/ui";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";
import { AddPopupMenu } from "./ui-grid-add-menu";

/**/
export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const items = appUi.formVjInputs.items;
    const { length } = useSnapshot(items);
    return (
        <button
            className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
            onClick={() => items.push(generateNewCatalogItem(length, 'name', false))}
            {...rest}
        >
            <IconAdd />
            {/* <AddPopupMenu /> */}
        </button>
    );
}
/**/
