import { useRef, useState } from "react";
import { IconMenu } from "../ui/icons";
import { MenuButtons } from "./ui-row-menu";
import { useClickAway } from "react-use";

function RowItem({ registered, errors, control }: { registered: UseFormRegisterReturn; errors: FieldErrors<Form2Inputs>; control: Control<Form2Inputs, any>; }) {
    return (
        <input className="px-2 py-1 w-full text-sm rounded" autoComplete="off" list="autocompleteOff" spellCheck="false" {...registered} />
    );
}

type RowParams = {
    field: FieldArrayWithId<Form2Inputs, "fields", "id">;
    idx: number;
    menuState: MenuState;
    register: UseFormRegister<Form2Inputs>;
    errors: FieldErrors<Form2Inputs>;
    control: Control<Form2Inputs, any>;
};

function Row({ field, idx, menuState, register, errors, control }: RowParams) {
    const [menuOpen, setMenuOpen] = useState(false);
    const onClose = (event: React.MouseEvent) => { event.preventDefault(); setMenuOpen(v => !v); };
    const btnRef = useRef(null);
    useClickAway(btnRef, () => { setMenuOpen(false); });
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-1">

            <RowItem registered={register(`fields.${idx}.disp`)} errors={errors} control={control} />
            <RowItem registered={register(`fields.${idx}.value`)} errors={errors} control={control} />
            <RowItem registered={register(`fields.${idx}.type`)} errors={errors} control={control} />

            <button ref={btnRef} className="relative">
                <IconMenu
                    className="p-1 w-5 h-5 hover:text-white hover:bg-yellow-500 rounded"
                    onClick={(event) => { event.preventDefault(); setMenuOpen(v => !v); }}
                />
                {menuOpen &&
                    <MenuButtons onClose={onClose} {...menuState} />
                }
            </button>
        </div>
    );
}
