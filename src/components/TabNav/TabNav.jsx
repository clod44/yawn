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
            {tabs.map((tab, index) => {
                const active = location.pathname === tab.path;
                return (
                    <Link key={index} to={tab.path} style={{ textDecoration: "none" }}>
                        <Button
                            className={"w-full h-full py-2 cursor-pointer " + (active && "animate-in fade-in-0 slide-in-from-bottom-1")}
                            variant={
                                active
                                    ? tab.activeVariant ?? "classic"
                                    : tab.passiveVariant ?? "ghost"
                            }
                            highContrast={active}
                        >
                            {tab.icon && <tab.icon size={20} />}
                            {tab.title}
                        </Button>
                    </Link>
                );
            })}
        </Grid>
    );
};

export default TabNav;
