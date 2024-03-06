import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes, Route}  from "react-router-dom"
import Header from './Component/Header'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import ScrollToTop from './Component/ScrollToTop.jsx'
function App() {

  return (
   <>
   <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />} />
    </Routes>
   </Router>
   
   </>
  )
}

export default App
