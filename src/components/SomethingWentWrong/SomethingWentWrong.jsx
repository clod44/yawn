import { Flex } from "@radix-ui/themes";
import { FaHeartBroken } from "react-icons/fa";

const SomethingWentWrong = ({
    ...props
}) => {
    return (
        <Flex justify={"center"} align={"center"} height={"100%"} gap="3" direction={"column"} {...props}>
            <FaHeartBroken className="size-6 animate-pulse" />
        </Flex>
    );
};

export default SomethingWentWrong;