import React from 'react'
import { skillsData } from '../../utils/constants.js'
import Tilt from 'react-parallax-tilt'
import Marquee from '../../utils/Marquee.jsx'

function Skills() {
  return (
    <section
    id='skills'
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[14vw] bg-skill-grad font-sans custom-clip-path-a'
    >
      <div className='text-center mb-8'>
        <h2 className='text-white text-bold text-3xl sm:text-4xl'>SKILLS</h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          "Everybody should learn to program a computer because it teaches you how to think. "
        </p>
        <p className='text-gray-400 mt-4 text-xl font-bold '>{'\u00A0'}— Steve Jobs</p>
      </div>

      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {
          skillsData.map((item) => (
              <div 
              key={item.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
              >
                <h3 className='text-gray-400 text-center text-2xl sm:text-3xl mb-4 font-semibold'>
                  {item.title}
                </h3>

                <Tilt
                  key={item.title}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                > 
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-3'>
                  {item.skills.map((skill) => (
                    <div 
                    key={skill.name}
                    className='text-center px-2 py-2 sm:px-2 sm:py-2 rounded-3xl border-gray-700 bg-transparent border-2 flex item-center justify-center space-x-2'
                    >
                      <div className='flex flex-row space-x-3 justify-center items-center '>
                        <img src={skill.logo} alt={`${skill.name} logo`} className='w-6 h-6 sm:w-8 sm:h-8' />
                        <span className='text-sm sm:text-sm text-gray-300 '>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
                </Tilt>

              </div>
              
            )
          )
        }
      </div>

      {/* <Marquee/> */}
    <div className="overflow-hidden z-50 backgroundImage py-4
    backdrop-blur-4xl bg-opacity-1 shadow-2xl
    ">
      {/* <div className="inline-block animate-marquee"> */}
      <div className='font-semibold text-9xl flex w-max gap-5 animate-marquee'>
        {[...Array(2)].map((_,i) => (
          <div key={i} className='flex gap-10'>
            {skillsData.flatMap((item) => 
            item.skills.map((skill,index) => (
              <div 
                key={skill.name+index}
                className='flex items-center mx-6 space-x-2'
              >
                <img src={skill.logo} alt={`${skill.name} logo`} className='w-6 h-6 md:w-8 md:h-8 object-contain' />
                <span className="text-white text-sm md:text-base font-medium">
                  {skill.name}
                </span>
              </div>
            ))
          )}
          </div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default Skills