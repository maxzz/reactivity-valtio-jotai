import { Section2_Main } from "./components/section2-main";

export function App() {
    return (<>
        <div className="appbg fixed inset-0 -z-10 pointer-events-none"></div>

        <div className="h-screen bg-slate-800 text-slate-400 text-sm">
            <Section2_Main />
        </div>
    </>);
}
