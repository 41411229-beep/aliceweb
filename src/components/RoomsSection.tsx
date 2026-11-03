import React, { useState } from 'react';
import { ROOMS_DATA, RoomItem } from '../data/hotelData';
import { Maximize2, Users, BedDouble, Eye, ArrowUpRight, Sparkles } from 'lucide-react';

interface RoomsSectionProps {
  lang: 'zh' | 'en';
  onSelectRoomForBooking: (room: RoomItem) => void;
  onOpenRoomDetail: (room: RoomItem) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  lang,
  onSelectRoomForBooking,
  onOpenRoomDetail,
}) => {
  const [filter, setFilter] = useState<'all' | 'suites' | 'villa'>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filter === 'suites') return room.id.includes('suite');
    if (filter === 'villa') return room.id.includes('villa');
    return true;
  });

  return (
    <section id="rooms" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
        <div>
          <div className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'zh' ? '01. 客房與套房系列' : '01. ACCOMMODATIONS'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
            {lang === 'zh' ? '高空私域 · 靈感棲所' : 'SANCTUARY IN THE SKY'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
            {lang === 'zh'
              ? '每間客房皆坐擁台北璀璨天際線與101全景，配備義大利奢華訂製傢俱、專屬大理石調酒吧台與極致舒眠科技。'
              : 'Each room frames breathtaking vistas of Taipei 101, outfitted with bespoke Italian designer furnishings, private marble cocktail stations, and sensory sleep amenities.'}
          </p>
        </div>

        {/* Filter Tabs (Interactive filter control following Section 1.A) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-white/10 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-medium tracking-wider rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'zh' ? '全部房型' : 'All Rooms'}
          </button>
          <button
            onClick={() => setFilter('suites')}
            className={`px-4 py-2 text-xs font-medium tracking-wider rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'suites'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'zh' ? '豪華套房' : 'Suites'}
          </button>
          <button
            onClick={() => setFilter('villa')}
            className={`px-4 py-2 text-xs font-medium tracking-wider rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              filter === 'villa'
                ? 'bg-amber-400 text-neutral-950 font-semibold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {lang === 'zh' ? '總統頂層閣樓' : 'Presidential Villa'}
          </button>
        </div>
      </div>

      {/* Room Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="group glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col"
          >
            {/* Visual Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => onOpenRoomDetail(room)}>
              <img
                src={room.image}
                alt={lang === 'zh' ? room.nameZh : room.nameEn}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Top View Tag (Clean unboxed typography) */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-xs text-amber-300 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 font-medium">
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? room.viewZh : room.viewEn}</span>
              </div>

              {/* Price Kicker */}
              <div className="absolute bottom-4 right-4 z-10 text-right bg-neutral-950/85 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                  {lang === 'zh' ? '每晚專享' : 'From / Night'}
                </span>
                <span className="text-amber-400 font-serif-brand text-lg font-bold tabular-nums">
                  NT$ {room.priceTwd.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Room Info Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-serif-brand text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {lang === 'zh' ? room.nameZh : room.nameEn}
                    </h3>
                    <p className="text-xs text-amber-400/90 tracking-wide mt-1">
                      {lang === 'zh' ? room.taglineZh : room.taglineEn}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed my-4 line-clamp-2">
                  {lang === 'zh' ? room.descriptionZh : room.descriptionEn}
                </p>

                {/* Spatial Metadata Strip (Clean unboxed text with dot separators) */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 border-t border-b border-white/10 py-3 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span className="tabular-nums font-medium text-neutral-200">
                      {room.sizeSqm} m² / {room.sizeSqft} sq ft
                    </span>
                  </div>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <div className="flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'zh' ? room.bedZh : room.bedEn}</span>
                  </div>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'zh' ? '至多 3 位貴賓' : 'Up to 3 Guests'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectRoomForBooking(room)}
                  className="flex-1 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded shadow-md transition-colors text-center"
                >
                  {lang === 'zh' ? '預訂此房型' : 'Reserve Suite'}
                </button>
                <button
                  onClick={() => onOpenRoomDetail(room)}
                  className="py-3 px-4 text-xs font-medium tracking-wider text-white hover:text-amber-300 bg-white/5 hover:bg-white/10 border border-white/15 rounded transition-colors flex items-center gap-1.5"
                >
                  <span>{lang === 'zh' ? '完整配置' : 'Details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
