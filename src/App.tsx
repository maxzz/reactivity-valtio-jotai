import { FormValtioJotai } from "./components/form-vj";

export function App() {
    return (<>
        <div className="appbg fixed inset-0 -z-10 pointer-events-none"></div>

        <div className="h-screen bg-slate-800 text-slate-400 text-sm">
            <FormValtioJotai />
        </div>
    </>);
}
