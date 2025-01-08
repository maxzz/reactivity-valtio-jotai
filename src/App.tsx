import { Section2_Main } from "./components/2-main";
import { Section3_Footer } from "./components/3-footer";

const mainClasses = "\
h-screen \
text-sm \
text-slate-800 bg-slate-200 dark:text-slate-400 dark:bg-slate-800 \
grid grid-rows-[1fr,auto]";

export function App() {
    return (<>
        <div className="app-bg fixed inset-0 -z-10 pointer-events-none"></div>

        <div className={mainClasses}>
            <Section2_Main />
            <Section3_Footer />
        </div>
    </>);
}
