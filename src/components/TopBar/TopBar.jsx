import { useLocation } from "react-router-dom";
import { HomeBar, GenericBar, NoteBar } from "./Bars";

import { IoFolderOpen } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";

const TopBar = () => {
    const { pathname } = useLocation();
    /*
        Order of these bars is important!
        it should be from most complicated to least
        eg if you put "/" at the top, it will always choose it first because "/something" starts with "/"
        
        1- "/something/specific"
        2- "/something"
        3- "/another"
        4- "/"
    */
    const barConfig = [
        { path: "/folders", component: <GenericBar title="Folders" icon={<IoFolderOpen className="size-6 text-gray-500" />} /> },
        { path: "/todo", component: <GenericBar title="To Do" icon={<FaTasks className="size-6 text-gray-500" />} /> },
        { path: "/note", component: <NoteBar /> },
        { path: "/", component: <HomeBar /> },
    ];

    const bar = barConfig.find(({ path }) => pathname.startsWith(path));

    return bar ? bar.component : <GenericBar />;
};


export default TopBar;