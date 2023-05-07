import { InputHTMLAttributes, ButtonHTMLAttributes } from "react";
import { classNames, turnOffAutoComplete } from "@/utils";
import { IconClose } from "../ui";

export const inputClasses = "px-2 py-1.5 w-full text-primary-800 dark:text-primary-300 bg-primary-100 dark:bg-primary-700 rounded";
export const inputFocusClasses = "focus:outline-none focus:ring-1 focus:ring-primary-800 dark:focus:ring-primary-400 focus:ring-offset-1 focus:ring-offset-primary-200 dark:focus:ring-offset-primary-800";
export const dlgBottomButtonClasses = "hover:bg-primary-300 dark:hover:bg-primary-700 border-primary-500 active:scale-[.97] border rounded select-none disabled:opacity-25";

export function Caption() {
    return (
        <div className="pl-4 pr-2 py-3 flex items-center justify-between bg-primary-300/50 dark:bg-primary-900/40">
            <div className="mr-4 text-xl tracking-tight">
                Field Catalog <span className="text-xs whitespace-nowrap">valtio<span className="inline-block scale-75 saturate-0 opacity-50">🤝</span>jotai</span>
            </div>

            <button className={classNames("p-1 w-7 h-7 hover:text-primary-800 hover:dark:text-primary-100 hover:bg-primary-400/50 dark:hover:bg-primary-700 active:scale-[.97] rounded", inputFocusClasses)}>
                <IconClose />
            </button>
        </div>
    );
}

export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input className={classNames(inputClasses, inputFocusClasses, className,)} {...turnOffAutoComplete} {...rest} />
    );
}

export function BottomButton({ className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-2", dlgBottomButtonClasses, inputFocusClasses, className)} {...rest}>
            {children}
        </button>
    );
}
