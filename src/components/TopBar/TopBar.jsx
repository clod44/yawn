import { useLocation } from "react-router-dom";
import { HomeBar, GenericBar } from "./Bars";

import { IoFolderOpen } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";

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
                        case "/todo":
                            return <GenericBar
                                title="To Do"
                                icon={<FaTasks className="size-6 text-gray-500" />}
                            />;
                        case "/note":
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