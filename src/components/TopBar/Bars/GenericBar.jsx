import { Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import GradientBox from "../../GradientBox";
import BarDropdown from "./BarDropdown";


const GenericBar = ({
    icon = null,
    title = "Yawn Notes",
    path = "/",
    ...props
}) => {

    return (
        <GradientBox
            width={"100%"}
            position={"sticky"}
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
                {icon}
                <Text
                    size={"5"}
                    asChild
                    color="gray"
                    className="font-thin" >
                    <Link
                        to={path}
                        className="cursor-pointer font-thin"
                    >
                        {title}
                    </Link>
                </Text>
                <BarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default GenericBar