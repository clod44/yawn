import { Menu, Text, ActionIcon } from '@mantine/core';
import { GoChevronDown } from "react-icons/go";

function NotesCardDropdown() {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon variant="subtle" color="gray" size="xl" aria-label="Settings">
                    <GoChevronDown />
                </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item>
                    Settings
                </Menu.Item>
                <Menu.Item >
                    Messages
                </Menu.Item>
                <Menu.Item>
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

export default NotesCardDropdown