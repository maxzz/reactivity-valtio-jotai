import { type SVGAttributes } from "react";
import { classNames } from "@/utils";

export function IconChevronUp({ className, title, ...rest }: SVGAttributes<SVGSVGElement> & { title?: string; }) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    );
}
