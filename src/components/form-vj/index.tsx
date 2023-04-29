import { BottomButton, Caption, Input } from "./ui-controls";
import { appUi, useSnapshot } from "@/store";
import { atomWithProxy } from "jotai-valtio";
import { Fragment, useState } from "react";
import { Row } from "./ui-grid-row";
import { MenuState } from "./ui-grid-row-menu";

function ItemsArray() {
    const snap = useSnapshot(appUi.formVjInputs);

    return (
        <div className="text-xs grid gap-y-1">
            {snap.items.map((item, idx) => {
                const menuState: MenuState = {
                    onDelete: (event: React.MouseEvent) => { },
                    onUp: (event: React.MouseEvent) => { },
                    onDn: (event: React.MouseEvent) => { },
                    hasUp: idx > 0,
                    hasDn: idx < snap.items.length - 1,
                };
                return (
                    <Fragment key={item.uuid}>
                        <Row item={appUi.formVjInputs.items[idx]} idx={idx} menuState={menuState} key={item.uuid} />
                    </Fragment>
                );
            })}
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
