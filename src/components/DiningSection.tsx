import React, { useState } from 'react';
import { DINING_DATA, DiningItem } from '../data/hotelData';
import { Clock, Shirt, Sparkles, UtensilsCrossed, Wine, ArrowRight } from 'lucide-react';

interface DiningSectionProps {
  lang: 'zh' | 'en';
  onReserveTable: (dining: DiningItem) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({
  lang,
  onReserveTable,
}) => {
  const [selectedId, setSelectedId] = useState<string>(DINING_DATA[0].id);
  const activeVenue = DINING_DATA.find((item) => item.id === selectedId) || DINING_DATA[0];

  return (
    <section id="dining" className="py-24 bg-neutral-900/60 border-t border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 flex items-center justify-center gap-2">
            <UtensilsCrossed className="w-4 h-4" />
            <span>{lang === 'zh' ? '02. 珍饌與高空酒吧' : '02. DINING & MIXOLOGY'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            {lang === 'zh' ? '舌尖盛宴 · 璀璨微醺' : 'CULINARY ARTISTRY & SKYLINE NIGHTS'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {lang === 'zh'
              ? '文華東方級的極致烹飪火候與講究，邂逅 W 標誌性前衛調酒與電音節奏。四處引領台北潮流的頂級社交食府，隨時挑逗您的感官。'
              : 'Mandarin Oriental’s culinary rigor meets W’s magnetic mixology and late-night grooves across four destination venues.'}
          </p>
        </div>

        {/* Venue Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {DINING_DATA.map((venue) => {
            const isActive = venue.id === activeVenue.id;
            return (
              <button
                key={venue.id}
                onClick={() => setSelectedId(venue.id)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-wider rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-neutral-950 shadow-lg shadow-amber-400/20'
                    : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {venue.id.includes('bar') ? <Wine className="w-3.5 h-3.5" /> : <UtensilsCrossed className="w-3.5 h-3.5" />}
                <span>{venue.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Venue Hero Showcase (2-Column Balanced Layout) */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Photography Column */}
          <div className="relative lg:col-span-7 min-h-[380px] lg:min-h-[520px] overflow-hidden bg-neutral-950">
            <img
              src={activeVenue.image}
              alt={activeVenue.name}
              className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/80" />

            {/* Signature Dish Pill Badge replacement: clean text banner */}
            <div className="absolute bottom-6 left-6 right-6 z-10 bg-neutral-950/90 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <span className="text-[10px] tracking-[0.2em] uppercase text-amber-400 font-bold block mb-1">
                {lang === 'zh' ? '主廚招牌推薦' : 'Chef’s Signature'}
              </span>
              <p className="text-white text-xs sm:text-sm font-medium">
                {lang === 'zh' ? activeVenue.signatureDishZh : activeVenue.signatureDishEn}
              </p>
            </div>
          </div>

          {/* Details & Story Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-neutral-900/90">
            <div>
              <div className="text-xs text-amber-400 font-medium tracking-widest uppercase mb-2">
                {lang === 'zh' ? activeVenue.typeZh : activeVenue.typeEn}
              </div>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white mb-4">
                {lang === 'zh' ? activeVenue.nameZh : activeVenue.name}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {lang === 'zh' ? activeVenue.descriptionZh : activeVenue.descriptionEn}
              </p>

              {/* Hours & Dress Code Metadata */}
              <div className="space-y-3 mb-6 pb-6 border-b border-white/10 text-xs">
                <div className="flex items-center gap-3 text-neutral-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{lang === 'zh' ? activeVenue.hoursZh : activeVenue.hoursEn}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300">
                  <Shirt className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    {lang === 'zh' ? '著裝要求：' : 'Dress Code: '}
                    {lang === 'zh' ? activeVenue.dressCodeZh : activeVenue.dressCodeEn}
                  </span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="mb-8">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  {lang === 'zh' ? '極致特色亮點' : 'Signature Highlights'}
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {(lang === 'zh' ? activeVenue.highlightsZh : activeVenue.highlightsEn).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => onReserveTable(activeVenue)}
                className="flex-1 py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>{lang === 'zh' ? '預訂專屬座席' : 'Reserve Table'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
