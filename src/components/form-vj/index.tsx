import { useState } from "react";
import { atomWithProxy } from "jotai-valtio";
import { appUi, useSnapshot } from "@/store";
import { ItemsArray, ItemsArrayAddButton } from "./ui-grid";
import { BottomButton, Caption, Input } from "./ui-controls";

function Body() {
    return (
        <div className="p-4 space-y-4">
            <label className="inline-block">
                Name
                <Input />
            </label>
            <fieldset className="p-2 border-primary-500 border rounded">
                <legend className="mx-0.5 px-2">Catalog Items</legend>
                <ItemsArray />
                <ItemsArrayAddButton />
            </fieldset>
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
