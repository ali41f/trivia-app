import React from 'react'

const defaultTheme = "white";
const ThemeContext = React.createContext(
    defaultTheme
);

type Props = {
    children: React.ReactNode
};
export const ThemeProvider = ({
    children
}: Props) => {
    const [theme, setTheme] = React.useState(
        defaultTheme
    );

    React.useEffect(() => {
        // We'd get the theme from a web API / local storage in a real app
        // We've hardcoded the theme in our example
        const currentTheme = "lightblue";
        setTheme(currentTheme);
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};