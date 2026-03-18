import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLoadingProvider } from "./context/HomeLoadingContext";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Home";
import Project1 from "./pages/Projects/Project1";
import Askfolio from "./pages/Projects/askfolio";
import Forge from "./pages/Projects/forge";
import Goomer from "./pages/Projects/goomer";
import Rumbazo from "./pages/Projects/rumbazo";
import Mosaic from "./pages/Projects/mosaic";
import Brewly from "./pages/Projects/brewly";
import Trinio from "./pages/Projects/trinio";
import Latitud from "./pages/Projects/latitud";
import Genial from "./pages/Projects/genial";
import Goodboy from "./pages/Projects/goodboy";
import Pomarola from "./pages/Projects/pomarola";
import ProjectPage from "./pages/Projects/ProjectPage";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <HomeLoadingProvider>
                <div className='App'>
                    <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />

                    <Route
                        path='/askfolio'
                        element={<Askfolio />}
                    />

                    <Route
                        path='/forge'
                        element={<Forge />}
                    />
                    <Route
                        path='/goomer'
                        element={<Goomer />}
                    />
                    <Route
                        path='/rumbazo'
                        element={<Rumbazo />}
                    />
                    <Route
                        path='/mosaic'
                        element={<Mosaic />}
                    />
                    <Route
                        path='/brewly'
                        element={<Brewly />}
                    />
                    <Route
                        path='/trinio'
                        element={<Trinio />}
                    />
                    <Route
                        path='/projects'
                        element={<ProjectPage />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/latitud'
                        element={<Latitud />}
                    />
                    <Route
                        path='/genial'
                        element={<Genial />}
                    />
                    <Route
                        path='/goodboy'
                        element={<Goodboy />}
                    />
                    <Route
                        path='/pomarola'
                        element={<Pomarola />}
                    />
                </Routes>
                <Footer />
                </div>
            </HomeLoadingProvider>
        </Router>
    );
}

export default App;
