export function setInitialDarkMode(initialValue: boolean) {
    document.getElementsByTagName('body')[0].classList[initialValue ? 'add': 'remove']('dark');
}
