import { Section2_Main } from "./components/section2-main";

function Footer() {
    return (
        <div className="px-2 py-4 bg-primary-900">footer</div>
    );
}

export function App() {
    return (<>
        <div className="appbg fixed inset-0 -z-10 pointer-events-none"></div>

        <div className="h-screen bg-slate-800 text-slate-400 text-sm grid grid-rows-[1fr,auto]">
            <Section2_Main />
            <Footer />
        </div>
    </>);
}
