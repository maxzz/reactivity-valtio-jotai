import { appUi, useSnapshot } from "@/store";

export function Display() {
    const snap = useSnapshot(appUi.formVjInputs);
    return (
        <div className="p-4 text-xs whitespace-pre h-full overflow-auto">
            {JSON.stringify(snap, null, 4)}
        </div>
    );
}
