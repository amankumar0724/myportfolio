import React, { useEffect, useState } from 'react'
import { FiMenu,FiX, } from "react-icons/fi";
import {FaGithub,FaLinkedin, FaInstagram} from "react-icons/fa"
function Navbar() {
  const [openHamburger,setOpenHamberger] = useState(false);
  const [activeMenuOption,setActiveMenuOption] = useState("");
  const [isScrolling,setIsScrolling] = useState(false);
  const menu = [
    {id: 'about',label:'About'},
    {id: 'skills',label:'Skills'},
    {id: 'experience',label:'Experience'},
    {id: 'projects',label:'Projects'},
    {id: 'education',label:'Education'},
    {id: 'contact',label:'Contact'},
  ]
  const handleMenuOption = (item_id) => {
    setActiveMenuOption(item_id)
    setOpenHamberger(false)

    const section = document.getElementById(item_id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    }

    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[])
  
  
  return (
    <nav className={`fixed w-full top-0 z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[12vw] 
    ${isScrolling ? 'bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className='text-white py-4 flex justify-between items-center'>
        {/* logo */}
        <div className='text-lg font-semibold cursor-pointer' >
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Abhishek</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Kumar</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>
        {/* menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menu.map((item) => {
            return <li className={`cursor-pointer hover:text-[#8245ec] 
              ${activeMenuOption === item.id ? 'text-[#8245ec]' : ''}`} 
              key={item.id}>
                <button onClick={() => handleMenuOption(item.id)}>
                  {item.label}
                </button>
              </li>
          })}
        </ul>
        {/* social contacts */}
        <div className='hidden md:flex space-x-4' >
          <a href="https://github.com/abhi5h6k/"
            target='_blank'
            rel='noopener noreferrer'
            label='Github'
            className={`text-gray-300 cursor-pointer hover:text-[#8245ec] 
              ${activeMenuOption === 'Github' ? 'text-[#8245ec]' : ''}`}
          >
            <FaGithub size={24} onClick={() => handleMenuOption('Github')}/>
          </a>
          <a href="https://www.linkedin.com/in/abhi180703/"
            target='_blank'
            rel='noopener noreferrer'
            label='LinkedIn'
            className={`text-gray-300 cursor-pointer hover:text-[#8245ec] 
              ${activeMenuOption === 'LinkedIn' ? 'text-[#8245ec]' : ''}`}
          >
            <FaLinkedin size={24} onClick={() => handleMenuOption('LinkedIn')}/>
          </a>

        </div>
        {/* menu for small devices */}
        <div className='md:hidden'>
          {
            openHamburger ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer' 
              onClick={() => setOpenHamberger(false)}/>
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setOpenHamberger(true)}/>
            )
          }
        </div>  
      </div>
        
      {/*menu items for small devices*/}
      {openHamburger && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] rounded-lg shadow-lg bg-opacity-50 backdrop-filter backdrop-blur-lg z-50  md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menu.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] 
                  ${activeMenuOption === item.id ? "text-[#8245ec]" : ""}`}
              >
                <button onClick={() => handleMenuOption(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
                <a href="https://github.com/abhi5h6k/"
                target='_blank'
                rel='noopener noreferrer'
                label='Github'
                className={`text-gray-300 cursor-pointer hover:text-[#8245ec] 
                  ${activeMenuOption === 'Github' ? 'text-[#8245ec]' : ''}`}
              >
                <FaGithub size={24} onClick={() => handleMenuOption('Github')}/>
              </a>
              <a href="https://www.linkedin.com/in/abhi180703/"
                target='_blank'
                rel='noopener noreferrer'
                label='LinkedIn'
                className={`text-gray-300 cursor-pointer hover:text-[#8245ec] 
                  ${activeMenuOption === 'LinkedIn' ? 'text-[#8245ec]' : ''}`}
              >
                <FaLinkedin size={24} onClick={() => handleMenuOption('LinkedIn')}/>
              </a>

              <a href="https://www.instagram.com/aman_k_0724/"
                target='_blank'
                rel='noopener noreferrer'
                label='Instagram'
                className={`text-gray-300 cursor-pointer hover:text-[#8245ec] 
                  ${activeMenuOption === 'Instagram' ? 'text-[#8245ec]' : ''}`}
              >
                <FaInstagram size={24} onClick={() => handleMenuOption('Instagram')}/>
              </a>

            </div>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar