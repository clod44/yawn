import { useLocation } from "react-router-dom";
import { HomeBar, GenericBar, NoteBar } from "./Bars";

import { IoFolderOpen } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";


const TopBar = () => {
    const { pathname } = useLocation();

    //list the paths from most specified to least
    const barConfig = [
        { path: "/folders", component: <GenericBar title="Folders" icon={<IoFolderOpen className="size-6 text-gray-500" />} /> },
        { path: "/todo", component: <GenericBar title="To Do" icon={<FaTasks className="size-6 text-gray-500" />} /> },
        { path: "/note", component: <NoteBar /> },
        { path: "/", component: <HomeBar /> },
    ];

    const bar = barConfig.find(({ path }) =>
        pathname === path || pathname.startsWith(`${path}/`)
    );

    return bar ? bar.component : <GenericBar title="Not Found" />;
};

export default TopBar;
