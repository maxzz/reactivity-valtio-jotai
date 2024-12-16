import { appUi } from './1-ui/app-storage';
import { generateNewCatalogItem } from './1-ui/app-initial-state';

export { useSnapshot } from 'valtio';
export * from './1-ui/app-storage';
export * from './1-ui/app-initial-state';

export * from './2-form';
export * from './8-manifest';
export * from './9-types';

let lastTxtAutoNumber = 0;
let lastPswAutoNumber = 0;

export function addCatalogItem(isPassword: boolean) {
    const items = appUi.formVjInputs.items;
    const newName = `${isPassword ? 'password' : 'name'} ${isPassword ? ++lastPswAutoNumber : ++lastTxtAutoNumber}`;
    items.push(generateNewCatalogItem(items.length, newName, isPassword));
}
