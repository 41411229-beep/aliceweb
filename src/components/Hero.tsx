import React from 'react';
import { ArrowDown, Sparkles, Award, ShieldCheck, Flame } from 'lucide-react';

interface HeroProps {
  lang: 'zh' | 'en';
  onExploreSuites: () => void;
  onExploreButler: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreSuites,
  onExploreButler,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background Image with Deep Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_piyan_hotel_1793675794925.jpg"
          alt="PIYAN Luxury Design Hotel & Residences Facade Taipei"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/65 to-neutral-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-neutral-950/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Editorial Subtitle Kicker (Clean unboxed typography) */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-amber-300 uppercase mb-5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>
            {lang === 'zh'
              ? '台北松山 · 頂級奢華設計酒店'
              : 'TAIPEI · BESPOKE DESIGN HOSPITALITY'}
          </span>
          <span aria-hidden="true" className="text-amber-400/60">·</span>
          <span className="text-neutral-300">EST. 2026</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-brand text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.1em] text-white leading-tight mb-6 max-w-4xl text-balance">
          {lang === 'zh' ? (
            <>
              前衛潮流風尚
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                極致細膩款待
              </span>
            </>
          ) : (
            <>
              AVANT-GARDE GLAMOUR
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                BESPOKE REFINEMENT
              </span>
            </>
          )}
        </h1>

        {/* Narrative Prose */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-light mb-8 text-balance">
          {lang === 'zh'
            ? 'PIYAN 融合文華東方的優雅底蘊與無微不至的頂級管家服務，交織 W 飯店的電音活力與前衛感官設計。在台北天際線之巔，隨心所欲，隨時為您。'
            : 'At PIYAN, Mandarin Oriental’s timeless bespoke butler craftsmanship meets the magnetic nightlife energy and cutting-edge design of W. Your ultimate Taipei sanctuary.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreSuites}
            className="px-8 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-300 rounded shadow-xl shadow-amber-400/25 transition-all duration-300 hover:scale-105"
          >
            {lang === 'zh' ? '探索奢華套房' : 'Explore Suites'}
          </button>
          <button
            onClick={onExploreButler}
            className="px-8 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            {lang === 'zh' ? '專屬管家特權' : 'Bespoke Butler'}
          </button>
        </div>

        {/* Prestige Trust Markers Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tracking-wide">24/7 WHATEVER</div>
              <div className="text-xs text-neutral-400 font-light">
                {lang === 'zh' ? '無限制專屬管家禮遇' : 'Bespoke Butler Service'}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tracking-wide">MICHELIN CALIBER</div>
              <div className="text-xs text-neutral-400 font-light">
                {lang === 'zh' ? '米其林二星粵法珍饈' : 'Avant-Garde Gastronomy'}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tracking-wide">SKYLINE WET DECK</div>
              <div className="text-xs text-neutral-400 font-light">
                {lang === 'zh' ? '高空恆溫無邊際泳池' : 'Infinity Pool & Daybeds'}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white tracking-wide">ROLLS-ROYCE FLEET</div>
              <div className="text-xs text-neutral-400 font-light">
                {lang === 'zh' ? '機場專屬尊榮接送' : 'Airport Maybach Transfer'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
      </div>
    </section>
  );
};
