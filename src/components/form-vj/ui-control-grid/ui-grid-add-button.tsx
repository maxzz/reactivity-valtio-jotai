import { useState, useRef, type ButtonHTMLAttributes } from "react";
import { useClickAway } from "react-use";
import { addCatalogItem } from '@/store';
import { classNames } from "@/utils";
import { IconAdd, IconFieldPassword, IconFieldText } from "@/components/ui";
import { dlgBottomButtonClasses, inputFocusClasses } from "../dlg-controls";

const menuBoxClasses = "absolute right-0 top-full mt-0.5 px-1 py-1.5 bg-primary-200 dark:bg-primary-900 border-gray-500/50 border rounded shadow animate-row-menu-left";
const menuBtnClasses = "pl-1 pr-3 py-1 text-start hover:text-primary-800 dark:hover:text-primary-200 hover:bg-primary-400/50 dark:hover:bg-primary-500 flex items-center space-x-1 whitespace-nowrap rounded-sm cursor-pointer";

export function ButtonAdd({ className, ...rest }: ButtonHTMLAttributes<HTMLElement>) {
    const [menuOpen, setMenuOpen] = useState(false);

    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));

    const onAdd = (addPsw: boolean) => { addCatalogItem(addPsw); setMenuOpen(false); };
    return (
        <button ref={btnRef} className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)} {...rest}>

            <IconAdd onClick={() => setMenuOpen(v => !v)} />

            {menuOpen &&
                <div className={menuBoxClasses}>

                    <div className={menuBtnClasses} onClick={() => onAdd(false)}>
                        <IconFieldText className="w-6 h-6 pt-0.5"/>
                        <span>Text field</span>
                    </div>

                    <div className={menuBtnClasses} onClick={() => onAdd(true)}>
                        <IconFieldPassword className="w-6 h-6 pt-0.5"/>
                        <span>Password field</span>
                    </div>

                </div>
            }
        </button>
    );
}
