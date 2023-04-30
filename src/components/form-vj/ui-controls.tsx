import { InputHTMLAttributes, ButtonHTMLAttributes } from "react";
import { classNames, turnOffAutoComplete } from "@/utils";
import { IconClose } from "../ui/icons";

export const inputClasses = "px-2 py-1.5 w-full text-primary-300 bg-primary-700 rounded";
export const inputFocusClasses = "focus:outline-none focus:ring-1 focus:ring-primary-400 focus:ring-offset-1 focus:ring-offset-primary-800";
export const dlgBottomButtonClasses = "px-4 py-2 hover:bg-primary-700 border-primary-500 active:scale-[.97] border rounded select-none disabled:opacity-25";

export function Caption() {
    return (
        <div className="pl-4 pr-2 py-3 flex items-center justify-between bg-primary-900/40">
            <div className="text-xl">
                State with valtio<span className="inline-block scale-50 saturate-0 opacity-50">🤝</span>jotai
            </div>
            <button className="p-1 w-7 h-7 hover:bg-primary-700 active:scale-[.97] rounded">
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
        <button className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)} {...rest}>
            {children}
        </button>
    );
}
