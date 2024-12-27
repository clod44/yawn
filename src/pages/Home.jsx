import NotesList from "../components/NotesList";
import Fab from "../components/Fab";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";

function Home() {
    return (
        <>
            <NotesList />
            <Fab icon={<FaRegNoteSticky className="size-6" />} callback={() => { }} />
        </>
    );
}

export default Home;