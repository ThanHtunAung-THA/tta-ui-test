import React, { useState } from 'react';
import Modal from './Modal';

interface NewsItem {
  category: string;
  title: string;
  time: string;
  image: string;
  description: string;
}

const NewsCard = ({ category, title, time, onClick }: NewsItem & { onClick: () => void }) => (
  <div className="flex items-start gap-4 py-6 border-b border-gray-100 cursor-pointer group" onClick={onClick}>
    <div className="text-pink-600 uppercase text-sm font-semibold min-w-[80px]">{category}</div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

const NewsSection = () => {
  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      category: "Travel",
      title: "The 10 Most Beautiful Places to Visit in New Zealand",
      time: "2 hours ago",
      image: "https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-4.0.3",
      description: "From the stunning Milford Sound to the pristine beaches of Abel Tasman National Park, discover New Zealand's most breathtaking locations that will leave you in awe."
    },
    {
      category: "Technology",
      title: "How AI is Transforming the Way We Travel in 2024",
      time: "3 hours ago",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3",
      description: "Artificial Intelligence is revolutionizing travel planning, booking, and experiences. Learn how smart technology is making travel more personalized and efficient."
    },
    {
      category: "Culture",
      title: "Traditional Festivals You Must Experience in Japan",
      time: "4 hours ago",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3",
      description: "Immerse yourself in Japan's rich cultural heritage through its vibrant festivals, from the cherry blossom celebrations to the spectacular fire festivals."
    },
    {
      category: "Food",
      title: "Street Food Adventures: A Journey Through Southeast Asia",
      time: "5 hours ago",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3",
      description: "Take a culinary journey through the bustling street markets of Thailand, Vietnam, and Malaysia, discovering the authentic flavors of Southeast Asian cuisine."
    },
    {
      category: "Nature",
      title: "Wildlife Photography: Tips from Professional Photographers",
      time: "6 hours ago",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3",
      description: "Learn the secrets of capturing stunning wildlife photographs from experienced photographers who share their techniques and favorite locations."
    },
    {
      category: "Lifestyle",
      title: "Digital Nomad Life: Working from Paradise Locations",
      time: "7 hours ago",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3",
      description: "Explore how digital nomads are combining work and travel, with insights into the best destinations and tips for maintaining a successful remote career."
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage(prev => prev === 0 ? totalPages - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentPage(prev => prev === totalPages - 1 ? 0 : prev + 1);
  };

  const currentItems = newsItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 px-6 lg:pl-12 bg-gray-50">
      <div className="max-w-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">MORE NEWS</h2>
          <div className="flex gap-2">
            <button 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 text-gray-600"
              onClick={handlePrevious}
            >
              <span className="sr-only">Previous</span>
              <img src="https://www.svgrepo.com/show/510039/left-chevron.svg" alt="left" className="w-6 h-6 swiper-button-prev" />
            </button>
            <button 
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 text-gray-600"
              onClick={handleNext}
            >
              <span className="sr-only">Next</span>
              <img src="https://www.svgrepo.com/show/510166/right-chevron.svg" alt="right" className="w-6 h-6 swiper-button-next" />
            </button>
          </div>
        </div>
        
        <div className="h-1 bg-gray-200 w-full mb-8"></div>
        
        <div>
          {currentItems.map((item, index) => (
            <NewsCard 
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
          <div className="flex justify-between items-center mt-4">
            <span className="text-pink-600 uppercase text-sm font-semibold">{selectedItem?.category}</span>
            <span className="text-sm text-gray-500">{selectedItem?.time}</span>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default NewsSection; 