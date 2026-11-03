import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Globe } from 'lucide-react';

interface HeaderProps {
  lang: 'zh' | 'en';
  setLang: (lang: 'zh' | 'en') => void;
  onOpenBooking: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#rooms', labelZh: '客房與套房', labelEn: 'Suites' },
    { href: '#dining', labelZh: '珍饌與酒吧', labelEn: 'Dining & Bars' },
    { href: '#wellness', labelZh: '水療芳療', labelEn: 'Spa & Wellness' },
    { href: '#services', labelZh: '管家特權', labelEn: 'Bespoke Butler' },
    { href: '#events', labelZh: '宴會與派對', labelEn: 'Celebrations' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-white/10 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in luxury display face) */}
          <a
            href="#"
            className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="PIYAN Luxury Design Hotel Home"
          >
            <span className="font-serif-brand text-2xl md:text-3xl font-bold tracking-[0.25em] text-white transition-colors duration-200 group-hover:text-amber-300">
              PIYAN
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans text-amber-400/80 uppercase hidden sm:inline-block ml-1">
              TAIPEI
            </span>
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.18em] font-medium text-neutral-300 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-amber-300 hover:underline underline-offset-8"
              >
                {lang === 'zh' ? link.labelZh : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Discreet Language Switch */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors py-1.5 px-2.5 rounded border border-white/15 bg-white/5 hover:bg-white/10 whitespace-nowrap shrink-0"
              title={lang === 'zh' ? 'Switch to English' : '切換至繁體中文'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium text-[11px] tracking-wider">
                {lang === 'zh' ? 'EN' : '繁中'}
              </span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 text-xs font-semibold tracking-[0.15em] text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-300 rounded shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 transition-all duration-200 uppercase whitespace-nowrap shrink-0"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                {lang === 'zh' ? '立即預訂' : 'Book a Stay'}
              </span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-200 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-12 lg:hidden">
          <nav className="flex flex-col gap-6 text-lg tracking-[0.2em] font-serif-brand">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-amber-300 transition-colors border-b border-white/10 pb-3"
              >
                {lang === 'zh' ? link.labelZh : link.labelEn}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 text-sm font-semibold tracking-widest text-neutral-950 bg-amber-400 rounded text-center shadow-lg uppercase"
            >
              {lang === 'zh' ? '預訂專屬套房' : 'Reserve Suites'}
            </button>
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>PIYAN TAIPEI · 台北市松山區</span>
              <span>+886 2 2712 8888</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
