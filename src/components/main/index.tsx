import { FormValtioJotai } from '../form-vj';
import { Display } from '../form-vj/ui-display';

export function Section2_Main() {
    return (
        <div className="mx-auto p-4 max-w-7xl h-full grid grid-cols-2 gap-x-4">
            <FormValtioJotai />
        
            <div className="w-full h-full border-slate-600 border rounded overflow-hidden">
                <Display />
            </div>
        
        </div>
    );
}
