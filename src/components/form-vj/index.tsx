import { useSnapshot } from "valtio";
import { BottomButton, Caption, Input } from "./ui-controls";
import { appUi } from "@/store";
import { Display } from "./ui-display";
import { atomWithProxy } from "jotai-valtio";
import { Fragment, useState } from "react";

function ItemsArray() {
    const state = useSnapshot(appUi.formVjInputs);
    return (
        <div className="text-xs">
            {state.items.map((item) => (
                <Fragment key={item.uuid}>
                    <div className="">{item.uuid} {item.dispname}</div>
                </Fragment>
            ))}
        </div>
    );
}

function Body() {
    return (
        <div className="p-4 space-y-4">
            <label className="inline-block">
                Body
                <Input />
            </label>

            <label className="inline-block">
                Items
                <ItemsArray />
            </label>
        </div>
    );
}

export function FormValtioJotai() {
    const [showDlg, setShowDlg] = useState(atomWithProxy(appUi));
    return (
        <div className="mx-auto p-4 max-w-7xl h-full grid grid-cols-2 gap-x-4">

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

            <div className="w-full h-full border-slate-600 border rounded overflow-hidden">
                <Display />
            </div>
        </div>
    );
}
