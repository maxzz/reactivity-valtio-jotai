import { proxy, subscribe } from 'valtio';
export { useSnapshot } from 'valtio';
import { mergeDefaultAndLoaded } from '@/utils';
import { FormVjInputs, formVjDefaultValues } from './form-vj-types';

const STORAGE_UI_KEY = 'reactivity-valtio-jotai:ui';
const STORAGE_DATA_KEY = 'reactivity-valtio-jotai:data';
const STORAGE_UI_VER = 'v1';
const STORAGE_DATA_VER = 'v1';

export const enum ActivePage {
    none,
    pageVj,
}

type AppUi = {
    uiState: {
        darkMode: boolean;
        activePage: ActivePage;
        pageVjDlgOpen: boolean;
    },

    formVjInputs: FormVjInputs;
};

const initialAppUi: AppUi = {
    uiState: {
        darkMode: false,
        activePage: ActivePage.pageVj,
        pageVjDlgOpen: true,
    },

    formVjInputs: formVjDefaultValues,
};

export const appUi = proxy<AppUi>(loadStorageAppUi());

// Local storage

function loadStorageAppUi(): AppUi {
    const storeState = {} as AppUi;

    const storageUi = localStorage.getItem(STORAGE_UI_KEY);
    if (storageUi) {
        try {
            storeState.uiState = JSON.parse(storageUi)?.[STORAGE_UI_VER];
        } catch (error) {
        }
    }

    const storageData = localStorage.getItem(STORAGE_DATA_KEY);
    if (storageData) {
        try {
            storeState.formVjInputs = JSON.parse(storageData)?.[STORAGE_DATA_VER];
        } catch (error) {
        }
    }

    return mergeDefaultAndLoaded(storeState, initialAppUi);
}

subscribe(appUi.uiState, () => {
    console.log('store ui  ', appUi.uiState);

    localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: appUi.uiState }));
});

subscribe(appUi.formVjInputs, () => {
    console.log('store data', appUi.formVjInputs);

    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify({ [STORAGE_DATA_VER]: appUi.formVjInputs }));
});

//

setInitialDarkMode();

function setInitialDarkMode() {
    document.getElementsByTagName('body')[0].classList[appUi.uiState.darkMode ? 'add': 'remove']('dark');
}
