import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, Check } from 'lucide-react';

interface FooterProps {
  lang: 'zh' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-brand text-3xl font-bold tracking-[0.25em] text-white">
                PIYAN
              </span>
              <span className="text-[10px] tracking-[0.3em] font-sans text-amber-400 uppercase">
                TAIPEI
              </span>
            </div>

            <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-sm">
              {lang === 'zh'
                ? '融合東方文華極致尊爵的細膩管家服務，與 W 飯店的當代前衛風尚。在台北天際線之巔，隨心所欲，隨時為您。'
                : 'Where Mandarin Oriental’s bespoke butler craft meets W’s magnetic nightlife energy. Whatever/Whenever, high above Taipei.'}
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {lang === 'zh'
                    ? '台灣台北市松山區敦化北路 168 號'
                    : 'No. 168, Dunhua N. Rd., Songshan Dist., Taipei City, Taiwan'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+886 2 2712 8888</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>reservations@piyanhotel.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              {lang === 'zh' ? '極致導覽' : 'Explore PIYAN'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? '客房與豪華套房' : 'Rooms & Suites'}
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? 'YÀN 粵法米其林料理' : 'YÀN Fine Dining'}
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? 'NEON WOO 高空音樂酒吧' : 'NEON WOO Skyline Lounge'}
                </a>
              </li>
              <li>
                <a href="#wellness" className="hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? 'AWAY® Spa 水療與天際泳池' : 'AWAY® Spa & WET Deck'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? 'Whatever/Whenever® 專屬管家' : 'Whatever/Whenever® Butler'}
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber-300 transition-colors">
                  {lang === 'zh' ? 'THE GREAT ROOM 盛宴大廳' : 'The Great Room Celebrations'}
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
              {lang === 'zh' ? '加入 PIYAN 私享貴賓會籍' : 'The PIYAN Society'}
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {lang === 'zh'
                ? '搶先獲得米其林客座主廚晚宴、DJ 頂樓微醺之夜與套房升等特權。'
                : 'Receive exclusive invitations to guest chef tastings, rooftop DJ soirées, and preferred suite upgrades.'}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>{lang === 'zh' ? '感謝加入，已為您發送貴賓入會禮遇。' : 'Thank you. Your VIP welcome dispatch has been sent.'}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder={lang === 'zh' ? '輸入您的電子郵件' : 'Your email address'}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-neutral-900 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 flex-1"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 rounded-xl transition-colors shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-4 text-[11px] text-neutral-500">
              <span>Forbes 5-Star Hotel</span>
              <span>·</span>
              <span>Michelin Key</span>
              <span>·</span>
              <span>Virtuoso Member</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} PIYAN TAIPEI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer">Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
