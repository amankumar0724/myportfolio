import React from 'react';
import './Marquee.css'; 

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#1e1e1e] py-4">
      <div className="inline-block marquee">
        {[
          'React',
          'Node.js',
          'Express',
          'MongoDB',
          'JavaScript',
          'HTML',
          'CSS',
          'Tailwind CSS',
          'Git',
          'GitHub',
          'REST API',
        ].map((skill, index) => (
          <span
            key={index}
            className="mx-8 text-white text-lg font-semibold inline-block"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
