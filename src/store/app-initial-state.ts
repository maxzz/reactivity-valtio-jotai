import { UiState } from ".";

export function setInitialDarkMode(initialValue: boolean) {
    document.getElementsByTagName('body')[0].classList[initialValue ? 'add': 'remove']('dark');
}

export function setUiInitialState(initialUiState: UiState) {
    setInitialDarkMode(initialUiState.darkMode);
}
