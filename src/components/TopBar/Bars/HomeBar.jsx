import { Flex, IconButton, TextField, Text } from "@radix-ui/themes";
import { FaSearch } from "react-icons/fa";
import { GiCardboardBox, GiCardboardBoxClosed } from "react-icons/gi";
import { useMisc } from "../../../context/MiscContext";
import GradientBox from "../../GradientBox";
import BarDropdown from "./BarDropdown";

const HomeBar = () => {
    const { toggleShowArchiveNotes, setToggleShowArchiveNotes } = useMisc();

    return (
        <GradientBox
            width={"100%"}
            position={"fixed"}
            top={"0"}
            height={"4rem"}
            className="z-[50]"
            darkFrom="neutral-900"
            darkTo="transparent"
            darkVia="neutral-900"
            lightFrom="white"
            lightTo="transparent"
            lightVia="white"
            angle={180}
        >
            <Flex width={"100%"} height={"100%"} gap="3" p={"4"} align={"center"} justify={"between"}>
                <IconButton
                    variant="ghost"
                    onClick={() => setToggleShowArchiveNotes(!toggleShowArchiveNotes)}
                    style={{
                        background: toggleShowArchiveNotes ? "radial-gradient(circle, rgba(255,255,255, .2) 0%, rgba(255,255,255, 0) 70%)" : "",
                    }}
                >
                    {toggleShowArchiveNotes ?
                        <GiCardboardBox
                            size={24}
                            className="animate-in zoom-in"

                        /> :
                        <GiCardboardBoxClosed size={24} />
                    }
                </IconButton>

                <TextField.Root
                    placeholder="Search your notes"
                    variant="classic"
                >
                    <TextField.Slot>
                        <FaSearch />
                    </TextField.Slot>
                </TextField.Root>
                <BarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default HomeBar