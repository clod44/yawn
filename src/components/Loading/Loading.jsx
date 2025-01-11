import { Flex, Loader } from "@mantine/core";

const Loading = ({
    ...props
}) => {
    return (
        <Flex
            justify="center"
            align="center"
            w={"100%"}
            h={"100%"}
        >
            <Loader color="gray" size="xs" type="bars" />
        </Flex>
    );
};

export default Loading;