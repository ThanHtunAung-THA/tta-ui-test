import React from 'react';

const LargeArticleCard = ({ image, category, title, description, time }: {
  image: string;
  category: string;
  title: string;
  description: string;
  time: string;
}) => (
  <div className="relative h-[400px] rounded-lg overflow-hidden mb-6 group">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 text-white">
      <span className="inline-block px-3 py-1 bg-white/20 text-sm font-medium rounded-full mb-4">{category}</span>
      <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{title}</h3>
      <p className="mb-3 text-white/90 leading-relaxed text-base">{description}</p>
      <p className="text-sm text-white/70">{time}</p>
    </div>
  </div>
);

const SmallArticleCard = ({ image, title, time }: {
  image: string;
  title: string;
  time: string;
}) => (
  <div className="group cursor-pointer">
    <div className="h-48 rounded-lg overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">{title}</h4>
    <p className="text-sm text-gray-600">{time}</p>
  </div>
);

const HappeningNow = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">HAPPENING NOW</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors">
              <span className="sr-only">Previous</span>
              <img src="https://www.svgrepo.com/show/510039/left-chevron.svg" alt="left" className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors">
              <span className="sr-only">Next</span>
              <img src="https://www.svgrepo.com/show/510166/right-chevron.svg" alt="right" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <LargeArticleCard
              image="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3"
              category="CITY"
              title="San Francisco's Hidden Gems: A Local's Guide to the City"
              description="Discover the lesser-known spots and local favorites that make San Francisco one of the most unique cities in the world. From secret viewpoints to underground art scenes."
              time="2 hours ago"
            />
            <LargeArticleCard
              image="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3"
              category="TRAVEL"
              title="The Ultimate Guide to Hiking the Pacific Northwest"
              description="Experience the breathtaking beauty of the Pacific Northwest's most scenic trails. From rainforests to mountain peaks, plan your next outdoor adventure."
              time="3 hours ago"
            />
          </div>

          <div className="space-y-8">
            <SmallArticleCard
              image="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3"
              title="Desert Photography: Capturing the Magic of the Sahara"
              time="4 hours ago by Michael Chen"
            />
            <SmallArticleCard
              image="https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-4.0.3"
              title="Urban Gardens: Growing Community in the Heart of Cities"
              time="5 hours ago by Sarah Thompson"
            />
            <SmallArticleCard
              image="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-4.0.3"
              title="Mountain Roads: Europe's Most Scenic Driving Routes"
              time="6 hours ago by David Miller"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappeningNow; 