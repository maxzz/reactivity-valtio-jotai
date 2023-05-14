import { useState } from 'react';
import { IconMenu } from '@/components/ui';

const openButtonClasses = "p-1 w-5 h-5 hover:text-primary-800 dark:hover:text-white hover:bg-primary-300 dark:hover:bg-primary-500 rounded";

export function MruTrigger() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <IconMenu className={openButtonClasses} onClick={() => setMenuOpen(v => !v)} />
        </div>
    );
}
