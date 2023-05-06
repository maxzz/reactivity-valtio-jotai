import { GridRowsWithAddButton } from "./ui-grid";
import { BottomButton, Caption, Input } from "./ui-controls";
import { appUi, useSnapshot } from "@/store";
import { SelectDemo } from "./ui-control-demo-select";


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
        <div className="p-4 h-full grid grid-rows-[auto_1fr] gap-4">
            <NameInput />
            <GridRowsWithAddButton />
        </div>
    );
}

export function FormValtioJotai() {
    return (
        <div className="self-center border-slate-600 border rounded debug1">
            <div className="min-h-[36rem] max-h-[56rem] grid grid-rows-[auto_1fr_auto]">
                <Caption />
                <Body />
                <SelectDemo />

                <div className="p-4 flex items-center justify-end gap-x-2">
                    <BottomButton>OK</BottomButton>
                    <BottomButton>Cancel</BottomButton>
                </div>
            </div>
        </div>
    );
}
