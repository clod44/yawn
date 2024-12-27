import { Card, Text, Flex, DropdownMenu, Box } from "@radix-ui/themes";



const NoteCard = () => {
    return (
        <Card variant="classic" className="shadow-lg">
            <Flex gap="3" align={"center"} justify={"between"}>
                <Box>
                    <Text as="div" size="3" weight="bold">Quick start</Text>
                    <Text as="div" size="1" weight={"light"} className="text-neutral-500">{new Date().toDateString()}</Text>
                </Box>
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
            </Flex>
            <Text as="div" color="gray" size="2">
                Start building your next project in minutes
            </Text>
        </Card>
    )
}

export default NoteCard