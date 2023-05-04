import { ReactNode } from "react";
import { appUi, useSnapshot } from "@/store";
import { Scroller } from "../ui/UISemiScrollbar";
import * as ScrollArea from "@radix-ui/react-scroll-area";

function Scroller2({ children }: { children: ReactNode; }) {
    return (
        <ScrollArea.Root>
            <ScrollArea.Viewport>
                {children}
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>

            <ScrollArea.Corner />
        </ScrollArea.Root>
    );
}

export function Display() {
    const snap = useSnapshot(appUi.formVjInputs);
    return (
        // // <Scroller>
        // <div className="p-4 text-xs whitespace-pre h-full overflow-auto">
        //     {JSON.stringify(snap, null, 4)}
        // </div>
        // // </Scroller>
        <Scroller2>
            <div className="p-4 text-xs whitespace-pre">
                {JSON.stringify(snap, null, 4)}
            </div>
        </Scroller2>
    );
}
