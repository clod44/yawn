import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [accentColor, setAccentColor] = useState("gray");
    const [listViewType, setListViewType] = useState("list");

    return (
        <SettingsContext.Provider value={{
            theme, setTheme,
            accentColor, setAccentColor,
            listViewType, setListViewType,
        }}>
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
