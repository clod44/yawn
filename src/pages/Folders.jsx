import Fab from "../components/Fab";
import BottomNavBar from "../components/BottomNavBar";
import { LuFolderPlus } from "react-icons/lu";
import FoldersList from "../components/FoldersList";

function Folders() {
    return (
        <>
            <FoldersList />
            <Fab icon={<LuFolderPlus className="size-6" />} callback={() => { }} />
        </>
    );
}

export default Folders