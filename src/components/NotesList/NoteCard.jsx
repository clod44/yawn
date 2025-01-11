import NoteCardDropdown from "./NoteCardDropdown";
import { Card, Text, Group, Stack } from '@mantine/core';
import { Link } from "react-router-dom";



const NoteCard = ({
    note,
    index,
    className = "w-full",
    ...props
}) => {
    return (
        <>
            <Card shadow="sm" padding="sm" withBorder>
                <Group justify="space-between" mb="xs">
                    <Stack
                        gap={0}
                        component={Link}
                        to={`/note/${note.id}`}
                        className="cursor-pointer"
                    >
                        <Text fw={500}>Get Started With Note {index + 1}</Text>
                        <Text size="xs" c="dimmed">
                            {new Date().toDateString()}
                        </Text>
                    </Stack>
                    <NoteCardDropdown />
                </Group>

                <Text size="sm" c="dimmed">
                    With Fjord Tours you can explore more ...
                </Text>
            </Card>
        </>
    )
}

export default NoteCard