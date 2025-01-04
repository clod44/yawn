import { Box } from "@radix-ui/themes";

const GradientBox = ({
    from = "dark:from-neutral-800 from-white", // don't forget "from-" prefix
    to = "to-transparent", // don't forget "to-" prefix
    direction = "to-b", // (e.g., "to-r", "to-b")
    children,
    className,
    ...props
}) => {
    //avoid tailwindcss purges
    const gradientDirections = {
        "to-r": "bg-gradient-to-r",
        "to-b": "bg-gradient-to-b",
        "to-l": "bg-gradient-to-l",
        "to-t": "bg-gradient-to-t",
        "to-br": "bg-gradient-to-br",
        "to-bl": "bg-gradient-to-bl",
        "to-tl": "bg-gradient-to-tl",
        "to-tr": "bg-gradient-to-tr",
    };

    const gradientDirectionClass = gradientDirections[direction] || gradientDirections["to-b"];

    return (
        <Box
            className={`${gradientDirectionClass} ${from} ${to} ${className}`}
            {...props}
        >
            {children}
        </Box>
    );
};

export default GradientBox;
