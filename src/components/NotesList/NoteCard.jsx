import { Text, Flex, Box } from "@radix-ui/themes";
import NoteCardDropdown from "./NoteCardDropdown";
import Card from "../Card";



const NoteCard = ({
    note,
    index,
    className = "w-full",
    ...props
}) => {
    return (
        <>
            <Card className={`animate-in zoom-in-90 fade-in duration-500 ${className}`} {...props}>
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
        </>
    )
}

export default NoteCard