import { AnimatePresence, motion } from "motion/react";
import { appUi, useSnapshot } from '@/store';
import { MainForm } from './1-form';
import { Display } from './2-info-display';

export function Section2_Main() {
    const { pageVjDlgOpen } = useSnapshot(appUi.uiState);
    return (
        // <div className="mx-auto p-4 max-w-7xl w-full h-full grid grid-cols-2 gap-x-4 overflow-auto">
        <div className="mx-auto p-4 max-w-7xl w-full h-full grid grid-cols-[minmax(1fr,600px),minmax(0,1fr)] gap-x-4 overflow-auto">

            <AnimatePresence>
                {pageVjDlgOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scaleX: 0, }}
                        animate={{ opacity: 1, y: 0, scaleX: 1, }}
                        exit={{ opacity: 0, y: 10, scaleX: 0, }}
                        transition={{ duration: 0.2 }}
                    >
                        <MainForm />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="col-start-2 border-slate-600 border rounded overflow-hidden">
                <Display />
            </div>

        </div>
    );
}
