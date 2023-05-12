import { ButtonHTMLAttributes } from "react";
import { addCatalogItem } from "@/store";
import { IconAdd } from "@/components/ui";
import { classNames } from "@/utils";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";

export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)}
            onClick={() => addCatalogItem('name', false)}
            {...rest}
        >
            <IconAdd />
        </button>
    );
}
