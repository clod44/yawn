import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import { SettingsProvider } from "./context/SettingsContext.jsx"
import { MiscProvider } from './context/MiscContext.jsx';

const theme = createTheme({
    primaryColor: 'cyan',
    focusRing: 'never',
    white: '#fff',
    black: '#000',
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <SettingsProvider>
                <MiscProvider>
                    <App />
                </MiscProvider>
            </SettingsProvider>
        </MantineProvider>
    </StrictMode>
)
