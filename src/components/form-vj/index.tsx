import { useSnapshot } from "valtio";
import { BottomButton, Caption, Input } from "./ui-controls";
import { appUi } from "@/store";
import { atomWithProxy } from "jotai-valtio";
import { Fragment, useState } from "react";
import { Row } from "./ui-grid-row";
import { MenuState } from "./ui-grid-row-menu";

function ItemsArray() {
    const state = useSnapshot(appUi.formVjInputs);

    const menuState: MenuState = {
        onDelete: (event: React.MouseEvent) => {},
        onUp: (event: React.MouseEvent) => {},
        onDn: (event: React.MouseEvent) => {},
        hasUp: false,
        hasDn: false,
    };
    
    return (
        <div className="text-xs">
            {state.items.map((item, idx) => (
                <Fragment key={item.uuid}>
                    {/* <div className="">{item.uuid} {item.dispname}</div> */}
                    <Row item={item} idx={idx} menuState={menuState} key={item.uuid} />
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
