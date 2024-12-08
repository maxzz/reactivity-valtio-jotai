import { UiState } from ".";
import { CatalogItem } from "./manifest";
import { uuid as uuidShort } from "@/utils";
import { v4 } from "uuid";

export function setAppDarkMode(isDark: boolean) {
    document.getElementsByTagName('body')[0].classList[isDark ? 'add': 'remove']('dark');
}

export function setUiInitialState(initialUiState: UiState) {
    setAppDarkMode(initialUiState.darkMode);
}

export function generateNewCatalogItem(newIndex: number, newName: string, isPassword: boolean): CatalogItem {
    const guid = v4();
    const now = uuidShort.asRelativeNumber();
    const rv: CatalogItem = {
        displayname: newName,
        dbname: `{${guid}}`,
        index: newIndex,
        uuid: now,
        //mru: now,
        newItem: true,
        editor: {
            selected: false,
        },
    };
    isPassword && (rv.password = true);
    return rv;
}
