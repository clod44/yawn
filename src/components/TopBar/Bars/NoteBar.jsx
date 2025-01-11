import { Flex, ActionIcon, Input, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import GradientBox from "../../GradientBox";
import { NoteBarDropdown } from "./BarDropdown";
import { IoIosArrowBack } from "react-icons/io";


const NoteBar = ({
    note = {
        title: "My Note",
    },
    ...props
}) => {

    return (
        <GradientBox
            className="w-full fixed top-0 h-16 z-[50]"
        >
            <Flex
                width={"100%"}
                height={"100%"}
                p={"md"}
                gap="md"
                justify="space-between"
                align="center"
                direction="row"
                wrap="nowrap"
            >

                <ActionIcon
                    variant="subtle"
                    color="gray"
                    component={Link}
                    to="/"
                >
                    <IoIosArrowBack />
                </ActionIcon>

                <Input
                    w={"100%"}
                    placeholder="My Note"
                    value={note.title}
                    {...props}
                />
                <NoteBarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default NoteBar