import { useSettings } from "../../../../context/SettingsContext";
import { Menu, Text, Avatar } from '@mantine/core';

const NoteBarDropdown = () => {
    const { theme, setTheme } = useSettings();

    const handleThemeToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Avatar
                    size="sm"
                    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item>
                    Settings
                </Menu.Item>
                <Menu.Item >
                    Messages
                </Menu.Item>
                <Menu.Item >
                    Gallery
                </Menu.Item>
                <Menu.Item
                    rightSection={
                        <Text size="xs" c="dimmed">
                            ⌘K
                        </Text>
                    }
                >
                    Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                >
                    Transfer my data
                </Menu.Item>
                <Menu.Item
                    color="red"
                >
                    Delete my account
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default NoteBarDropdown;
