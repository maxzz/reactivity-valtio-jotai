import { appUi, useSnapshot } from "@/store";
import { DarkLightSwitch } from "../ui";
import { IconSunnyvale } from "../ui/icons";

function ColorModeSwitch() {
    const { darkMode } = useSnapshot(appUi);
    return (
        <DarkLightSwitch isDark={darkMode} onClick={() => { appUi.darkMode = !darkMode; }} />
    );
}

export function Section3_Footer() {
    return (
        <div className="px-2 py-2 text-primary-500 bg-primary-900 flex items-center justify-center">
            <div className="">footer</div>
            <IconSunnyvale className="w-5 h-5 text-primary-600" />

            <ColorModeSwitch />
        </div>
    );
}
