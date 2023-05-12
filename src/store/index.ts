import { appUi } from './app-storage';
import { generateNewCatalogItem } from './app-initial-state';

export { useSnapshot } from 'valtio';
export * from './app-storage';
export * from './app-initial-state';

let lastTxtAutoNumber = 0;
let lastPswAutoNumber = 0;

export function addCatalogItem(isPassword: boolean) {
    const items = appUi.formVjInputs.items;
    const newName = `${isPassword ? 'password' : 'name'} ${isPassword ? ++lastPswAutoNumber : ++lastTxtAutoNumber}`;
    items.push(generateNewCatalogItem(items.length, newName, isPassword));
}
