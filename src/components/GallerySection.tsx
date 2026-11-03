import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';

interface GallerySectionProps {
  lang: 'zh' | 'en';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'exterior' | 'suite' | 'dining' | 'pool'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const galleryItems = [
    {
      category: 'exterior',
      titleZh: 'PIYAN 台北松山璀璨外觀建築',
      titleEn: 'PIYAN Taipei Architectural Facade',
      image: '/src/assets/images/hero_piyan_hotel_1793675794925.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      category: 'suite',
      titleZh: '頂級驚艷全景套房夜間氛圍',
      titleEn: 'WOW Panoramic Suite Twilight Ambiance',
      image: '/src/assets/images/piyan_suite_luxury_1793675795382.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      category: 'pool',
      titleZh: 'WET® DECK 高空無邊際泳池與私享涼亭',
      titleEn: 'WET® Deck Skyline Infinity Pool & Cabanas',
      image: '/src/assets/images/piyan_rooftop_pool_1793675796529.jpg',
      aspect: 'aspect-[16/10]',
    },
    {
      category: 'dining',
      titleZh: 'YÀN (嚴) 米其林星級主廚私享餐宴',
      titleEn: 'YÀN Michelin Caliber Dining Salon',
      image: '/src/assets/images/piyan_fine_dining_1793675796993.jpg',
      aspect: 'aspect-[4/3]',
    },
    {
      category: 'spa',
      titleZh: 'AWAY® SPA 黑石水療芳療秘境',
      titleEn: 'AWAY® Spa Basalt Thermal Sanctuary',
      image: '/src/assets/images/piyan_wellness_spa_1793675796858.jpg',
      aspect: 'aspect-[4/3]',
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-24 bg-neutral-900/50 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'zh' ? '06. 感官視界畫廊' : '06. VISUAL TOUR'}</span>
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
              {lang === 'zh' ? '光影流轉 · 風尚定格' : 'ATMOSPHERE & ARTISTRY'}
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-800 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'all' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'zh' ? '全部' : 'All'}
            </button>
            <button
              onClick={() => setActiveCategory('suite')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'suite' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'zh' ? '套房' : 'Suites'}
            </button>
            <button
              onClick={() => setActiveCategory('pool')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'pool' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'zh' ? '天際泳池' : 'Pool & Lounge'}
            </button>
            <button
              onClick={() => setActiveCategory('dining')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategory === 'dining' ? 'bg-amber-400 text-neutral-950 font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {lang === 'zh' ? '珍饌' : 'Dining'}
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item.image)}
              className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-amber-400/50 transition-all duration-300"
            >
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img
                  src={item.image}
                  alt={lang === 'zh' ? item.titleZh : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                <span className="text-xs font-medium text-white group-hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? item.titleZh : item.titleEn}
                </span>
                <div className="p-1.5 rounded-full bg-neutral-900/70 border border-white/15 text-neutral-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedPhoto}
            alt="PIYAN Hotel Gallery Preview"
            className="max-w-5xl max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/15"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};
