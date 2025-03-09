import { createContext, useState } from 'react';
export const ThemeContext = createContext('light');
// Provider component that wraps your app
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Manage the theme state
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};