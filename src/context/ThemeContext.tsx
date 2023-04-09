import { createContext, ReactNode, useState } from 'react';

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'system',
    setTheme: (theme: string) => {},
});

export const ThemeProvider = (props: { children: ReactNode }) => {
    const localTheme = localStorage.getItem('localTheme');
    const [theme, setTheme] = useState(localTheme ? localTheme : 'system');

    const handleChangeTheme = (selectedTheme: string) => {
        setTheme(selectedTheme);
        localStorage.setItem('localTheme', selectedTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleChangeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
