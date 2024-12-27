import Fab from "../components/Fab";
import BottomNavBar from "../components/BottomNavBar";
import { LuFolderPlus } from "react-icons/lu";

function Folders() {
    return (
        <>
            <h1>Folders</h1>

            <Fab icon={<LuFolderPlus className="size-6" />} callback={() => { }} />
            <BottomNavBar />
        </>
    );
}

export default Folders