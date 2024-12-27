import { Grid, Button } from "@radix-ui/themes";
import { useLocation, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const TabNav = ({
    tabs = [
        {
            path: "/",
            icon: FaHome,
            title: "Home",
            activeVariant: "classic",
            passiveVariant: "ghost",
        }
    ],
    ...props
}) => {
    const location = useLocation();
    return (
        <Grid columns={`${tabs.length}`} gap="3" rows="1" width="auto" p={"3"}>
            {tabs.map((tab, index) => (
                <Link
                    key={index}
                    to={tab.path}
                    style={{ textDecoration: "none" }}
                >
                    <Button
                        className="w-full h-full py-2 cursor-pointer"
                        variant={
                            location.pathname === tab.path
                                ? (tab.activeVariant ?? "classic")
                                : (tab.passiveVariant ?? "ghost")
                        }
                        highContrast={location.pathname === tab.path}
                    >
                        {tab.icon && <tab.icon size={20} />}
                        {tab.title}
                    </Button>
                </Link>
            ))}
        </Grid>
    );
};

export default TabNav;
