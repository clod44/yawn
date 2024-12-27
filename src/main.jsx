import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import './index.css'
import App from './App.jsx'
import { SettingsProvider } from "./context/SettingsContext.jsx"
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SettingsProvider>
            <ThemeWrapper>
                <App />
            </ThemeWrapper>
        </SettingsProvider>
    </StrictMode>
)
