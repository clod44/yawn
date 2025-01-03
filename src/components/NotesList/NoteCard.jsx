import { Card, Text, Flex, Box } from "@radix-ui/themes";
import NoteCardDropdown from "./NoteCardDropdown";



const NoteCard = ({
    note,
    index,
    className,
    ...props
}) => {
    return (
        <Card variant="classic" className={"shadow-lg " + className} {...props}>
            <Flex gap="3" align={"center"} justify={"between"}>
                <Box>
                    <Text as="div" size="3" weight="bold">Quick start {index + 1}</Text>
                    <Text as="div" size="1" weight={"light"} className="text-neutral-500">{new Date().toDateString()}</Text>
                </Box>
                <NoteCardDropdown />
            </Flex>
            <Text as="div" color="gray" size="2">
                Start building your next project in minutes ...
            </Text>
        </Card>
    )
}

export default NoteCard