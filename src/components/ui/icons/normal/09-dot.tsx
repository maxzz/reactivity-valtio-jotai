import { type SVGAttributes } from 'react';
import { classNames } from '@/utils';

{/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <circle cx="12.1" cy="12.1" r="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg> */}
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  
</svg> */}

export function IconDot({ className, title, ...rest }: SVGAttributes<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames("stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <circle cx="12.1" cy="12.1" r="1" />
        </svg>
    );
}
