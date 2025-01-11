import { useMantineTheme } from '@mantine/core';

const GradientBox = ({
    direction = "to bottom",
    children,
    className,
    ...props
}) => {
    const theme = useMantineTheme();
    const isDarkMode = theme.colorScheme === 'dark';

    const gradientFrom = isDarkMode ? theme.colors.dark[7] : theme.white;
    const gradientStyle = `linear-gradient(${direction}, ${gradientFrom}, ${gradientFrom}, transparent)`;


    return (
        <div
            style={{
                background: gradientStyle,
                ...props.style,
            }}
            className={className}
            {...props}
        >
            {children}
        </div>
    );
};

export default GradientBox;
