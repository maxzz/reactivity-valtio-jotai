import { ReactNode } from "react";
import { appUi, useSnapshot } from "@/store";
import { Scroller } from "../ui/UISemiScrollbar";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export function Scroller2({ children }: { children: ReactNode; }) {
    return (
        <ScrollArea.Root className="qq h-full overflow-hidden">
            <ScrollArea.Viewport className="w-full h-full">
                {children}
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar
                orientation="vertical"
                className="
                p-0.5

                bg-primary1-800
                hover:bg-primary-700/50
                transition-colors
                duration-[160ms]
                ease-out

                data-[orientation=vertical]:w-2
                data-[orientation=horizontal]:flex-col
                data-[orientation=horizontal]:h-2

                select-none
                touch-none
                flex
                "
            >
                <ScrollArea.Thumb className="
                flex-1
                relative
                before:content-['']
                
                bg-primary-500/50
                rounded-[10px]

                before:absolute
                before:top-1/2
                before:left-1/2
                before:-translate-x-1/2
                before:-translate-y-1/2
                before:w-full
                before:h-full
                before:min-w-[14px]
                before:min-h-[14px]
                "
                />
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
