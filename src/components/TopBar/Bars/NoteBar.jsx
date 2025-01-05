import { Flex, TextField } from "@radix-ui/themes";
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
            width={"100%"}
            position={"fixed"}
            top={"0"}
            height={"4rem"}
            className="z-[50]"
        >
            <Flex width={"100%"} height={"100%"} gap="3" p={"4"} align={"center"} justify={"between"}>
                <Flex gap="3" align={"center"} className="flex-grow">
                    <Link
                        to="/"
                    >
                        <IoIosArrowBack size={24} />
                    </Link>
                    <TextField.Root
                        placeholder="Title"
                        variant="classic"
                        className="flex-grow"
                        size={"3"}
                    >
                    </TextField.Root>
                </Flex>
                <NoteBarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default NoteBar