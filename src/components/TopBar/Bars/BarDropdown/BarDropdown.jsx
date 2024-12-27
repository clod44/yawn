import { useSettings } from "../../../../context/SettingsContext";
import { Avatar, DropdownMenu } from "@radix-ui/themes";


const BarDropdown = () => {
    const {
        theme,
        setTheme
    } = useSettings();
    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Avatar
                    size={"1"}
                    radius="full"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                    fallback="A"
                />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item shortcut="⌘ E">Profile</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item
                    shortcut="⌘ D"
                    onClick={handleThemeToggle}
                >
                    Switch Theme
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                    Logout
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
}

export default BarDropdown