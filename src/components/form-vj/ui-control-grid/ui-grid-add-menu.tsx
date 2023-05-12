import { useState, useRef, HTMLAttributes, ButtonHTMLAttributes } from "react";
import { useClickAway } from "react-use";
import { classNames } from "@/utils";
import { IconAdd } from "@/components/ui";
import { addCatalogItem } from "@/store";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";

const openButtonClasses = "p-1 w-5 h-5 hover:text-primary-800 dark:hover:text-white hover:bg-primary-300 dark:hover:bg-primary-500 rounded";

const menuBoxClasses = "absolute right-0 top-full mt-0.5 px-1 py-1.5 bg-primary-200 dark:bg-primary-900 border-gray-500/50 border shadow rounded animate-row-menu-left";
const menuBtnClasses = "px-2 py-1 text-start hover:text-primary-800 dark:hover:text-primary-200 hover:bg-primary-400/50 dark:hover:bg-primary-500 whitespace-nowrap rounded-sm cursor-pointer";

function Row({ children, ...rest }: HTMLAttributes<HTMLElement>) {
    return (
        <div className={menuBtnClasses} {...rest}>
            {children}
        </div>
    );
}

export function ButtonAdd2({ className, ...rest }: ButtonHTMLAttributes<HTMLElement>) {
    const [menuOpen, setMenuOpen] = useState(false);

    const onAdd = (addPsw: boolean) => {
        addCatalogItem('name', addPsw);
        setMenuOpen(false);
    };

    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));
    return (
        <button ref={btnRef} className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)} {...rest}>

            <IconAdd onClick={() => setMenuOpen(v => !v)} />

            {menuOpen &&
                <div className={menuBoxClasses}>
                    <Row onClick={() => onAdd(false)}>Text field</Row>
                    <Row onClick={() => onAdd(true)}>Password field</Row>
                </div>
            }
        </button>
    );
}
