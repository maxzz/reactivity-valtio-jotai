import { ReactNode } from "react";
import { appUi, useSnapshot } from "@/store";
import { Scroller } from "../ui/UISemiScrollbar";
import * as ScrollArea from "@radix-ui/react-scroll-area";

function Scroller2({ children }: { children: ReactNode; }) {
    return (
        <ScrollArea.Root className=" h-full rounded overflow-hidden">
            <ScrollArea.Viewport className="w-full h-full">
                {children}
            </ScrollArea.Viewport>

            <ScrollArea.Scrollbar
                orientation="vertical"
                className="
                flex 
                select-none 
                touch-none 
                p-0.5 
                bg-green-900
                transition-colors 
                duration-[160ms] 
                ease-out 
                hover:bg-blackA8 
                data-[orientation=vertical]:w-2.5 
                data-[orientation=horizontal]:flex-col 
                data-[orientation=horizontal]:h-2.5
                "
            >
                <ScrollArea.Thumb className="
                flex-1 
                bg-red-500 
                rounded-[10px] 
                relative before:content-[''] 
                before:absolute 
                before:top-1/2 
                before:left-1/2 
                before:-translate-x-1/2 
                before:-translate-y-1/2 
                before:w-full 
                before:h-full 
                before:min-w-[44px] 
                before:min-h-[44px]
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
