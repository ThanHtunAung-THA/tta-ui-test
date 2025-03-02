import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import NewsSection from './components/NewsSection';
import HappeningNow from './components/HappeningNow';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="lg:flex">
          <div className="lg:w-2/3">
            <TrendingSection />
          </div>
          <div className="lg:w-1/3">
            <NewsSection />
          </div>
        </div>
        <HappeningNow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
