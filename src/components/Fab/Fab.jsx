import { ActionIcon } from '@mantine/core';
import { useCallback } from "react";

const Fab = ({
    icon = "+",
    callback = () => { },
    ...props
}) => {
    const memoizedCallback = useCallback(callback, [callback]);

    return (
        <ActionIcon
            onClick={memoizedCallback}
            variant="default"
            color="gray"
            size={60}
            radius="xl"
            className="fixed bottom-28 right-7 z-50 animate-in slide-in-from-right-full fade-in"
            {...props}
        >
            {icon}
        </ActionIcon>
    );
};

export default Fab;
