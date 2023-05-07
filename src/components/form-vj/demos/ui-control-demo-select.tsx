import React, { ComponentPropsWithoutRef, ElementRef } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { classNames } from '@/utils';
import { inputFocusClasses } from '../ui-controls';
import { IconCheck, IconChevronDown, IconChevronUp } from '../../ui';

const triggerClasses = "\
px-[15px] h-[35px] text-[13px] leading-none \
\
text-primary-900 bg-white dark:text-primary-400 dark:bg-primary-700 \
hover:text-primary-800 dark:hover:text-primary-300 hover:bg-primary-300 dark:hover:bg-primary-600 \
data-[placeholder]:text-primary-700 dark:data-[placeholder]:text-primary-400 \
shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-black \
\
rounded inline-flex items-center justify-center gap-[5px] \
";

const scrollUpDnButtonClasses = "\
px-[15px] h-[35px] text-[13px] leading-none \
\
text-primary-900 bg-white dark:text-primary-400 dark:bg-primary-700 \
hover:text-primary-800 dark:hover:text-primary-300 hover:bg-primary-300 dark:hover:bg-primary-600 \
data-[placeholder]:text-primary-700 dark:data-[placeholder]:text-primary-400 \
shadow-[0_2px_10px] shadow-black/10 focus:shadow-[0_0_0_2px] focus:shadow-black \
\
rounded inline-flex items-center justify-center gap-[5px] \
";

const contentClasses = "\
text-primary-900 bg-white dark:text-primary-400 dark:bg-primary-700 \
rounded-md \
overflow-hidden \
shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]";

const rowClasses = "\
relative \
pr-[35px] pl-[25px] h-[25px] text-[13px] leading-none \
\
data-[highlighted]:text-primary-100 \
data-[highlighted]:bg-primary-900 \
data-[highlighted]:outline-none \
data-[disabled]:opacity-40 \
data-[disabled]:pointer-events-none \
\
rounded-[3px] \
select-none \
flex items-center \
";

const selectSeparatorClasses = "mx-[5px] my-0.5 h-[1.2px] bg-primary-300 dark:bg-primary-700";
const selectLabelClasses = "px-[25px] h-[25px] text-[.65rem] leading-[25px] text-primary-800 dark:text-primary-500 border-current border rounded";

const SelectItem = React.forwardRef<ElementRef<typeof Select.Item>, ComponentPropsWithoutRef<typeof Select.Item>>(({ children, className, ...props }, forwardedRef) => {
    return (
        <Select.Item className={classNames(rowClasses, className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <IconCheck className="w-3 h-3"/>
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export function SelectDemo() {
    return (
        <Select.Root>
            <Select.Trigger className={`${triggerClasses} ${inputFocusClasses}`} aria-label="Food">
                <Select.Value placeholder="Select a fruit…" />

                <Select.Icon>
                    <IconChevronDown className="w-3 h-3 text-primary-900 dark:text-primary-400"/>
                    {/* <ChevronDownIcon /> */}
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal container={document.getElementById('portal')}>
                <Select.Content className={contentClasses}>

                    <Select.ScrollUpButton className={scrollUpDnButtonClasses}>
                        <IconChevronUp className="w-3 h-3"/>
                        {/* <ChevronUpIcon /> */}
                    </Select.ScrollUpButton>

                    <Select.Viewport className="p-[5px]">
                        <Select.Group>
                            <Select.Label className={selectLabelClasses}>Fruits</Select.Label>

                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </Select.Group>

                        <Select.Separator className={selectSeparatorClasses} />

                        <Select.Group>
                            <Select.Label className={selectLabelClasses}>Vegetables</Select.Label>

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
                            <Select.Label className={selectLabelClasses}>Meat</Select.Label>

                            <SelectItem value="beef">Beef</SelectItem>
                            <SelectItem value="chicken">Chicken</SelectItem>
                            <SelectItem value="lamb">Lamb</SelectItem>
                            <SelectItem value="pork">Pork</SelectItem>
                        </Select.Group>
                    </Select.Viewport>

                    <Select.ScrollDownButton className={scrollUpDnButtonClasses}>
                        <IconChevronDown className="w-3 h-3"/>
                        {/* <ChevronDownIcon /> */}
                    </Select.ScrollDownButton>

                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}
