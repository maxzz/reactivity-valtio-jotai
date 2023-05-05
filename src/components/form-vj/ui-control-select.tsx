import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { classNames } from '@/utils';

const selectItemClasses = "\
relative \
h-[25px] pr-[35px] pl-[25px] \
text-[13px] \
leading-none \
rounded-[3px] \
select-none \
text-violet11 \
flex items-center \
data-[disabled]:text-mauve8 \
data-[disabled]:pointer-events-none \
data-[highlighted]:outline-none \
data-[highlighted]:bg-violet9 \
data-[highlighted]:text-violet1";

const SelectItem = React.forwardRef<HTMLDivElement, Select.SelectItemProps>(({ children, className, ...props }, forwardedRef) => {
    return (
        <Select.Item className={classNames(selectItemClasses, className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

const selectTriggerClasses = "\
h-[35px] \
px-[15px] \
text-[13px] \
leading-none \
\
bg-white \
text-violet11 \
shadow-[0_2px_10px] \
shadow-black/10 \
hover:bg-mauve3 \
focus:shadow-[0_0_0_2px] \
focus:shadow-black \
data-[placeholder]:text-violet9 \
\
rounded \
outline-none \
inline-flex \
items-center \
justify-center \
gap-[5px] \
";

const selectScrollUpButtonClasses = "\
px-[15px] \
text-[13px] \
leading-none \
h-[35px] \
\
rounded \
outline-none \
inline-flex \
items-center \
justify-center \
gap-[5px] \
\
bg-white \
text-violet11 \
shadow-[0_2px_10px] \
shadow-black/10 \
hover:bg-mauve3 \
focus:shadow-[0_0_0_2px] \
focus:shadow-black \
data-[placeholder]:text-violet9 \
";

const selectContentClasses = "\
bg-white \
rounded-md \
overflow-hidden \
shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]";

const selectSeparatorClasses = "\
m-[5px] \
h-[1px] \
bg-violet6";

const selectLabelClasses = "\
px-[25px] \
text-xs \
leading-[25px] \
text-mauve11";

export function SelectDemo() {
    return (
        <Select.Root>
            <Select.Trigger className={selectTriggerClasses} aria-label="Food">
                <Select.Value placeholder="Select a fruit…" />

                <Select.Icon className="text-violet11">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className={selectContentClasses}>

                    <Select.ScrollUpButton className={selectScrollUpButtonClasses}>
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>

                    <Select.Viewport className="p-[5px]">
                        <Select.Group>
                            <Select.Label className={selectLabelClasses}>
                                Fruits
                            </Select.Label>

                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </Select.Group>

                        <Select.Separator className={selectSeparatorClasses} />

                        <Select.Group>
                            <Select.Label className={selectLabelClasses}>
                                Vegetables
                            </Select.Label>

                            <SelectItem value="aubergine">Aubergine</SelectItem>
                            <SelectItem value="broccoli">Broccoli</SelectItem>
                            <SelectItem value="carrot" disabled>
                                Carrot
                            </SelectItem>
                            <SelectItem value="courgette">Courgette</SelectItem>
                            <SelectItem value="leek">Leek</SelectItem>
                        </Select.Group>

                        <Select.Separator className={selectSeparatorClasses} />

                        <Select.Group>
                            <Select.Label className={selectLabelClasses}>
                                Meat
                            </Select.Label>

                            <SelectItem value="beef">Beef</SelectItem>
                            <SelectItem value="chicken">Chicken</SelectItem>
                            <SelectItem value="lamb">Lamb</SelectItem>
                            <SelectItem value="pork">Pork</SelectItem>
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton className={selectScrollUpButtonClasses}>
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>

                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}
