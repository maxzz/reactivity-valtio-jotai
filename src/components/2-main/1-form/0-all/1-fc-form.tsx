import { appUi, useSnapshot } from "@/store";
import { GridRowsWithAddButton } from "../1-grid";
import { BottomButton, Caption, Input } from "./3-dlg-controls";
// import { DropdownMenuDemo, MruTrigger, SelectDemo } from "../5-demos";
import { IconStar } from "@/components/ui";

const formBodyClasses = "\
1min-h-[36rem] 1max-h-[56rem] \
grid grid-rows-[auto_1fr_auto] \
border-slate-600 border \
rounded overflow-hidden 1debug";

export function MainForm() {
    return (
        <div className={formBodyClasses}>
            <Caption />
            <EditorBody />

            {/* 
            <div className="px-4 flex items-center space-x-2">
                <SelectDemo />
                <DropdownMenuDemo />
                <MruTrigger />
            </div>
            */}

            <div className="p-4 pt-0 flex items-center justify-end gap-x-2">
                <IconStar className="size-6 stroke-none fill-amber-600" />
                <BottomButton>OK</BottomButton>
                <BottomButton>Cancel</BottomButton>
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
