import { useSettings } from "../../../../context/SettingsContext";
import { IconButton, DropdownMenu, Switch } from "@radix-ui/themes";
import { IoMdMore } from "react-icons/io";

const NoteBarDropdown = () => {
    const { theme, setTheme } = useSettings();

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <IconButton
                    variant="ghost"
                >
                    <IoMdMore size={24} />
                </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item shortcut="⌘ E">Profile</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                <DropdownMenu.Separator />

                <DropdownMenu.Item
                    onSelect={event => event.preventDefault()}
                >
                    <label>Dark mode</label>
                    <Switch
                        checked={theme === "dark"}
                        onCheckedChange={handleThemeToggle}
                    />
                </DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                    Logout
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}

export default NoteBarDropdown;
