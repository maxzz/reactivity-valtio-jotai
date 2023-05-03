import { appUi, useSnapshot } from "@/store";
import { DarkLightSwitch } from "../ui";
import { IconSunnyvale } from "../ui/icons";

function ColorModeSwitch() {
    const { darkMode } = useSnapshot(appUi);
    return (
        <DarkLightSwitch className="absolute right-3 w-4 h-4 cursor-pointer" isDark={darkMode} onClick={() => { appUi.darkMode = !darkMode; }} />
    );
}

export function Section3_Footer() {
    return (
        <div className="px-2 py-2 text-primary-500 bg-primary-900 select-none flex items-center justify-center relative">
            <div className="text-xs">footer</div>
            <IconSunnyvale className="w-5 h-5 pt-1 text-primary-600" />

            <ColorModeSwitch />
        </div>
    );
}
