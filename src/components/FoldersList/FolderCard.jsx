
import { Link } from "react-router-dom";
import Emoji from "react-emoji-render";
import { Card, Group, Text, ActionIcon } from "@mantine/core";
import { FaPen } from "react-icons/fa";

const FolderCard = ({
    folder = {},
    index,
    ...props
}) => {

    return (
        <>

            <Card shadow="sm" padding="sm" withBorder>
                <Group justify="space-between" >
                    <Text fw={500}>{folder.emoji} {folder.title}</Text>
                    <ActionIcon
                        color="gray"
                        variant="subtle"
                        component={Link}
                        to={`/folders/${folder.id}`}
                    >
                        <FaPen />
                    </ActionIcon>
                </Group>
            </Card>
        </>
    );
};

export default FolderCard;
