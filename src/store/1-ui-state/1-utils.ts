export function setAppDarkMode(isDark: boolean) {
    document.getElementsByTagName('body')[0].classList[isDark ? 'add' : 'remove']('dark');
}

export function setUiInitialState({ darkMode }: { darkMode: boolean; }) {
    setAppDarkMode(darkMode);
}
