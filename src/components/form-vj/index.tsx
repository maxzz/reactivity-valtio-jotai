import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { IconClose } from "../ui/icons";
import { classNames } from "@/utils";

const inputClasses = "px-2 py-1.5 w-full text-primary-300 bg-primary-700 rounded";
const inputFocusClasses = "focus:outline-none focus:ring-1 focus:ring-primary-400  focus:ring-offset-1 focus:ring-offset-primary-800";
export const dlgBottomButtonClasses = "px-4 py-2 hover:bg-primary-700 border-primary-500 active:scale-[.97] border rounded select-none disabled:opacity-25";

function Caption() {
    return (
        <div className="pl-4 pr-2 py-2 flex items-center justify-between bg-primary-950">
            <div className="text-xl">
                valtio <span className="saturate-0 opacity-50">🤝</span> jotai
            </div>
            <button className="p-1 w-7 h-7 hover:bg-primary-700 active:scale-[.97] rounded">
                <IconClose />
            </button>
        </div>
    );
}

function Body() {
    return (
        <div className="p-4">
            <label className="">
                Body
                <Input />
            </label>
        </div>
    );
}

export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input className={classNames(inputClasses, inputFocusClasses, className,)} {...rest} />
    );
}

export function BottomButton({ className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames(dlgBottomButtonClasses, inputFocusClasses, className)} {...rest}>
            {children}
        </button>
    );
}

export function FormValtioJotai() {
    return (
        <div className="h-full grid place-items-center">
            <div className="border-slate-600 border rounded overflow-hidden">
                <div className="w-[30rem] min-h-[40rem] grid grid-rows-[auto_1fr_auto]">
                    <Caption />
                    <Body />

                    <div className="p-4 flex items-center justify-end gap-x-2">
                        <BottomButton>OK</BottomButton>
                        <BottomButton>Cancel</BottomButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
