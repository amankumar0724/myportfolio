import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { projectsData } from '../../utils/constants.js';
import { FaRegImage } from "react-icons/fa6";
import PreviewModal from '../../utils/PreviewModal.jsx';

function Projects() {
  const gradClasses = [
    'bg-gradient-to-b from-[#1e3a8a] via-[#312e81] to-[#1e1b4b]',
    'bg-gradient-to-b from-slate-800 via-[#af7ef2] to-slate-900',
    'bg-gradient-to-b from-[#3a0ca3] via-[#7209b7] to-[#4361ee]',
    'bg-gradient-to-b from-[#111827] via-[#4f46e5] to-[#1f2937]',
    'bg-gradient-to-b from-[#0f172a] via-[#334155] to-[#1e293b]'
  ];

  const [clickedProject, setClickedProject] = useState(null);

  const handlePreview = (project) => {
    setClickedProject(project);
  };

  const closePreview = () => {
    setClickedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-8">
        <h2 className="text-white font-bold text-3xl sm:text-4xl">PROJECTS</h2>
        <div className="w-40 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          "If you're not embarrassed by the first version of your product, you've launched too late."
        </p>
        <p className="text-gray-400 mt-4 text-xl font-bold"> — Reid Hoffman</p>
      </div>

      {/* Desktop swiper */}
      <div className="hidden lg:block flex justify-center">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards]}
          className="lg:w-[40vw] lg:h-[35vw] mySwiper"
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide
              key={idx}
              className={`card-border-animation rounded-[20px] p-6 flex flex-col justify-between text-white shadow-lg ${gradClasses[idx % gradClasses.length]}`}
            >
              <div className="flex flex-col md:flex-row items-start justify-between gap-3 md:gap-0">
                <div className="flex flex-col items-start gap-3">
                  {project.image === "" ? (
                    <FaRegImage className="w-16 h-16 object-contain rounded-[10px]" />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-16 h-16 object-contain rounded-[10px]"
                    />
                  )}
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                {project.type === "Website" ? (
                  <div className="text-[#6e5406] bg-[#eed381] rounded-lg px-2 py-1 self-end md:self-auto">
                    <span>Website</span>
                  </div>
                ) : project.type === "Android" ? (
                  <div className="text-[#065e49] bg-[#a0f0d5] rounded-lg px-2 py-1 self-end md:self-auto">
                    <span>Android</span>
                  </div>
                ) : (
                  <div className="text-[#5e0606] bg-[#f5a0a0] rounded-lg px-2 py-1 self-end md:self-auto">
                    <span>Other</span>
                  </div>
                )
                }
              </div>




              <p className="text-sm text-gray-300 mt-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#8245ec] text-xs px-2 py-1 rounded-full font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-5 mt-6 justify-center">
                <button
                  className="px-4 py-2 rounded-[10px] font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-2 transform hover:scale-105"
                  onClick={() => handlePreview(project)}
                >
                  Preview
                </button>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-[10px] font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-2 transform hover:scale-105">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-[10px] font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-2 transform hover:scale-105">
                  Github Link
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile/Tablet swiper */}
      <div className="block lg:hidden flex justify-center">
        <Swiper
          effect="flip"
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="w-full max-w-[90vw] h-[100%]"
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide
              key={idx}
              className={`card-border-animation rounded-[20px] p-6 flex flex-col justify-between text-white shadow-lg ${gradClasses[idx % gradClasses.length]}`}
            >
              <div className="flex flex-col items-center gap-3">
                {project.image === "" ? (
                  <FaRegImage className="w-16 h-16 object-contain rounded-[10px]" />
                ) : (
                  <img src={project.image} alt={project.title} className="w-16 h-16 object-contain rounded-[10px]" />
                )}
                <h3 className="text-xl font-bold text-center">{project.title}</h3>
              </div>

              <p className="text-sm text-gray-300 mt-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#8245ec] text-xs px-2 py-1 rounded-full font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-5 mt-6 justify-center">
                <button
                  className="px-4 py-2 rounded-[10px] font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-2 transform hover:scale-105"
                  onClick={() => handlePreview(project)}
                >
                  Preview
                </button>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-[10px] font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-2 transform hover:scale-105">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-[10px] font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-2 transform hover:scale-105">
                  Github Link
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Preview Modal Component */}
      <PreviewModal
        project_type={clickedProject?.type || ""}
        isOpen={!!clickedProject}
        images={clickedProject?.images || []}
        onClose={closePreview}
      />
    </section>
  );
}

export default Projects;
