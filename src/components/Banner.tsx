import React from 'react';
import bannerBackground from '../assets/banner.svg';

export default function Banner() {
  return (
    <div className="relative h-[600px] bg-cover bg-center"
    style={{ backgroundImage: `url(${bannerBackground})` }}>
      <div className="absolute inset-4 grid grid-cols-2">
        {/* Left side - Content */}
        <div className="ml-6 relative z-10 flex flex-col justify-center p-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-fit hover:bg-blue-900 transition-colors">
            FRONTEND
          </button>
          <h2 className="text-4xl font-bold text-white mb-4">
            Challenge React
          </h2>
          <p className="text-xl text-gray-200 max-w-xl mb-6">
          Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        
        </div>

        {/* Right side - Video */}
        <div className="relative flex z-40 items-center justify-center p-10">
          <div className="mt-6 w-full aspect-video rounded-lg overflow-hidden shadow-4xl">
            <iframe 
              width="460px" 
              height="280px" 
              src="https://www.youtube.com/embed/ov7vA5HFe6w?si=3BJfmk_yVmidJqk4" 
              title="YouTube video player" 
              style={{ border: 'solid indigo', borderRadius: '10px', boxShadow: '10px 40px 2px indigo40' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-5"
            />
          </div>
        </div>
      </div>

      {/* Background image overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/banner.svg")' }} />
    </div>
  );
};
