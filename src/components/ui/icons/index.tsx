import { HTMLAttributes, SVGAttributes } from 'react';
import { classNames } from '@/utils';

export function IconStar({ title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M 0 12 c 12 0 12 0 12 -12 c 0 12 0 12 12 12 c -12 0 -12 0 -12 12 c 0 -12 0 -12 -12 -12" />
        </svg>
    );
}

export function IconClose({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

export function IconMenu({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );
}

export function IconTrash({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
    );
}

export function IconArrowUp({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>
    );
}

export function IconArrowDown({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
    );
}

export function IconAdd({ className, title, ...rest }: HTMLAttributes<SVGSVGElement>) {
    return (
        <svg className={classNames("fill-none stroke-current stroke-[1.5]", className)} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );
}

export function IconSunnyvale({ className, title, ...rest }: HTMLAttributes<SVGSVGElement> & SVGAttributes<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={classNames("fill-current", className)} {...rest}>
            {title && <title>{title}</title>}
            {/* <path fill="#e3e3e35e" d="M20 8l-8 14.2L2.8 5.8h4.4C8 .5 16 .5 16.8 5.8h4.4L20 8z" /> */}
            {/* <path fill="#fcc10a" d="M20.3 6.3L12 21.1 3.7 6.3h4C8 1 15.8 1 16.2 6.3z" /> */}
            <path d="M12 10.3c-5.6-.2-4.7-8.4.8-7.4 4.3.8 3.6 7.5-.8 7.4zM12.1 10.9h.5l.6 6a10.8 10.8 0 01-.8 1.1c0-2.4-.2-4.8-.3-7.1zM11.6 18l-.7-1.1c0-1.6.3-5.3.5-6a4.5 4.5 0 00.5 0c0 2.3-.3 4.7-.3 7.1zM14.8 14.2l-1 1.4-1-4.8a2.5 2.5 0 00.8-.2l1.2 3.6zM11 10.8c0 .9-.7 4-1 4.7a12.4 12.4 0 01-.8-1.3l1.1-3.6a7 7 0 00.8.2z" />
            <path d="M8 12.2L9.4 10l.8.5c-.1.2-1 1.8-1.4 2.9L8 12zM14.6 10l1.4 2.2-.8 1.2c-.4-1-1-2-1.3-3a4.3 4.3 0 00.7-.4zM5.3 7.9l-.6-1.1h3a3.7 3.7 0 000 .8l-2.4.3zM18.6 7.9c-.7-.2-1.6-.2-2.4-.3l.1-.8h3zM5.8 8.6L7.9 8a7.8 7.8 0 00.4.8l-1.7 1-.8-1.2zM17.4 9.8l-1.7-1L16 8l2.1.7-.8 1.2zM9.1 9.8l-1.5 1.7-.7-1 1.7-1.3.5.6zM14.8 9.8a8 8 0 00.6-.6l1.6 1.3a9.8 9.8 0 01-.6 1c-.6-.5-1-1.1-1.5-1.7z" />
        </svg>
    );
}