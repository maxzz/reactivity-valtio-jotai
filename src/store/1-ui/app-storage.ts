import { proxy, subscribe } from 'valtio';
import { setUiInitialState } from '..';
import { type FormVjInputs, formVjDefaultValues } from '../2-form';
import { mergeDefaultAndLoaded } from '@/utils';

const STORAGE_UI_KEY = 'reactivity-valtio-jotai:ui';
const STORAGE_DATA_KEY = 'reactivity-valtio-jotai:data';
const STORAGE_UI_VER = 'v1';
const STORAGE_DATA_VER = 'v1';

export const enum ActivePage {
    none,
    pageVj,
}

export type UiState = {
    darkMode: boolean;
    activePage: ActivePage;
    pageVjDlgOpen: boolean;
};

type AppUi = {
    uiState: UiState,
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

export const appUi = proxy<AppUi>(loadUiInitialState());

setUiInitialState(appUi.uiState);

// Local storage

function loadUiInitialState(): AppUi {
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
    //console.log('store ui  ', appUi.uiState);

    localStorage.setItem(STORAGE_UI_KEY, JSON.stringify({ [STORAGE_UI_VER]: appUi.uiState }));
});

subscribe(appUi.formVjInputs, () => {
    //console.log('store data', appUi.formVjInputs);

    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify({ [STORAGE_DATA_VER]: appUi.formVjInputs }));
});
