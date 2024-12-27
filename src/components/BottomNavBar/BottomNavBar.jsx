import { FaHome } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoFolderOpen } from "react-icons/io5";
import { Box } from "@radix-ui/themes";
import GradientBox from "../GradientBox";
import TabNav from "../TabNav";

const BottomNavBar = ({
    ...props
}) => {
    return (
        <>
            <Box width={"100%"} height={"4rem"}></Box>
            <GradientBox
                width={"100%"}
                height={"4rem"}
                position={"fixed"}
                bottom={"0"}
                className="z-[5]"
                darkFrom="neutral-900"
                darkTo="transparent"
                darkVia="neutral-900"
                lightFrom="white"
                lightTo="transparent"
                lightVia="white"
                {...props}
            >
                <TabNav tabs={[
                    {
                        path: "/folders",
                        icon: IoFolderOpen,
                        title: "",
                    },
                    {
                        path: "/",
                        icon: FaHome,
                        title: "",
                    },
                    {
                        path: "/todo",
                        icon: GoGoal,
                        title: "",
                    }
                ]} />
            </GradientBox>
        </>
    );
};

export default BottomNavBar