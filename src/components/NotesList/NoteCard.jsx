import { Card, Text, Flex, Box } from "@radix-ui/themes";
import NoteCardDropdown from "./NoteCardDropdown";

const NoteCard = () => {
    return (
        <Card variant="classic" className="shadow-lg">
            <Flex gap="3" align={"center"} justify={"between"}>
                <Box>
                    <Text as="div" size="3" weight="bold">Quick start</Text>
                    <Text as="div" size="1" weight={"light"} className="text-neutral-500">{new Date().toDateString()}</Text>
                </Box>
                <NoteCardDropdown />
            </Flex>
            <Text as="div" color="gray" size="2">
                Start building your next project in minutes
            </Text>
        </Card>
    )
}

export default NoteCard