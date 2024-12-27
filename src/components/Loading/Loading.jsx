import { Flex, Spinner } from "@radix-ui/themes";

const Loading = ({
    ...props
}) => {
    return (
        <Flex justify={"center"} align={"center"} height={"100%"} gap="3" direction={"column"} {...props}>
            <Spinner size={"5"} />
        </Flex>
    );
};

export default Loading;