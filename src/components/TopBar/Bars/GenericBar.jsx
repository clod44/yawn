import { Flex, Text, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import GradientBox from "../../GradientBox";
import { HomeBarDropdown } from "./BarDropdown";


const GenericBar = ({
    icon = null,
    title = "Yawn Notes",
    path = "/",
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

                <Group>
                    {icon}
                    <Text
                        c="dimmed"
                        className=" text-nowrap"
                        component={Link}
                        to={path}
                    >
                        {title}
                    </Text>
                </Group>
                <HomeBarDropdown />
            </Flex>
        </GradientBox>
    )
}

export default GenericBar