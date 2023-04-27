import * as Select from '@radix-ui/react-select';
import { useContext, useEffect } from 'react';
import { MdCheck } from 'react-icons/md';
import { TbColorSwatch } from 'react-icons/tb';
import { RxChevronDown, RxChevronUp } from 'react-icons/rx';
import { ThemeContext } from '../context/ThemeContext';
import { themes } from '../utils/Constants';

const ThemeSelector = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('localTheme', theme);
    }, [theme]);
    return (
        <div className="tablet:block hidden">
            <Select.Root value={theme} onValueChange={setTheme}>
                <Select.Trigger className="text-sm leading-none text-base-content p-2 focus:shadow-[0_0_0_2px] focus:shadow-base-content outline-none d-s d-s-h">
                    <div className="flex items-center justify-center gap-1">
                        <Select.Icon>
                            <TbColorSwatch size={14} />
                        </Select.Icon>
                        <Select.Value aria-label="Theme">
                            <span className="font-bold">Theme : </span>
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </Select.Value>
                        <Select.Icon>
                            <RxChevronDown size={16} />
                        </Select.Icon>
                    </div>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content
                        className="bg-base-100 text-sm rounded-md d-b"
                        side="bottom"
                    >
                        <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                            <RxChevronUp size={16} />
                        </Select.ScrollUpButton>
                        <Select.Viewport className="p-1">
                            {themes.map((themeOption, key) => (
                                <Select.Item
                                    key={key}
                                    value={themeOption.value}
                                    className="flex items-center h-6 px-6 relative select-none cursor-pointer data-[disabled]:text-primary data-[disabled]:bg-primary/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary data-[highlighted]:text-primary-content rounded text-base-content/70"
                                >
                                    <Select.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
                                        <MdCheck size={16} />
                                    </Select.ItemIndicator>
                                    <Select.ItemText className="border border-primary">
                                        {themeOption.option}
                                    </Select.ItemText>
                                </Select.Item>
                            ))}
                        </Select.Viewport>
                        <Select.ScrollDownButton className="flex items-center justify-center h-6 cursor-default">
                            <RxChevronDown size={16} />
                        </Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
};

export default ThemeSelector;
