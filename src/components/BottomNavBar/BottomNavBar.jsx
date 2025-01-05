import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoFolderOpen } from "react-icons/io5";
import { Box } from "@radix-ui/themes";
import GradientBox from "../GradientBox";
import TabNav from "../TabNav";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";

// Enum for nav bar states
const NavBarState = Object.freeze({
    NOCHANGE: "nochange",
    VISIBLE: "visible",
    ANIMATING_OUT: "animating-out",
    ANIMATING_IN: "animating-in",
    HIDDEN: "hidden",
});

const animateDuration = 500;

const BottomNavBar = ({
    tabs = [
        {
            path: "/folders",
            icon: IoFolderOpen,
            title: "",
        },
        {
            path: "/",
            icon: FaHome,
            title: "",
        },
        {
            path: "/todo",
            icon: FaTasks,
            title: "",
        },
    ],
    ...props
}) => {
    const location = useLocation();
    const [navBarState, setNavBarState] = useState(NavBarState.NOCHANGE);

    const shouldHide = () => {
        return !tabs.some((tab) => location.pathname === tab.path || location.pathname.startsWith(`${tab.path}/`));
    };


    useEffect(() => {
        if (navBarState === NavBarState.ANIMATING_OUT) {
            const timeout = setTimeout(
                () => setNavBarState(NavBarState.HIDDEN),
                animateDuration - 50 //cut out the last part of the animation to prevent a flicker
            );
            return () => clearTimeout(timeout);
        } else if (navBarState === NavBarState.ANIMATING_IN) {
            const timeout = setTimeout(
                () => setNavBarState(NavBarState.VISIBLE),
                animateDuration - 50
            );
            return () => clearTimeout(timeout);
        }
    }, [navBarState]);

    useEffect(() => {
        if (shouldHide()) {
            if (
                navBarState === NavBarState.HIDDEN ||
                navBarState === NavBarState.ANIMATING_OUT
            )
                return;
            setNavBarState(NavBarState.ANIMATING_OUT);
        } else {
            if (
                navBarState === NavBarState.VISIBLE ||
                navBarState === NavBarState.ANIMATING_IN
            )
                return;
            setNavBarState(NavBarState.ANIMATING_IN);
        }
    }, [location.pathname]);

    return (
        <>
            {navBarState === NavBarState.HIDDEN ? null : (
                <>
                    <Box width={"100%"} height={"4rem"}></Box> {/* Spacer */}
                    <GradientBox
                        width={"100%"}
                        height={"4rem"}
                        position={"fixed"}
                        bottom={"0"}
                        className={`z-[5] duration-${animateDuration} ${navBarState === NavBarState.ANIMATING_OUT
                            ? "animate-out fade-out slide-out-to-bottom-full"
                            : navBarState === NavBarState.ANIMATING_IN
                                ? "animate-in fade-in slide-in-from-bottom-full"
                                : ""
                            }`}
                        direction="to-t"
                        {...props}
                    >
                        <TabNav tabs={tabs} />
                    </GradientBox>
                </>
            )}
        </>
    );
};

export default BottomNavBar;
