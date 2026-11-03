import React, { useState } from 'react';
import { EVENTS_DATA } from '../data/hotelData';
import { Calendar, Users, Maximize2, Sparkles, Send, CheckCircle2 } from 'lucide-react';

interface EventsSectionProps {
  lang: 'zh' | 'en';
}

export const EventsSection: React.FC<EventsSectionProps> = ({ lang }) => {
  const [guestCount, setGuestCount] = useState<number>(150);
  const [eventType, setEventType] = useState<string>('wedding');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="events" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
        <div>
          <div className="text-xs font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'zh' ? '05. 頂級盛宴與時尚派對' : '05. CELEBRATIONS & EVENTS'}</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold tracking-tight text-white text-balance">
            {lang === 'zh' ? '傳奇無界 · 絕代盛典' : 'UNRIVALED OCCASIONS & GALAS'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-2xl font-light">
            {lang === 'zh'
              ? '台北最受矚目的無柱奢華大廳與天際星空露台。由資深活動規劃大師與米其林星級主廚團隊協同操刀，打造令人屏息的時尚發表、高階論壇與極致夢幻婚禮。'
              : 'Taipei’s most coveted pillarless ballroom and rooftop starlight terraces, tailored by master event couturiers and culinary artists.'}
          </p>
        </div>
      </div>

      {/* Venues Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {EVENTS_DATA.map((space) => (
          <div
            key={space.id}
            className="glass-card rounded-2xl p-7 border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif-brand text-xl font-bold text-white mb-2">
                {lang === 'zh' ? space.nameZh : space.nameEn}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                {lang === 'zh' ? space.descriptionZh : space.descriptionEn}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-3 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>{space.areaSqm} m² (挑高 {space.heightM}m)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>至多 {space.capacityCocktail} 位貴賓</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive RFP / Event Inquiry Block */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/15 bg-neutral-900/90">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 block mb-2">
              {lang === 'zh' ? '專屬活動總監一對一諮詢' : 'DIRECT EVENT CURATOR INQUIRY'}
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white mb-4">
              {lang === 'zh' ? '策劃您的專屬台北盛宴' : 'Curate Your Next Grand Affair'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
              {lang === 'zh'
                ? '請填寫您的預計賓客人數與活動型態，PIYAN 宴會統籌團隊將於 2 小時內為您量身呈獻專屬場地配置方案與星級珍饈菜單。'
                : 'Share your party size and preferred format. Our dedicated event master will respond within two hours with bespoke floorplans and tasting menus.'}
            </p>

            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{lang === 'zh' ? '7.8米挑高全無柱劇院級聲光科技' : '7.8m Pillarless Ballroom with 360° LED'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{lang === 'zh' ? '米其林二星主廚專屬定製晚宴' : 'Michelin-starred bespoke banqueting'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">✓</span>
                <span>{lang === 'zh' ? '專屬貴賓電梯與獨立隱密通道' : 'VIP express elevator & private security lane'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-950/60 p-6 sm:p-8 rounded-2xl border border-white/10">
            {formSubmitted ? (
              <div className="text-center py-10 flex flex-col items-center">
                <CheckCircle2 className="w-12 h-12 text-amber-400 mb-4 animate-bounce" />
                <h4 className="text-xl font-bold font-serif-brand text-white mb-2">
                  {lang === 'zh' ? '已收到您的盛宴諮詢' : 'Affair Inquiry Received'}
                </h4>
                <p className="text-xs text-neutral-300 max-w-sm font-light">
                  {lang === 'zh'
                    ? `感謝您，${name}。PIYAN 首席活動統籌將於稍後透過電話或信箱與您聯繫。`
                    : `Thank you, ${name}. Our chief event director will contact you shortly.`}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2 text-xs bg-white/10 hover:bg-white/20 rounded-lg text-white"
                >
                  {lang === 'zh' ? '發送另一筆需求' : 'Submit Another'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                      {lang === 'zh' ? '活動類型' : 'Event Type'}
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="wedding">{lang === 'zh' ? '夢幻奢華婚禮' : 'Luxury Wedding'}</option>
                      <option value="gala">{lang === 'zh' ? '時尚品牌發表 / 慶典' : 'Fashion Gala & Launch'}</option>
                      <option value="summit">{lang === 'zh' ? '高階高峰論壇' : 'Executive Summit'}</option>
                      <option value="party">{lang === 'zh' ? '私人星空露台派對' : 'Rooftop Private Soirée'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                      {lang === 'zh' ? `預估賓客人數: ${guestCount} 人` : `Expected Guests: ${guestCount}`}
                    </label>
                    <input
                      type="range"
                      min={20}
                      max={600}
                      step={10}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                      {lang === 'zh' ? '您的姓名 *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'zh' ? '王大明 / 林小姐' : 'Alexander Wang'}
                      className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                      {lang === 'zh' ? '電子信箱 *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alexander@vip.com"
                      className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                      {lang === 'zh' ? '聯絡電話' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+886 912 345 678"
                      className="w-full bg-neutral-900 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                    {lang === 'zh' ? '活動構想或特殊需求' : 'Vision & Special Requests'}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={lang === 'zh' ? '例如：希望包含頂層星空露台迎賓雞尾酒時段...' : 'e.g., Interested in rooftop twilight cocktails followed by gala dinner...'}
                    className="w-full bg-neutral-900 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'zh' ? '提交活動諮詢需求' : 'Submit Event Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
