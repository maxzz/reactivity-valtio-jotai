import { HTMLAttributes } from 'react';
import { classNames } from '@/utils';

import SimpleBar from 'simplebar-react';
import './simplebar.css';
export const UISemiScrollbar = SimpleBar;

export function Scroller({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <UISemiScrollbar className={classNames("px-2 pt-1 pb-4 overflow-auto w-full h-full", className)} {...rest}>
            {children}
        </UISemiScrollbar>
    );
}
