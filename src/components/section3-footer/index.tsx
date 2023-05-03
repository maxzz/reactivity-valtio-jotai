import { appUi, useSnapshot } from "@/store";
import { DarkLightSwitch } from "../ui";
import { IconFieldPassword, IconFieldText, IconSunnyvale } from "../ui/icons";

function ShowVjButton() {
    const snap = useSnapshot(appUi.uiState);
    return (
        <button onClick={() => { appUi.uiState.pageVjDlgOpen = !snap.pageVjDlgOpen; }}>
            Open
        </button>
    );
}

function ColorModeSwitch() {
    const { darkMode } = useSnapshot(appUi.uiState);
    return (
        <DarkLightSwitch className="absolute right-3 w-4 h-4 cursor-pointer" isDark={darkMode} onClick={() => { appUi.uiState.darkMode = !darkMode; }} />
    );
}

export function Section3_Footer() {
    return (
        <div className="px-2 py-2 text-primary-500 bg-primary-900 select-none flex items-center justify-center space-x-2 relative">
            <div className="text-xs">footer</div>
            <IconSunnyvale className="w-4 h-4 text-primary-600" />

            <IconFieldText className="w-6 h-6 text-red-500" />
            <IconFieldPassword className="w-6 h-6 text-red-500" />
            <ShowVjButton />

            <ColorModeSwitch />
        </div>
    );
}
