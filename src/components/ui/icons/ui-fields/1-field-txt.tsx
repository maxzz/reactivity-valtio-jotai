import { type HTMLAttributes } from "react";
import { classNames } from "@/utils";

export function IconFieldText({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2Z" />
            <path d="M5.33 9h1.5m1.5 0h-1.5m0 0v5.83m0 0h-1.5m1.5 0h1.5" />
        </svg>
    );
}
