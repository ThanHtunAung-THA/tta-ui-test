import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600">TTA TRAVEL</div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-pink-600">HOME</a>
          <a href="#" className="hover:text-pink-600">DISCOVERY</a>
          <a href="#" className="hover:text-pink-600">PHOTOS</a>
          <a href="#" className="hover:text-pink-600">CONTACT</a>
          <div className="w-10 h-10 rounded-full bg-gray-200 ml-6">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header; 