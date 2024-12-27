import React, { createContext, useContext, useState, useMemo } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [accentColor, setAccentColor] = useState("gray");

    const value = useMemo(() => ({
        theme,
        setTheme,
        accentColor,
        setAccentColor,
    }), [theme, setTheme, accentColor, setAccentColor]);

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};
