import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 ml-4 mt-4 md:ml-[300px] md:mt-[300px]">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-semibold mb-4">WORLD NEWS</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Amazing places in America to visit.</h1>
            <p className="text-lg mb-8">For some reason — this country, this city, this neighborhood, this particular street — is the place you are living a majority of your life in.</p>
            <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 