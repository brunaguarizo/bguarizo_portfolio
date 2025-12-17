import React from 'react'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

