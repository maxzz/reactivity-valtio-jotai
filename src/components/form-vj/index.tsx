import { useState } from "react";
import { atomWithProxy } from "jotai-valtio";
import { appUi } from "@/store";
import { ItemsArray, ItemsArrayAddButton, ItemsArrayWithAdd } from "./ui-grid";
import { BottomButton, Caption, Input } from "./ui-controls";

function Body() {
    return (
        <div className="p-4 space-y-4">
            <label className="inline-block">
                Name
                <Input />
            </label>

            <ItemsArrayWithAdd />
            {/* <fieldset className="relative p-2 border-primary-500 border rounded">
                <legend className="mx-0.5 px-2">Catalog Items</legend>
                <ItemsArray />
                <ItemsArrayAddButton
                    className="absolute p-1 top-0 right-0 mx-2 -my-6 w-6 h-6 bg-primary-700"
                    onClick={() => {
                        console.log('aaa');
                    }}
                />
            </fieldset> */}
        </div>
    );
}

export function FormValtioJotai() {
    const [showDlg, setShowDlg] = useState(atomWithProxy(appUi));
    return (
        <div className="self-center border-slate-600 border rounded overflow-hidden">
            <div className="min-h-[40rem] grid grid-rows-[auto_1fr_auto]">
                <Caption />
                <Body />

                <div className="p-4 flex items-center justify-end gap-x-2">
                    <BottomButton>OK</BottomButton>
                    <BottomButton>Cancel</BottomButton>
                </div>
            </div>
        </div>
    );
}
