import { proxy, subscribe } from 'valtio';
export { useSnapshot } from 'valtio';
import { mergeDefaultAndLoaded } from '@/utils';
import { FormVjInputs, formVjDefaultValues } from './form-vj-types';

const STORAGE_KEY = 'reactivity-valtio-jotai';
const STORAGE_VER = 'v1';

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
    const storage = localStorage.getItem(STORAGE_KEY);
    if (storage) {
        try {
            const state = mergeDefaultAndLoaded(JSON.parse(storage)?.[STORAGE_VER], initialAppUi);
            return state;
        } catch (error) {
        }
    }
    return initialAppUi;
}

subscribe(appUi, () => {
    console.log('store', appUi.formVjInputs);

    localStorage.setItem(STORAGE_KEY, JSON.stringify({ [STORAGE_VER]: appUi }));
});
