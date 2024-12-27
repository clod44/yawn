import { Box } from "@radix-ui/themes";
import { useSettings } from "../../context/SettingsContext";
import colors from 'tailwindcss/colors';

const GradientBox = ({
    darkFrom = "green-500",
    darkTo = "red-500",
    darkVia = "green-500",
    lightFrom = "red-500",
    lightTo = "green-500",
    lightVia = "red-500",
    angle = 0,
    children,
    className,
    ...props
}) => {
    const { theme } = useSettings();

    const getColor = (colorWithShade) => {
        const [color, shade] = colorWithShade.includes('-') ? colorWithShade.split('-') : [colorWithShade, '500'];
        return colors[color]?.[shade] || colorWithShade;
    };

    const gradientStyle = theme === "dark"
        ? `linear-gradient(${angle}deg, ${getColor(darkFrom)}, ${getColor(darkVia)}, ${getColor(darkTo)})`
        : `linear-gradient(${angle}deg, ${getColor(lightFrom)}, ${getColor(lightVia)}, ${getColor(lightTo)})`;

    return (
        <Box
            className={className}
            style={{
                background: gradientStyle,
            }}
            {...props}
        >
            {children}
        </Box>
    );
};

export default GradientBox;
