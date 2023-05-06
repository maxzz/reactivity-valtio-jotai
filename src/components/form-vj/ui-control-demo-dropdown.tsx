import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';

const dropdownContentClasses = "\
min-w-[220px] \
bg-white \
rounded-md \
p-[5px] \
shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] \
will-change-[opacity,transform] \
data-[side=top]:animate-slideDownAndFade \
data-[side=right]:animate-slideLeftAndFade \
data-[side=bottom]:animate-slideUpAndFade \
data-[side=left]:animate-slideRightAndFade \
";

const menuitemClasses = "\
text-[13px] \
leading-none \
text-red-800 \
rounded-[3px] \
flex \
items-center \
h-[25px] \
px-[5px] \
relative \
pl-[25px] \
select-none \
outline-none \
";

const itemTextClasses = `${menuitemClasses} ${"\
data-[disabled]:text-primary-600 \
data-[disabled]:pointer-events-none \
data-[highlighted]:bg-primary-800 \
data-[highlighted]:text-primary-100 \
"}`;

const itemTextShortcutClasses = `group ${itemTextClasses}`;

const shortcutClasses = "\
ml-auto \
pl-[20px] \
text-primary-800 \
group-data-[highlighted]:text-white \
group-data-[disabled]:text-primary-600 \
";

const separatorClasses = "\
h-[1.2px] \
bg-primary-300 \
m-[5px] \
";

const checkboxClasses = `${menuitemClasses} ${"\
data-[disabled]:text-primary-600 \
data-[disabled]:pointer-events-none \
data-[highlighted]:bg-primary-800 \
data-[highlighted]:text-primary-100 \
"}`;

const menuIndicatorClasses = "\
absolute \
left-0 \
w-[25px] \
inline-flex \
items-center \
justify-center \
";

const menuTriggerClasses = `${
    "\
    rounded-full \
    w-[35px] \
    h-[35px] \
    \
    inline-flex \
    items-center \
    justify-center \
    \
    text-red-800 \
    bg-white \
    shadow-[0_2px_10px] \
    shadow-primary-950 \
    outline-none \
    hover:bg-primary-400 \
    focus:shadow-[0_0_0_2px] \
    focus:shadow-black \
    "
}`;

const menuTriggerSubClasses = `${menuitemClasses} ${"\
group \
data-[state=open]:bg-primary-400 \
data-[state=open]:text-red-800 \
data-[disabled]:text-primary-600 \
data-[disabled]:pointer-events-none \
data-[highlighted]:bg-primary-800 \
data-[highlighted]:text-primary-100 \
data-[highlighted]:data-[state=open]:bg-primary-800 \
data-[highlighted]:data-[state=open]:text-primary-100 \
"}`;

const itemLabelClasses = "\
pl-[25px] \
text-xs \
leading-[25px] \
text-primary-800 \
";

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
                    <DropdownMenu.Item className={itemTextShortcutClasses}>New Tab{' '}<div className={shortcutClasses}>⌘+T</div></DropdownMenu.Item>
                    <DropdownMenu.Item className={itemTextShortcutClasses}>New Window{' '}<div className={shortcutClasses}>⌘+N</div></DropdownMenu.Item>
                    <DropdownMenu.Item className={itemTextShortcutClasses} disabled>New Private Window{' '}<div className={shortcutClasses}>⇧+⌘+N</div></DropdownMenu.Item>

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className={menuTriggerSubClasses}>
                            More Tools
                            <div className={shortcutClasses}>
                                <ChevronRightIcon />
                            </div>
                        </DropdownMenu.SubTrigger>

                        <DropdownMenu.Portal container={document.getElementById('portal')}>
                            <DropdownMenu.SubContent className={dropdownContentClasses} sideOffset={2} alignOffset={-5}>

                                <DropdownMenu.Item className={itemTextShortcutClasses}>Save Page As…{' '}<div className={shortcutClasses}>⌘+S</div></DropdownMenu.Item>
                                <DropdownMenu.Item className={itemTextClasses}>Create Shortcut…</DropdownMenu.Item>
                                <DropdownMenu.Item className={itemTextClasses}>Name Window…</DropdownMenu.Item>
                                <DropdownMenu.Separator className={separatorClasses} />
                                <DropdownMenu.Item className={itemTextClasses}>Developer Tools</DropdownMenu.Item>

                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className={separatorClasses} />

                    <DropdownMenu.CheckboxItem className={itemTextShortcutClasses} checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                        <DropdownMenu.ItemIndicator className={menuIndicatorClasses}><CheckIcon /></DropdownMenu.ItemIndicator>
                        Show Bookmarks{' '}
                        <div className={shortcutClasses}>⌘+B</div>
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.CheckboxItem className={checkboxClasses} checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                        <DropdownMenu.ItemIndicator className={menuIndicatorClasses}><CheckIcon /></DropdownMenu.ItemIndicator>
                        Show Full URLs
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Separator className={separatorClasses} />

                    <DropdownMenu.Label className={itemLabelClasses}>
                        People
                    </DropdownMenu.Label>

                    <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
                        <DropdownMenu.RadioItem className={checkboxClasses} value="pedro">
                            <DropdownMenu.ItemIndicator className={menuIndicatorClasses}> <DotFilledIcon /> </DropdownMenu.ItemIndicator>
                            Pedro Duarte
                        </DropdownMenu.RadioItem>

                        <DropdownMenu.RadioItem className={checkboxClasses} value="colm">
                            <DropdownMenu.ItemIndicator className={menuIndicatorClasses}> <DotFilledIcon /> </DropdownMenu.ItemIndicator>
                            Colm Tuite
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>

                    <DropdownMenu.Arrow className="fill-white" />

                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
