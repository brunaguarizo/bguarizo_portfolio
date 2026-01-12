import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Home";
import Project1 from "./pages/Projects/Project1";
import Forge from "./pages/Projects/forge";
import ProjectPage from "./pages/Projects/ProjectPage";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className='App'>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/project1'
                        element={<Project1 />}
                    />
                    <Route
                        path='/project2'
                        element={<Forge />}
                    />
                    <Route
                        path='/forge'
                        element={<Forge />}
                    />
                    <Route
                        path='/projects'
                        element={<ProjectPage />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
