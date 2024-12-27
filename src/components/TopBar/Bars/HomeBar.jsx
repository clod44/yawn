import { Flex, Button, TextField } from "@radix-ui/themes";
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
                <Button
                    variant="ghost"
                    onClick={() => setToggleShowArchiveNotes(!toggleShowArchiveNotes)}
                >
                    {toggleShowArchiveNotes ? <GiCardboardBox size={24} className="animate-in zoom-in" /> : <GiCardboardBoxClosed size={24} />}
                </Button>

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