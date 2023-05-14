import { useRef, useState } from 'react';
import { useClickAway } from "react-use";
import { IconMenu } from '@/components/ui';

const openButtonClasses = "w-5 h-5 hover:text-primary-800 dark:hover:text-white hover:bg-primary-300 dark:hover:bg-primary-500 rounded";

function ItemsGrid() {
    return (<>
        <div className="">Item 1</div>
        <div className="">Item 2</div>
    </>);
}

export function MruTrigger() {
    const [menuOpen, setMenuOpen] = useState(false);
    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));
    return (
        <div ref={btnRef} className="relative">

            <IconMenu className={openButtonClasses} onClick={() => setMenuOpen(v => !v)} />

            {menuOpen &&
                <div className="absolute left-0 top-full px-2 py-1 w-max min-w-[10ch] bg-primary-400 border-primary-400 border rounded">
                    <ItemsGrid />
                </div>
            }
        </div>
    );
}
