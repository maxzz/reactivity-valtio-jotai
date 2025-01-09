import { type SVGAttributes } from "react";
import { IconLight } from "./01-light";
import { IconDark } from "./02-dark";

export function DarkLightSwitch({ isDark, ...rest }: SVGAttributes<SVGSVGElement> & { title?: string; } & { isDark: boolean; }) {
    return (<>
        {isDark
            ? <IconDark {...rest} />
            : <IconLight {...rest} />
        }
    </>);
}
