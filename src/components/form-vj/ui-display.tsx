import { appUi, useSnapshot } from "@/store";

export function Display() {
    const state = useSnapshot(appUi.formVjInputs);
    return (
        <div className="p-4 text-xs whitespace-pre">
            {JSON.stringify(state.items, null, 4)}
        </div>
    );
}
