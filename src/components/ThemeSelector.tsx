import {
    BlendingModeIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import { useEffect, useState } from 'react';

const themes = [
    { value: 'system', option: 'System' },
    { value: 'light', option: 'Light' },
    { value: 'dark', option: 'Dark' },
    { value: 'cupcake', option: 'Cupcake' },
    { value: 'bumblebee', option: 'Bumblebee' },
    { value: 'emerald', option: 'Emerald' },
    { value: 'corporate', option: 'Corporate' },
    { value: 'synthwave', option: 'Synthwave' },
    { value: 'retro', option: 'Retro' },
    { value: 'cyberpunk', option: 'Cyberpunk' },
    { value: 'valentine', option: 'Valentine' },
    { value: 'halloween', option: 'Halloween' },
    { value: 'garden', option: 'Garden' },
    { value: 'forest', option: 'Forest' },
    { value: 'aqua', option: 'Aqua' },
    { value: 'lofi', option: 'Lofi' },
    { value: 'pastel', option: 'Pastel' },
    { value: 'fantasy', option: 'Fantasy' },
    { value: 'wireframe', option: 'Wireframe' },
    { value: 'black', option: 'Black' },
    { value: 'luxury', option: 'Luxury' },
    { value: 'dracula', option: 'Dracula' },
    { value: 'cmyk', option: 'Cmyk' },
    { value: 'autumn', option: 'Autumn' },
    { value: 'business', option: 'Business' },
    { value: 'acid', option: 'Acid' },
    { value: 'lemonade', option: 'Lemonade' },
    { value: 'night', option: 'Night' },
    { value: 'coffee', option: 'Coffee' },
    { value: 'winter', option: 'Winter' },
];

const ThemeSelector = () => {
    const localTheme = localStorage.getItem('localTheme');
    const [value, setValue] = useState(localTheme ? localTheme : 'System');
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) htmlElement.setAttribute('data-theme', value);
        localStorage.setItem('localTheme', value);
    }, [value]);
    return (
        <>
            <div className="tablet:block hidden">
                <Select.Root value={value} onValueChange={setValue}>
                    <Select.Trigger className="rounded text-sm leading-none text-base-content d-s">
                        <div className="flex items-center justify-center gap-1">
                            <Select.Icon>
                                <BlendingModeIcon />
                            </Select.Icon>
                            <Select.Value aria-label="Theme">
                                <span className="font-bold">Theme : </span>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Select.Value>
                            <Select.Icon>
                                <ChevronDownIcon />
                            </Select.Icon>
                        </div>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content
                            className="bg-base-100 text-sm rounded d-b"
                            side="bottom"
                        >
                            <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                                <ChevronUpIcon />
                            </Select.ScrollUpButton>
                            <Select.Viewport className="p-1">
                                {themes.map((themeOption, key) => (
                                    <Select.Item
                                        key={key}
                                        value={themeOption.value}
                                        className="flex items-center h-6 px-6 relative select-none cursor-pointer data-[disabled]:text-primary data-[disabled]:bg-primary/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content rounded text-base-content/70"
                                    >
                                        <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                                            <CheckIcon />
                                        </Select.ItemIndicator>
                                        <Select.ItemText className="border border-primary">
                                            {themeOption.option}
                                        </Select.ItemText>
                                    </Select.Item>
                                ))}
                            </Select.Viewport>
                            <Select.ScrollDownButton className="flex items-center justify-center h-6 cursor-default">
                                <ChevronDownIcon />
                            </Select.ScrollDownButton>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>
            <div className="tablet:hidden block">
                <select
                    className="rounded pl-4 text-base-content leading-none text-sm select select-bordered select-sm w-32"
                    onChange={(e) => {
                        const selected = e.target.value;
                        setValue(selected);
                    }}
                    value={value}
                >
                    {themes.map((themeOption, key) => {
                        return (
                            <option key={key} value={themeOption.value}>
                                {themeOption.option}
                            </option>
                        );
                    })}
                </select>
            </div>
        </>
    );
};
export default ThemeSelector;
