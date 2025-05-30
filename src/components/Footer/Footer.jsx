import React from 'react'
import { FaTwitter,FaLinkedin,FaInstagram,FaGithub } from 'react-icons/fa';

function Footer() {

  const handleClick = (item_id) => {
    const section = document.getElementById(item_id);
    if(section) {
      section.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <footer
    // className='py-24 pb-24 px-4 sm:px-[4vw] md:px-[6vw] lg:px-[2vw] font-sans bg-skill-grad flex flex-col items-center justify-center'
    className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'
    >
      <div className='text-center mx-auto container'>
        
        <nav className='flex flex-wrap justify-center mt-4 space-x-4 sm: space-x-6'>
          {[
            {id:"about",name: "About"},
            {id:"skills",name: "Skills"},
            {id:"experience",name: "Experience"},
            {id:"projects",name: "Projects"},
            {id:"education",name: "Education"},
            {id:"contact",name: "Contact"},
          ].map((item,index) => (
            <button
            key={index}
            className='text-white hover:text-[#8245ec] text-sm sm:text-base my-1'
            onClick={() => handleClick(item.id)}
            >
              {item.name}
            </button>
          ))
          }
        </nav>
        <div className='flex flex-wrap justify-center mt-6 space-x-4'>
          {[
            {icon:<FaTwitter/>,link:"https://x.com/amankumar0724"},
            {icon:<FaLinkedin/>,link:"https://www.linkedin.com/in/aman-kumar-902aa824b/"},
            {icon:<FaGithub/>,link:"https://github.com/amankumar0724/"},
            {icon:<FaInstagram/>,link:"https://www.instagram.com/aman_k_0724/"},
          ].map((item,index) => (
            <a 
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-[#8245ec]'
            >
              {item.icon}
            </a>
          ))}
        </div>
        <h3 className='mt-6 font-base text-gray-600 text-lg'>
          © 2025 Aman. All rights reserved.
        </h3>
      </div>


    </footer>
  )
}

export default Footer