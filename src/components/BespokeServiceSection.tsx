import React, { useState } from 'react';
import { BESPOKE_SERVICES, BespokeService } from '../data/hotelData';
import { Sparkles, Car, Moon, Wine, Compass, Shirt, CheckCircle, ArrowRight, BellRing } from 'lucide-react';

interface BespokeServiceSectionProps {
  lang: 'zh' | 'en';
  onRequestConcierge: (service?: BespokeService) => void;
}

export const BespokeServiceSection: React.FC<BespokeServiceSectionProps> = ({
  lang,
  onRequestConcierge,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Car': return <Car className="w-5 h-5 text-amber-400" />;
      case 'Moon': return <Moon className="w-5 h-5 text-amber-400" />;
      case 'Wine': return <Wine className="w-5 h-5 text-amber-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900/40 border-t border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'zh' ? '04. 極致細膩款待與管家特權' : '04. BESPOKE BUTLER & WHATEVER/WHENEVER®'}</span>
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
              {lang === 'zh' ? '無所不能 · 隨時為您' : 'WHATEVER / WHENEVER® MASTERY'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
              {lang === 'zh'
                ? '傳承東方文華百年管家文化的深沉細緻，激盪 W 飯店不受拘束的隨性潮流。只要合法合理，任何時刻，您的私享渴望皆由專屬私人管家優雅成就。'
                : 'Fusing the deep precision of classic master butler craft with W’s high-energy limitless hospitality. Whatever you want, whenever you want it, executed with flawless grace.'}
            </p>
          </div>

          <button
            onClick={() => onRequestConcierge()}
            className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg transition-all flex items-center gap-2 self-start md:self-auto shrink-0"
          >
            <BellRing className="w-4 h-4" />
            <span>{lang === 'zh' ? '呼叫專屬管家' : 'Summon Butler'}</span>
          </button>
        </div>

        {/* 6 Core Signature Butler Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BESPOKE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="glass-card rounded-2xl p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-amber-400/90 font-medium">
                    {lang === 'zh' ? srv.categoryZh : srv.categoryEn}
                  </span>
                </div>

                <h3 className="font-serif-brand text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? srv.titleZh : srv.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {lang === 'zh' ? srv.descriptionZh : srv.descriptionEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                  {lang === 'zh' ? '全天候即席待命' : 'Available 24/7'}
                </span>
                <button
                  onClick={() => onRequestConcierge(srv)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/btn"
                >
                  <span>{lang === 'zh' ? '立即禮遇預約' : 'Request Service'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Sleep & Pillow Menu Showcase Highlight */}
        <div className="mt-14 glass-card rounded-2xl p-8 border border-white/15 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-purple-950/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 block mb-2">
                {lang === 'zh' ? '細膩睡眠訂製工程' : 'SLEEP STYLING SYSTEM'}
              </span>
              <h4 className="font-serif-brand text-2xl font-bold text-white mb-2">
                {lang === 'zh' ? '文華東方級 6 款頂級客製枕頭菜單' : 'The Bespoke 6-Pillow & Aromatherapy Menu'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                {lang === 'zh'
                  ? '入住前由管家為您備妥專屬舒眠方案：瑞士白鵝絨枕、冷凝人體工學記憶枕、天然有機薰衣草蕎麥枕、抗敏雙層天然乳膠枕等，並搭配調香大師的深睡香氛噴霧。'
                  : 'Pre-selected prior to arrival: Swiss white goose down, cooling ergonomic memory gel, organic lavender buckwheat, or dual-layer natural latex with sleep mist.'}
              </p>
            </div>

            <button
              onClick={() => onRequestConcierge(BESPOKE_SERVICES[2])}
              className="py-3 px-6 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow shrink-0"
            >
              {lang === 'zh' ? '挑選我的舒眠枕型' : 'Customize Pillow Menu'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
