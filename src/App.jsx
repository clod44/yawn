import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from "./pages/NotFound";

import Folders from "./pages/Folders";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";
import Note from "./pages/Note";

import TopBar from "./components/TopBar";

import GradientBox from './components/GradientBox';

function App() {
    return (
        <>
            <Router>
                <GradientBox
                    width={"100%"}
                    height={"100%"}
                    position={"fixed"}
                    top={"0"}
                    darkFrom="neutral-900"
                    darkTo="neutral-900"
                    darkVia="neutral-800"
                    lightFrom="white"
                    lightTo="transparent"
                    lightVia="white"
                >
                    <TopBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/folders" element={<Folders />} />
                        <Route path="/todo" element={<ToDo />} />
                        <Route path="/note" element={<Note />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </GradientBox>

            </Router>
        </>
    )
}

export default App
