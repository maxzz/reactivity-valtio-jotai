import { type SVGAttributes } from "react";
import { classNames } from "@/utils";

export function IconDark({ className, title, ...rest }: SVGAttributes<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames("fill-none stroke-[1.5] stroke-current", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    );
}
