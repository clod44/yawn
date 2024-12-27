import { createContext, useContext, useState, useMemo } from 'react';

const MiscContext = createContext();

export const MiscProvider = ({ children }) => {
    const [toggleShowArchiveNotes, setToggleShowArchiveNotes] = useState(false);

    const value = useMemo(() => ({
        toggleShowArchiveNotes,
        setToggleShowArchiveNotes,
    }), [toggleShowArchiveNotes, setToggleShowArchiveNotes]);

    return <MiscContext.Provider value={value}>{children}</MiscContext.Provider>;
};

export const useMisc = () => useContext(MiscContext);
