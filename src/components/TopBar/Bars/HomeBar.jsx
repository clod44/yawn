
import { Flex, ActionIcon, Input } from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { GiCardboardBox, GiCardboardBoxClosed } from "react-icons/gi";
import { useMisc } from "../../../context/MiscContext";
import GradientBox from "../../GradientBox";
import { HomeBarDropdown } from "./BarDropdown";

const HomeBar = () => {
    const { toggleShowArchiveNotes, setToggleShowArchiveNotes } = useMisc();

    return (
        <GradientBox
            className="w-full fixed top-0 h-16 z-[50]"
        >
            <Flex
                p={"md"}
                gap="md"
                align="center"
                direction="row"
                wrap="nowrap"
                justify="space-between"
                w={"100%"}
                h={"100%"}
            >
                <ActionIcon
                    variant="subtle"
                    color="gray"
                    onClick={() => setToggleShowArchiveNotes(!toggleShowArchiveNotes)}
                >

                    {toggleShowArchiveNotes ?
                        <GiCardboardBox
                            size={24}
                            className="animate-in zoom-in"
                        /> :
                        <GiCardboardBoxClosed size={24} />
                    }
                </ActionIcon>

                <Input placeholder="Search" leftSection={<FaSearch />} />
                <HomeBarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default HomeBar