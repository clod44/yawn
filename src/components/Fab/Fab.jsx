import { Button } from "@radix-ui/themes";
import { useCallback } from "react";

const Fab = ({
    icon = "+",
    callback = () => { },
    className = "",
    ...props
}) => {
    const memoizedCallback = useCallback(callback, [callback]);

    return (
        <Button
            onClick={memoizedCallback}
            highContrast
            size={"3"}
            variant="classic"
            radius="full"
            {...props}
            className={`fixed bottom-28 right-7 size-16 d-flex justify-center items-center rounded-full z-40 shadow-lg cursor-pointer animate-in slide-in-from-right-96 fade-in-0 duration-500 ${className}`}
        >
            {icon}
        </Button>
    );
};

export default Fab;
