import { appUi, useSnapshot } from "@/store";
import { Scroller } from "../../ui";

export function Display() {
    const snap = useSnapshot(appUi.formVjInputs);
    return (
        // // <Scroller>
        // <div className="p-4 text-xs whitespace-pre h-full overflow-auto">
        //     {JSON.stringify(snap, null, 4)}
        // </div>
        // // </Scroller>
        
        <Scroller>
            <div className="p-4 text-xs whitespace-pre">
                {JSON.stringify(snap, null, 4)}
            </div>
        </Scroller>
    );
}
