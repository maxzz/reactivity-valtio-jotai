import { useRef, useState } from 'react';
import { useClickAway } from "react-use";
import { IconMenu } from '@/components/ui';

const openButtonClasses = "w-5 h-5 hover:text-primary-800 dark:hover:text-white hover:bg-primary-300 dark:hover:bg-primary-500 rounded";

export function MruTrigger() {
    const [menuOpen, setMenuOpen] = useState(false);
    const btnRef = useRef(null);
    useClickAway(btnRef, () => setMenuOpen(false));
    return (
        <div ref={btnRef} className="relative">

            <IconMenu className={openButtonClasses} onClick={() => setMenuOpen(v => !v)} />

            {menuOpen &&
                <div className="absolute left-0 top-full">11</div>
            }

        </div>
    );
}
