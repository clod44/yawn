import { Button } from "@radix-ui/themes";


const Fab = ({
    icon = "+",
    callback = () => { },
    className = "",
    ...props
}) => {
    return (
        <>
            <Button
                onClick={callback}
                highContrast
                size={"3"}
                variant="classic"
                radius="full"
                {...props}
                className={`fixed bottom-28 right-7 size-16 d-flex justify-center items-center rounded-full z-40 shadow-lg cursor-pointer ${className}`}
            >
                {icon}
            </Button>
        </>
    )
};

export default Fab