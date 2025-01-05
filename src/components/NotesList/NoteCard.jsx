import { Text, Flex, Box } from "@radix-ui/themes";
import NoteCardDropdown from "./NoteCardDropdown";
import Card from "../Card";
import { Link } from "react-router-dom";



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
                    <Link to={`/note/${note?.id || "notfound"}`} className="cursor-pointer flex-grow">
                        <Box className="w-full">
                            <Text as="div" size="3" weight="bold">Quick start {index + 1}</Text>
                            <Text as="div" size="1" weight={"light"} className="text-neutral-500">{new Date().toDateString()}</Text>
                        </Box>
                    </Link>
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