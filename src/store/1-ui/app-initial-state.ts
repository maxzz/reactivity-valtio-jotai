import { type UiState } from "./app-storage";
import { type FceItem } from "../9-types";
import { uuid as uuidShort } from "@/utils";
import { v4 } from "uuid";

export function setAppDarkMode(isDark: boolean) {
    document.getElementsByTagName('body')[0].classList[isDark ? 'add': 'remove']('dark');
}

export function setUiInitialState(initialUiState: UiState) {
    setAppDarkMode(initialUiState.darkMode);
}

export function generateNewCatalogItem(newIndex: number, newName: string, isPassword: boolean): FceItem {
    const guid = v4();
    const now = uuidShort.asRelativeNumber();

    const rv: FceItem = {
        displayname: newName,
        dbname: `{${guid}}`,
        index: newIndex,
        uuid: now,
        //mru: now,
        isNewItem: true,
        editor: {
            selected: false,
        },
    };
    
    isPassword && (rv.password = true);

    return rv;
}
