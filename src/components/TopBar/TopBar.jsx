import { useLocation } from "react-router-dom";
import { HomeBar, NoteBar, GenericBar } from "./Bars";
import { Box } from "@radix-ui/themes";
const TopBar = () => {
    const { pathname } = useLocation();

    return (
        <>
            {
                (() => {
                    switch (pathname) {
                        case "/":
                            return <HomeBar />;
                        case "/folders":
                            return <GenericBar />;
                        default:
                            return <GenericBar />;
                    }
                })()
            }
        </>
    );
};

export default TopBar;