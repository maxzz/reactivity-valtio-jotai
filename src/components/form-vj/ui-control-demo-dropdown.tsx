import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const menuTriggerClasses = "\
m-4 w-8 h-8 rounded \
\
text-primary-800 bg-white hover:bg-primary-400 \
shadow-[0_2px_10px] shadow-primary-950 focus:shadow-[0_0_0_2px] focus:shadow-black \
\
outline-none inline-flex items-center justify-center \
";

const dropdownContentClasses = "\
p-[5px] \
min-w-[220px] \
rounded-md \
bg-white \
shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] \
will-change-[opacity,transform] \
data-[side=top]:animate-slideDownAndFade \
data-[side=right]:animate-slideLeftAndFade \
data-[side=bottom]:animate-slideUpAndFade \
data-[side=left]:animate-slideRightAndFade \
";

const rowClasses = "\
group \
relative \
pl-[25px] pr-[5px] h-[25px] \
\
text-[13px] leading-none \
\
text-primary-800 \
rounded-[3px] \
flex items-center select-none outline-none";

const rowDataClasses = "\
data-[disabled]:opacity-30 \
data-[disabled]:pointer-events-none \
data-[highlighted]:bg-primary-800 \
data-[highlighted]:text-primary-100 \
";

const itemTextClasses = `${rowClasses} ${rowDataClasses}`;

const shortcutClasses = "ml-auto pl-[20px] text-primary-800 group-data-[highlighted]:text-white group-data-[disabled]:text-primary-600";

const groupLabelClasses = "pl-[25px] text-[.65rem] text-primary-400";
const separatorClasses = "m-[5px] h-[1.2px] bg-primary-300";
const menuIndicatorClasses = "absolute left-0 w-[25px] inline-flex items-center justify-center";

const menuTriggerSubClasses = `${itemTextClasses} ${"\
data-[highlighted]:data-[state=open]:text-primary-100 \
data-[highlighted]:data-[state=open]:bg-primary-800 \
data-[state=open]:text-primary-800 \
data-[state=open]:bg-primary-300 \
"}`;

export const DropdownMenuDemo = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={menuTriggerClasses} aria-label="Customise options">
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal container={document.getElementById('portal')}>
                <DropdownMenu.Content className={dropdownContentClasses} sideOffset={5}>
                    <DropdownMenu.Item className={itemTextClasses}>New Tab{' '}<div className={shortcutClasses}>⌘+T</div></DropdownMenu.Item>
                    <DropdownMenu.Item className={itemTextClasses}>New Window{' '}<div className={shortcutClasses}>⌘+N</div></DropdownMenu.Item>
                    <DropdownMenu.Item className={itemTextClasses} disabled>New Private Window{' '}<div className={shortcutClasses}>⇧+⌘+N</div></DropdownMenu.Item>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className={menuTriggerSubClasses}>
                            More Tools
                            <div className={shortcutClasses}>
                                <ChevronRightIcon />
                            </div>
                        </DropdownMenu.SubTrigger>

                        <DropdownMenu.Portal container={document.getElementById('portal')}>
                            <DropdownMenu.SubContent className={dropdownContentClasses} sideOffset={2} alignOffset={-5}>

                                <DropdownMenu.Item className={itemTextClasses}>Save Page As…{' '}<div className={shortcutClasses}>⌘+S</div></DropdownMenu.Item>
                                <DropdownMenu.Item className={itemTextClasses}>Create Shortcut…</DropdownMenu.Item>
                                <DropdownMenu.Item className={itemTextClasses}>Name Window…</DropdownMenu.Item>
                                <DropdownMenu.Separator className={separatorClasses} />
                                <DropdownMenu.Item className={itemTextClasses}>Developer Tools</DropdownMenu.Item>

                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className={separatorClasses} />

                    <DropdownMenu.CheckboxItem className={itemTextClasses} checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                        <DropdownMenu.ItemIndicator className={menuIndicatorClasses}><CheckIcon /></DropdownMenu.ItemIndicator>
                        Show Bookmarks{' '}
                        <div className={shortcutClasses}>⌘+B</div>
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.CheckboxItem className={itemTextClasses} checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                        <DropdownMenu.ItemIndicator className={menuIndicatorClasses}><CheckIcon /></DropdownMenu.ItemIndicator>
                        Show Full URLs
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Separator className={separatorClasses} />
                    <DropdownMenu.Label className={groupLabelClasses}>People</DropdownMenu.Label>

                    <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
                        <DropdownMenu.RadioItem className={itemTextClasses} value="twain">
                            <DropdownMenu.ItemIndicator className={menuIndicatorClasses}> <DotFilledIcon /> </DropdownMenu.ItemIndicator>
                            Mark Twain
                        </DropdownMenu.RadioItem>

                        <DropdownMenu.RadioItem className={itemTextClasses} value="knopfler">
                            <DropdownMenu.ItemIndicator className={menuIndicatorClasses}> <DotFilledIcon /> </DropdownMenu.ItemIndicator>
                            Mark Knopfler
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>

                    <DropdownMenu.Arrow className="fill-white" />

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
