import React from 'react';
import { SPA_TREATMENTS, SpaTreatment } from '../data/hotelData';
import { Sparkles, Clock, Waves, Dumbbell, ShieldCheck, ArrowRight } from 'lucide-react';

interface WellnessSectionProps {
  lang: 'zh' | 'en';
  onBookSpa: (treatment: SpaTreatment) => void;
}

export const WellnessSection: React.FC<WellnessSectionProps> = ({
  lang,
  onBookSpa,
}) => {
  return (
    <section id="wellness" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
        <div>
          <div className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 flex items-center gap-2">
            <Waves className="w-4 h-4" />
            <span>{lang === 'zh' ? '03. 水療芳療與天際泳池' : '03. WELLNESS & SPA'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
            {lang === 'zh' ? '淨化煥活 · 感官綠洲' : 'DETOX, RETOX & REJUVENATION'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
            {lang === 'zh'
              ? '將文華東方極致芳療的沈靜智慧，與 W 專屬活力 Detox / Retox 哲學完美結合。高空恆溫泳池、低溫冷水理療、水晶聲波沉浸，重煥身心高頻能量。'
              : 'Uniting Mandarin Oriental’s meditative spa traditions with W’s Detox/Retox lifestyle. Featuring a heated skyline infinity pool, cryo plunge baths, and acoustic crystal sound journeys.'}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4 text-cyan-400" />
            <span>WET® Deck 07:00 - 22:00</span>
          </div>
          <div className="flex items-center gap-2">
            <Dumbbell className="w-4 h-4 text-amber-400" />
            <span>FIT® Studio 24/7</span>
          </div>
        </div>
      </div>

      {/* Hero Visual Banner with Features Grid */}
      <div className="relative rounded-3xl overflow-hidden mb-14 border border-white/10 aspect-[21/9] min-h-[360px] bg-neutral-900">
        <img
          src="/src/assets/images/piyan_wellness_spa_1793675796858.jpg"
          alt="PIYAN Wellness Spa Sanctuary"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-bold block mb-1">
              AWAY® SPA SANCTUARY
            </span>
            <h3 className="text-2xl md:text-3xl font-serif-brand font-bold text-white mb-2">
              {lang === 'zh' ? '都會身心重置私境' : 'Urban Mind-Body Reset'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-200 font-light">
              {lang === 'zh'
                ? '天然玄武岩黑石、專利水療冷熱循環設施與私人芳療套房，讓喧囂都會在此刻歸零。'
                : 'Natural basalt stones, thermal hydrotherapy circuits, and private spa suites crafted to erase metropolitan tension.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-300 bg-neutral-950/80 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
              {lang === 'zh' ? '芳療預約每日 10:00 - 22:00' : 'Treatments 10:00 - 22:00'}
            </span>
          </div>
        </div>
      </div>

      {/* Curated Spa Signature Treatments Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SPA_TREATMENTS.map((treatment) => (
          <div
            key={treatment.id}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {treatment.durationMin} {lang === 'zh' ? '分鐘療程' : 'Mins'}
                </span>
                <span className="font-serif-brand font-bold text-white text-sm tabular-nums">
                  NT$ {treatment.priceTwd.toLocaleString()}
                </span>
              </div>

              <h4 className="font-serif-brand text-lg font-bold text-white mb-3 hover:text-amber-300 transition-colors">
                {lang === 'zh' ? treatment.nameZh : treatment.nameEn}
              </h4>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                {lang === 'zh' ? treatment.descriptionZh : treatment.descriptionEn}
              </p>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300 mb-6">
                <span className="text-amber-400 font-medium block mb-1">
                  {lang === 'zh' ? '療癒效益：' : 'Key Benefits: '}
                </span>
                {lang === 'zh' ? treatment.benefitsZh : treatment.benefitsEn}
              </div>
            </div>

            <button
              onClick={() => onBookSpa(treatment)}
              className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-colors flex items-center justify-center gap-1.5 group"
            >
              <span>{lang === 'zh' ? '預約此項水療' : 'Book Ritual'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
