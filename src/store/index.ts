import { appUi } from './app-storage';
import { generateNewCatalogItem } from './app-initial-state';

export { useSnapshot } from 'valtio';
export * from './app-storage';
export * from './app-initial-state';

export function addCatalogItem(newName: string, isPassword: boolean) {
    const items = appUi.formVjInputs.items;
    items.push(generateNewCatalogItem(items.length, newName, isPassword));
}
