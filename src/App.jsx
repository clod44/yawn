import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import Loading from "./components/Loading";
import lazyImportWithFallback from "./components/LazyImportWithFallback";

const Home = lazyImportWithFallback(() => import("./pages/Home"));
const Folders = lazyImportWithFallback(() => import("./pages/Folders"));
const ToDo = lazyImportWithFallback(() => import("./pages/ToDo"));
const Note = lazyImportWithFallback(() => import("./pages/Note"));
const NotFound = lazyImportWithFallback(() => import("./pages/NotFound"));

import TopBar from "./components/TopBar";
import BottomNavBar from "./components/BottomNavBar";

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
                        <Route index
                            element={
                                <Suspense
                                    key={"home"}
                                    fallback={<Loading />}
                                >
                                    <Home />
                                </Suspense>
                            } />
                        <Route path="/folders" element={
                            <Suspense
                                key={"folders"}
                                fallback={<Loading />}
                            >
                                <Folders />
                            </Suspense>
                        } />
                        <Route path="/todo" element={
                            <Suspense
                                key={"todo"}
                                fallback={<Loading />}
                            >
                                <ToDo />
                            </Suspense>
                        } />
                        <Route path="/note" element={
                            <Suspense
                                key={"note"}
                                fallback={<Loading />}
                            >
                                <Note />
                            </Suspense>
                        } />
                        <Route path="/*" element={
                            <Suspense
                                key={"not-found"}
                                fallback={<Loading />}
                            >
                                <NotFound />
                            </Suspense>
                        } />
                    </Routes>
                    <BottomNavBar />
                </GradientBox>

            </Router >
        </>
    )
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default App
