import { ButtonHTMLAttributes } from "react";
import { appUi, generateNewCatalogItem, useSnapshot } from "@/store";
import { classNames } from "@/utils";
import { IconAdd } from "@/components/ui";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";
import { AddPopupMenu } from "./ui-grid-add-menu";

export function ButtonAdd2({ className, ...rest }: ButtonHTMLAttributes<HTMLElement>) {
    const items = appUi.formVjInputs.items;
    const { length } = useSnapshot(items);
    return (
        <AddPopupMenu className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)} {...rest} />
    );
}

{/* <button
className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
onClick={() => items.push(generateNewItem('name', length, false))}
{...rest}
>
<IconAdd />

</button> */}

/**/
export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    const items = appUi.formVjInputs.items;
    const { length } = useSnapshot(items);
    return (
        <button
            className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
            onClick={() => items.push(generateNewCatalogItem('name', length, false))}
            {...rest}
        >
            <IconAdd />
            <AddPopupMenu />
        </button>
    );
}
/**/
