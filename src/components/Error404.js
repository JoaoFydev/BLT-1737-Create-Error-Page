import React from 'react';
import myImage from '../assets/images/image.png'; 

function Error404() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 -mt-12">
      <img src={myImage} alt="Error 404" className="mb-8 w-2/4 max-w-lg" /> 
      <div className="w-2/4 max-w-lg text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4">Error 404</h1>
        <p className="text-lg text-white">Page Not Found</p>
        <p className="mt-4 text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque sed mi ultrices, mollis arcu nec, fermentum justo. 
          Donec dapibus, lorem ac hendrerit sodales.
        </p>
      </div>
    </div>
  );
}

export default Error404;
