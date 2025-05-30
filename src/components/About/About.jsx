import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt'
function About() {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 '
    >
      <div className='flex flex-col-reverse md:flex-row items-center justify-evenly '>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl  font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl  font-bold text-white mb-4 leading-tight'>
            Aman Kumar
          </h2>
          <h3 className='text-xl sm:text-2xl md:text-3xl  font-semibold text-[#8245ec] mb-4 leading-tight'>
            <span className='text-white'>
              I am a {'\u00A0'}  
            </span>
            <ReactTypingEffect
              text={[
                ' Android Developer.',
                ' Web Developer.',
                ' Coder.',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a web developer building scalable web applications. Skilled in both front-end and back-end development, I am specialized in the MERN stack to create seamless user experiencing and efficient solutions.
          </p>
          <a href="https://drive.google.com/file/d/1pSAUcf4kx6akOSdA60Y8qY0i2mSMYUsL/view?usp=sharing"
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 mt-5 text-lg rounded-full font-bold transition duration-300 hover:scale-105'
          style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }}
          >
            Download Resume
          </a>
        </div>
        <div className='md:w-1/2 flex justify-center md: justify-end'>
          <Tilt 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[35rem] md:h-[25rem] border-4 border-purple-700 rounded-full shadow-2xl"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            
          >
            <img 
              src="../../src/assets/profile.png" 
              alt="profile pic" 
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
              />
          </Tilt>
        </div>
        
      </div>
    </section>
  )
}

export default About