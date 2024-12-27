import { DropdownMenu, Box } from "@radix-ui/themes";

const NoteCardDropdown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Box p={"2"} height={"100%"}>
                    <DropdownMenu.TriggerIcon />
                </Box>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>
                <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Share</DropdownMenu.Item>
                <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                    Delete
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
};

export default NoteCardDropdown;