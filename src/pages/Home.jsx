import NotesList from "../components/NotesList";
import Fab from "../components/Fab";
import { FaRegNoteSticky } from "react-icons/fa6";

function Home() {
    return (
        <>
            <NotesList />
            <Fab icon={<FaRegNoteSticky className="size-6" />} callback={() => { }} />
        </>
    );
}

export default Home;