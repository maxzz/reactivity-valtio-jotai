import { appUi, useSnapshot } from '@/store';
import { FormValtioJotai } from './1-form';
import { Display } from './2-info-display/ui-display';

export function Section2_Main() {
    const { pageVjDlgOpen } = useSnapshot(appUi.uiState);
    return (
        // <div className="mx-auto p-4 max-w-7xl w-full h-full grid grid-cols-2 gap-x-4 overflow-auto">
        <div className="mx-auto p-4 max-w-7xl w-full h-full grid grid-cols-[minmax(1fr,600px),minmax(0,1fr)] gap-x-4 overflow-auto">

            {pageVjDlgOpen && <FormValtioJotai />}

            <div className="col-start-2 border-slate-600 border rounded overflow-hidden">
                <Display />
            </div>
            
        </div>
    );
}
