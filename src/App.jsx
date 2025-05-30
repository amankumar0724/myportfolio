import React from 'react'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'
import Education from './components/Education/Education.jsx'
import Experience from './components/Experience/Experience.jsx'
import PulseAnimation from './utils/PulseAnimation.jsx'

function App() {
  return (
    <div className="bg-[#050414]">
      
      <PulseAnimation size={{height:"50%",width:"30%"}} position={{top:"5%", left:"20%"}}/>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      
      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
