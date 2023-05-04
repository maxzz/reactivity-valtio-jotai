import { appUi, useSnapshot } from "@/store";
import { Scroller } from "../ui/UISemiScrollbar";

export function Display() {
    const snap = useSnapshot(appUi.formVjInputs);
    return (
        <Scroller>
            <div className="p-4 text-xs whitespace-pre">
                {JSON.stringify(snap, null, 4)}
            </div>
        </Scroller>
    );
}
