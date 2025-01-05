import { Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import GradientBox from "../../GradientBox";
import BarDropdown from "./BarDropdown";
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
            className="z-[50] animate-in fade-in duration-300"
        >
            <Flex width={"100%"} height={"100%"} gap="3" p={"4"} align={"center"} justify={"between"}>
                <Flex gap="3" align={"center"}>
                    <Link
                        to="/"
                    >
                        <IoIosArrowBack size={24} />
                    </Link>
                    <Text
                        size={"5"}
                        asChild
                        color="gray"
                        className="font-thin" >

                        {note.title}
                    </Text>
                </Flex>
                <BarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default NoteBar