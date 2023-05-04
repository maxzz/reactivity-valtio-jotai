import { HTMLAttributes } from 'react';
import { classNames } from '@/utils';

import SimpleBar from 'simplebar-react';
import './simplebar.css';
export const UISemiScrollbar = SimpleBar;

export function Scroller({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <UISemiScrollbar className={classNames("w-full h-full overflow-auto", className)} {...rest}>
            {children}
        </UISemiScrollbar>
    );
}
