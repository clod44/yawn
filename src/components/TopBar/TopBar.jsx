import { useLocation } from "react-router-dom";
import { HomeBar, GenericBar } from "./Bars";
import { Box } from "@radix-ui/themes";

import { IoFolderOpen } from "react-icons/io5";

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
                            return <GenericBar
                                title="Folders"
                                icon={<IoFolderOpen className="size-6 text-gray-500" />}
                            />;
                        default:
                            return <GenericBar />;
                    }
                })()
            }
        </>
    );
};

export default TopBar;