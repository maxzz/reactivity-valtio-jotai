import { AnimatePresence, motion } from "motion/react";
import { appUi, useSnapshot } from '@/store';
import { MainForm } from './1-form';
import { Display } from './2-info-display';

const topClasses = "\
mx-auto p-2 max-w-7xl w-full h-full \
grid grid-cols-[minmax(1fr,600px),minmax(0,1fr)] gap-x-2 \
overflow-auto";

export function Section2_Main() {
    const { pageVjDlgOpen } = useSnapshot(appUi.uiState);
    return (
        <div className={topClasses}>
            <div className="overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                    {pageVjDlgOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scaleX: 0.9, }}
                            animate={{ opacity: 1, y: 0, scaleX: 1, }}
                            exit={{ opacity: 0, y: -10, scaleX: 0.9, transition: { delay: 1.2 } }}
                            transition={{ duration: 0.2 }}
                        >
                            <MainForm />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.div
                className="col-start-2 border-slate-600 border rounded overflow-hidden"
                layout
            >
                <Display />
            </motion.div>
        </div>
    );
}
