// import { useState } from "react";
// import { atomWithProxy } from "jotai-valtio";
import { ItemsArrayWithAdd } from "./ui-grid";
import { BottomButton, Caption, Input } from "./ui-controls";
import { appUi, useSnapshot } from "@/store";


function NameInput() {
    const snap = useSnapshot(appUi.formVjInputs);
    return (
        <label className="inline-block">
            Name
            <Input value={snap.name} onChange={(e) => appUi.formVjInputs.name = e.target.value} />
        </label>
    );
}

function Body() {
    return (
        <div className="p-4 space-y-4">
            <NameInput />
            <ItemsArrayWithAdd />
        </div>
    );
}

export function FormValtioJotai() {
    //const [showDlg, setShowDlg] = useState(atomWithProxy(appUi));
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
