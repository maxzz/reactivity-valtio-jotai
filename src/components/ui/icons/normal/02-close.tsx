import { type SVGAttributes } from 'react';
import { classNames } from '@/utils';

export function IconClose({ className, title, ...rest }: SVGAttributes<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
