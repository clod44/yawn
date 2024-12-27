import { Flex, Button, TextField } from "@radix-ui/themes";
import { FaSearch } from "react-icons/fa";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { useSettings } from "../../../context/SettingsContext";
import GradientBox from "../../GradientBox";
import BarDropdown from "./BarDropdown";

const HomeBar = () => {
    const {
        listViewType,
        setListViewType,
    } = useSettings();

    const handleListViewToggle = () => {
        setListViewType(listViewType == "list" ? "grid" : "list");
    }

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
                    onClick={handleListViewToggle}
                >
                    {listViewType == "list" ? <CiGrid41 size={24} /> : <CiGrid2H size={24} />}
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