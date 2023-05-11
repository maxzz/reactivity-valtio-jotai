import { Scroller } from "@/components/ui";
import { ButtonAdd } from "./ui-grid-add-button";
import { GridRows } from "./ui-grid-rows";

export function GridRowsWithAddButton() {
    return (
        <fieldset className="pt-1 pb-2 relative border-primary-500 border rounded max-h-[30vh]">
            <legend className="mx-2 px-1 select-none">Catalog Items</legend>

            <Scroller>
                <GridRows />
            </Scroller>

            <ButtonAdd className="absolute p-1 top-0 right-0 mx-2 -my-6 w-6 h-6 bg-primary-200 dark:bg-primary-700" />
        </fieldset>
    );
}
