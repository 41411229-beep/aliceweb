import React from 'react';
import { RoomItem } from '../data/hotelData';
import { X, Maximize2, BedDouble, Eye, Sparkles, Check, ArrowRight } from 'lucide-react';

interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: RoomItem | null;
  lang: 'zh' | 'en';
  onBookRoom: (room: RoomItem) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  isOpen,
  onClose,
  room,
  lang,
  onBookRoom,
}) => {
  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/80">
          <div>
            <h3 className="font-serif-brand text-xl font-bold text-white">
              {lang === 'zh' ? room.nameZh : room.nameEn}
            </h3>
            <span className="text-[11px] text-amber-400 font-medium">
              {lang === 'zh' ? room.taglineZh : room.taglineEn}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-950">
            <img
              src={room.image}
              alt={room.nameZh}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-amber-300 bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                <Eye className="w-3.5 h-3.5" />
                <span>{lang === 'zh' ? room.viewZh : room.viewEn}</span>
              </div>
              <div className="text-right">
                <span className="text-amber-400 font-serif-brand text-xl font-bold tabular-nums">
                  NT$ {room.priceTwd.toLocaleString()}
                </span>
                <span className="text-[11px] text-neutral-400 ml-1">/ 晚起</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-center text-xs">
            <div>
              <span className="text-neutral-400 block mb-1">{lang === 'zh' ? '客房面積' : 'Area'}</span>
              <span className="font-semibold text-white">{room.sizeSqm} m² / {room.sizeSqft} sq ft</span>
            </div>
            <div className="border-l border-r border-white/10">
              <span className="text-neutral-400 block mb-1">{lang === 'zh' ? '床型配置' : 'Bedding'}</span>
              <span className="font-semibold text-white">{lang === 'zh' ? room.bedZh : room.bedEn}</span>
            </div>
            <div>
              <span className="text-neutral-400 block mb-1">{lang === 'zh' ? '景觀視野' : 'View'}</span>
              <span className="font-semibold text-amber-400">{lang === 'zh' ? '城市天際線 / 101' : 'Skyline / 101'}</span>
            </div>
          </div>

          {/* Story Narrative */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              {lang === 'zh' ? '奢華私享空間介紹' : 'Sanctuary Overview'}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {lang === 'zh' ? room.descriptionZh : room.descriptionEn}
            </p>
          </div>

          {/* Floorplan Layout Breakdown */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-white/10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-1">
              {lang === 'zh' ? '格局動線配置' : 'Spatial Floor Plan'}
            </span>
            <p className="text-xs text-neutral-300">
              {lang === 'zh' ? room.floorPlanZh : room.floorPlanEn}
            </p>
          </div>

          {/* Luxury Bath Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              {lang === 'zh' ? '極致衛浴與備品' : 'Bath & Care Rituals'}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              {lang === 'zh' ? room.bathZh : room.bathEn}
            </p>
          </div>

          {/* Key Amenities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              {lang === 'zh' ? '專屬尊榮配備' : 'Exclusive In-Room Inclusions'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {(lang === 'zh' ? room.featuresZh : room.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-4 px-6 border-t border-white/10 bg-neutral-950/80 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs text-neutral-400 hover:text-white"
          >
            {lang === 'zh' ? '返回清單' : 'Back'}
          </button>
          <button
            onClick={() => {
              onClose();
              onBookRoom(room);
            }}
            className="py-3 px-8 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg flex items-center gap-2"
          >
            <span>{lang === 'zh' ? '立即預訂此套房' : 'Proceed to Reserve'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
