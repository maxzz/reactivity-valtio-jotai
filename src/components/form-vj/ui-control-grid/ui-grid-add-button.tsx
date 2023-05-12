import { useState, useRef, ButtonHTMLAttributes } from "react";
import { addCatalogItem } from "@/store";
import { useClickAway } from "react-use";
import { classNames } from "@/utils";
import { IconAdd } from "@/components/ui";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";

const menuBoxClasses = "absolute right-0 top-full mt-0.5 px-1 py-1.5 bg-primary-200 dark:bg-primary-900 border-gray-500/50 border shadow rounded animate-row-menu-left";
const menuBtnClasses = "px-2 py-1 text-start hover:text-primary-800 dark:hover:text-primary-200 hover:bg-primary-400/50 dark:hover:bg-primary-500 whitespace-nowrap rounded-sm cursor-pointer";

export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLElement>) {
    const [menuOpen, setMenuOpen] = useState(false);

    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));

    const onAdd = (addPsw: boolean) => { addCatalogItem(addPsw ? 'password' : 'name', addPsw); setMenuOpen(false); };
    return (
        <button ref={btnRef} className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)} {...rest}>

            <IconAdd onClick={() => setMenuOpen(v => !v)} />

            {menuOpen &&
                <div className={menuBoxClasses}>
                    <div className={menuBtnClasses} onClick={() => onAdd(false)}>Text field</div>
                    <div className={menuBtnClasses} onClick={() => onAdd(true)}>Password field</div>
                </div>
            }
        </button>
    );
}
