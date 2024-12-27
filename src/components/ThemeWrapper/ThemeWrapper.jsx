import { Theme } from "@radix-ui/themes";
import { useSettings } from "../../context/SettingsContext";

const ThemeWrapper = ({ children }) => {
    const { accentColor, theme } = useSettings();
    return (
        <Theme accentColor={accentColor} appearance={theme}>
            {children}
        </Theme>
    );
};

export default ThemeWrapper