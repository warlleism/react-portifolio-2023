import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import('../view/main/index'))
const Projects = React.lazy(() => import('../view/allProjects/index'))

export default function Rotas() {
    return (
        <Router>
            <Routes>

                <Route path="/"
                    element={
                        <React.Suspense>
                            <Home />
                        </React.Suspense>
                    } />

                <Route path="/projetos"
                    element={
                        <React.Suspense>
                            <Projects />
                        </React.Suspense>
                    } />

            </Routes>
        </Router>
    )
}