import NotesList from "../components/NotesList";
import BottomNavBar from "../components/BottomNavBar";
import Fab from "../components/Fab";
import { FaPen } from "react-icons/fa";

function Home() {
    return (
        <>
            <NotesList />
            <Fab icon={<FaPen className="size-4" />} callback={() => { }} />
            <BottomNavBar />
        </>
    );
}

export default Home;