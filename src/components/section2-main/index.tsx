import { appUi, useSnapshot } from '@/store';
import { FormValtioJotai } from '../form-vj';
import { Display } from './ui-display';

export function Section2_Main() {
    const { pageVjDlgOpen } = useSnapshot(appUi);
    return (
        <div className="mx-auto p-4 max-w-7xl h-full grid grid-cols-2 gap-x-4 overflow-auto">
            {pageVjDlgOpen
                ? <FormValtioJotai />
                : <div></div>
            }

            <div className="border-slate-600 border rounded overflow-hidden">
                <Display />
            </div>
        </div>
    );
}
