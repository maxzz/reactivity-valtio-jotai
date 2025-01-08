import { ReactNode } from "react";
import * as S from "@radix-ui/react-scroll-area";

const scrollbarClasses = `
    p-0.5

    hover:bg-primary-300/50
    dark:hover:bg-primary-700/50
    transition-colors
    duration-[160ms]
    ease-out

    flex
    data-[orientation=vertical]:w-2
    data-[orientation=horizontal]:flex-col
    data-[orientation=horizontal]:h-2

    select-none
    touch-none
`;

const scrollbarThumbClasses = `
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
`;

export function Scroller({ children }: { children: ReactNode; }) {
    return (
        <S.Root className="h-full overflow-hidden">
            <S.Viewport className="w-full h-full">
                {children}
            </S.Viewport>

            <S.Scrollbar orientation="vertical" className={scrollbarClasses}>
                <S.Thumb className={scrollbarThumbClasses} />
            </S.Scrollbar>

            <S.Scrollbar orientation="horizontal" className={scrollbarClasses}>
                <S.Thumb className={scrollbarThumbClasses} />
            </S.Scrollbar>

            <S.Corner />
        </S.Root>
    );
}
