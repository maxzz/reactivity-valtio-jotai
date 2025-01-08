import { appUi, useSnapshot } from "@/store";
import { GridRowsWithAddButton } from "../1-ui-control-grid";
import { BottomButton, Caption, Input } from "../3-dlg-controls";
import { MruTrigger } from "../4-ui-contol-mru";
import { DropdownMenuDemo, SelectDemo } from "../5-demos";

export function MainForm() {
    return (
        <div className="self-center border-slate-600 border rounded overflow-hidden debug1">
            <div className="min-h-[36rem] max-h-[56rem] grid grid-rows-[auto_1fr_auto]">
                <Caption />
                <EditorBody />

                {/* <div className="px-4 flex items-center space-x-2">
                    <SelectDemo />
                    <DropdownMenuDemo />
                    <MruTrigger />
                </div> */}

                <div className="p-4 flex items-center justify-end gap-x-2">
                    <BottomButton>OK</BottomButton>
                    <BottomButton>Cancel</BottomButton>
                </div>
            </div>
        </div>
    );
}

function EditorBody() {
    return (
        <div className="p-4 h-full grid grid-rows-[auto_1fr] gap-4">
            <InputName />
            <GridRowsWithAddButton />
        </div>
    );
}

function InputName() {
    const snap = useSnapshot(appUi.formVjInputs);
    return (
        <label className="inline-block">
            Name
            <Input value={snap.name} onChange={(e) => appUi.formVjInputs.name = e.target.value} />
        </label>
    );
}

//TODO: add button add txt or psw
//TODO: add row indices
//TODO: update mru
//TODO: text MRU button w/ popup menu
//TODO: buttons up/down at top/buttom list edges
//TODO: move grid title row labels out of scroll
//TODO: where is blue highlight for constant values?
