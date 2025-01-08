import Fab from "../components/Fab";
import { FaPen } from "react-icons/fa";


function ToDo() {
    return (
        <div>
            <Fab icon={<FaPen className="size-6" />} callback={() => { }} />
        </div>
    )
}

export default ToDo