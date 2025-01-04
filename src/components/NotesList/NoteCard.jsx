import { Card, Text, Flex, Box } from "@radix-ui/themes";
import NoteCardDropdown from "./NoteCardDropdown";



const NoteCard = ({
    note,
    index,
    className,
    ...props
}) => {
    return (
        <>
            <div className={"w-full shadow-lg border dark:border-neutral-600 border-neutral-300 p-2 dark:bg-neutral-800 bg-white rounded-md " + className} {...props}>
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
            </div>
        </>
    )
}

export default NoteCard