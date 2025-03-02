import React, { useState } from 'react';
import Modal from './Modal';

interface TrendingItem {
  image: string;
  title: string;
  time: string;
  description?: string;
}

const TrendingCard = ({ 
  image, 
  title, 
  time,
  onClick 
}: TrendingItem & { onClick: () => void }) => (
  <div className="group cursor-pointer" onClick={onClick}>
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-300" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-pink-600 transition-colors">{title}</h3>
    <p className="text-gray-500 text-sm">{time}</p>
  </div>
);

const TrendingSection = () => {
  const [selectedItem, setSelectedItem] = useState<TrendingItem | null>(null);

  const trendingItems: TrendingItem[] = [
    {
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3",
      title: "Mountain Lakes of Switzerland",
      time: "2 hours ago",
      description: "Discover the serene beauty of Switzerland's mountain lakes, where crystal-clear waters reflect snow-capped peaks and lush alpine meadows create a perfect harmony with nature."
    },
    {
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3",
      title: "Paradise Beaches in Maldives",
      time: "3 hours ago",
      description: "Experience the ultimate tropical getaway in the Maldives, where pristine white-sand beaches meet turquoise waters, and luxury overwater bungalows provide the perfect escape."
    },
    {
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3",
      title: "Autumn Colors in Japan",
      time: "4 hours ago",
      description: "Witness the spectacular transformation of Japan's landscapes during autumn, as maple trees paint the countryside in brilliant shades of red, orange, and gold."
    },
    {
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3",
      title: "Starry Night in the Alps",
      time: "5 hours ago",
      description: "Experience the magic of stargazing in the Swiss Alps, where clear mountain air and minimal light pollution create perfect conditions for viewing the Milky Way."
    },
    {
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3",
      title: "Venice Canals at Sunset",
      time: "6 hours ago",
      description: "Navigate through Venice's historic canals as the setting sun bathes the ancient buildings in golden light, creating an unforgettable atmosphere in this unique city."
    },
    {
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3",
      title: "Italian Countryside Views",
      time: "7 hours ago",
      description: "Explore the rolling hills of Tuscany, where centuries-old vineyards, olive groves, and charming farmhouses create the perfect Italian countryside experience."
    },
    {
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3",
      title: "Streets of Venice",
      time: "8 hours ago",
      description: "Get lost in Venice's narrow streets and discover hidden squares, historic bridges, and local cafes that make this floating city a unique treasure."
    },
    {
      image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3",
      title: "Northern Lights in Iceland",
      time: "9 hours ago",
      description: "Chase the aurora borealis in Iceland's dramatic landscapes, where the dancing lights create an otherworldly display against the arctic night sky."
    },
    {
      image: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3",
      title: "Greek Island Paradise",
      time: "10 hours ago",
      description: "Discover the enchanting beauty of the Greek Islands, where whitewashed buildings cascade down cliffs, and the Mediterranean Sea stretches endlessly to the horizon."
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(trendingItems.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage(prev => prev === 0 ? totalPages - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentPage(prev => prev === totalPages - 1 ? 0 : prev + 1);
  };

  const currentItems = trendingItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">TRENDING</h2>
          <div className="flex gap-2">
            <button 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600"
              onClick={handlePrevious}
            >
              <span className="sr-only">Previous</span>
              <img src="https://www.svgrepo.com/show/510039/left-chevron.svg" alt="left" className="w-6 h-6 swiper-button-prev"/>
            </button>
            <button 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600"
              onClick={handleNext}
            >
              <span className="sr-only">Next</span>
              <img src="https://www.svgrepo.com/show/510166/right-chevron.svg" alt="right" className="w-6 h-6 swiper-button-next" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((item, index) => (
            <TrendingCard 
              key={currentPage * itemsPerPage + index} 
              {...item} 
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>

        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          image={selectedItem?.image || ''}
          title={selectedItem?.title || ''}
        >
          <p className="text-gray-600">{selectedItem?.description}</p>
          <p className="text-sm text-gray-500 mt-4">{selectedItem?.time}</p>
        </Modal>
      </div>
    </section>
  );
};

export default TrendingSection; 