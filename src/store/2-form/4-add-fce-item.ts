import { appUi } from '../1-ui/app-storage';
import { type FceItem } from "../9-types";
import { uuid as uuidShort } from "@/utils";
import { v4 } from "uuid";

let lastTxtAutoNumber = 0;
let lastPswAutoNumber = 0;

export function addCatalogItem(isPassword: boolean) {
    const items = appUi.formVjInputs.items;
    const newName = `${isPassword ? 'password' : 'name'} ${isPassword ? ++lastPswAutoNumber : ++lastTxtAutoNumber}`;
    items.push(generateNewCatalogItem(items.length, newName, isPassword));
}

function generateNewCatalogItem(newIndex: number, newName: string, isPassword: boolean): FceItem {
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
