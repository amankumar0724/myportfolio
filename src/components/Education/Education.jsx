import React from 'react'
import { education } from '../../utils/constants.js'

function Education() {
  return (
    <section
        id='education'
        className='py-24 pb-24 px-4 sm:px-[4vw] md:px-[6vw] lg:px-[2vw] font-sans bg-skill-grad custom-clip-path-c'
        >
          <div className='text-center mb-16'>
            <h2 className='text-white text-bold text-3xl sm:text-4xl'>EDUCATION</h2>
            <div className='w-40 h-1 bg-[#8245ec] mx-auto mt-2'></div>
            <p className='text-gray-400 mt-4 text-lg font-semibold'>
              "Education is not the learning of facts, but the training of the mind to think."
            </p>
            <p className='text-gray-400 mt-4 text-xl font-bold '>{'\u00A0'}— Albert Einstein</p>
          </div>
    
    
          {/* creating timeline */}
          <div className='relative'>
          <div className='w-1 h-full bg-[#ffffff] absolute left-0 sm:left-1/2 transform -translate-x-1/2 sm:-translate-x-0'></div> {/*timeline*/}
            {/*education*/}
            {education.map((exp,index) => (
              <div key={exp.id} className={`${index%2 !== 0 ? 'sm:justify-start': 'sm:justify-end'} text-gray-400 flex flex-col sm:flex-row items-center mb-16`}>
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-full absolute left-0 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec]
                flex justify center items-center z-10'>  
                  <img src={exp.logo} alt={`${exp.school} logo`} className='w-full h-full object-cover rounded-full'/>
                </div>
                <div className={`w-full sm:max-w-md p-4 sm:p-8 
                rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8 `}
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={exp.school}
                        className="w-full h-full object-cover border border-[#8245ec] border-[1px] rounded-2xl"
                      />
                    </div>
    
                    <div className="flex flex-col justify-between">
                      <div>
                        <h4 className="text-md sm:text-sm text-gray-300">
                          {exp.school}
                        </h4>
                      </div>
                      <div className='flex flex-row justify-between'>
                        <p className="text-sm text-gray-500 mt-2 font-bold">{exp.grade}</p>
                        <p className="text-sm text-gray-500 mt-2">{exp.duration}</p>
                      </div>
                    </div>
                  </div>
    
                <p className="mt-4 text-gray-400">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Education