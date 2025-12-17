import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Home";
import Project1 from "./pages/Projects/Project1";
import ProjectPage from "./pages/Projects/ProjectPage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
    return (
        <Router>
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
                        path='/projects'
                        element={<ProjectPage />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
