import { GridRowsWithAddButton } from "./ui-control-grid";
import { BottomButton, Caption, Input } from "./ui-controls";
import { appUi, useSnapshot } from "@/store";
import { SelectDemo } from "./demos/ui-control-demo-select";
import { DropdownMenuDemo } from "./demos/ui-control-demo-dropdown";

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
        <div className="self-center border-slate-600 border rounded overflow-hidden debug1">
            <div className="min-h-[36rem] max-h-[56rem] grid grid-rows-[auto_1fr_auto]">
                <Caption />
                <Body />

                <div className="px-4">
                    <SelectDemo />
                </div>

                <div className="mt-4 px-4">
                    <DropdownMenuDemo />
                </div>

                <div className="p-4 flex items-center justify-end gap-x-2">
                    <BottomButton>OK</BottomButton>
                    <BottomButton>Cancel</BottomButton>
                </div>
            </div>
        </div>
    );
}
