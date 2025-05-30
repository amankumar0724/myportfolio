import React from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * PreviewModal Component
 * Props:
 *  - isOpen: boolean to show/hide modal
 *  - images: array of image URLs
 *  - onClose: callback when clicking close
 */
export default function PreviewModal({ isOpen, project_type, images = [], onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-[18vw]">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      />

      {/* modal container */}
      <div className="card-border-animation rounded-[20px] relative w-full max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl max-h-[100vh] bg-gradient-to-br from-purple-700 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute text-xl font-bold top-3 right-3 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none z-10"
          aria-label="Close preview"
        >
          ✕
        </button>

        {/* header */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center py-4 px-6">
          Preview Gallery
        </h2>

        {/* swiper slider */}
        <div className="px-4 pb-6">
          <Swiper
            effect="flip"
            grabCursor
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation
            modules={[EffectFlip, Pagination, Navigation]}
          >

            {images.map((src, i) => (
              <SwiperSlide
                key={i}
                className={`w-full ${
                  project_type === "Website"
                    ? "h-48 sm:h-64 md:h-80 lg:h-[24rem]"
                    : "h-auto flex justify-center items-center bg-black"
                }`}
              >
                <img
                  src={src}
                  alt={`Preview ${i + 1}`}
                  className={`${
                    project_type === "Website" 
                      ? "w-full h-full object-fill mx-auto"
                      : "max-w-full max-h-[80vh] object-contain mx-auto"
                  } rounded-lg`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>,
    document.body
  );
}
