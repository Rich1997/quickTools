import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { themes } from '../utils/Constants';

const ThemeSelectorMobile = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('localTheme', theme);
    }, [theme]);
    return (
        <div className="tablet:hidden block">
            <select
                className="rounded pl-4 text-base-content leading-none text-sm select select-bordered select-sm w-32"
                onChange={(e) => {
                    const selected = e.target.value;
                    setTheme(selected);
                }}
                value={theme}
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
    );
};

export default ThemeSelectorMobile;
