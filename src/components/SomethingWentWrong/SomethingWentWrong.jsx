import { Flex } from "@mantine/core";
import { FaHeartBroken } from "react-icons/fa";

const SomethingWentWrong = ({
    ...props
}) => {
    return (
        <Flex
            w={"100%"}
            h={"100%"}
            justify="center"
            align="center"
            {...props}
        >
            <FaHeartBroken className="size-6 animate-pulse" />
        </Flex>
    );
};

export default SomethingWentWrong;