import React, { useState } from 'react';
import { Calendar, Users, Tag, ChevronDown, ArrowRight } from 'lucide-react';

interface QuickBookingBarProps {
  lang: 'zh' | 'en';
  onCheckRates: (bookingState: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    promoCode: string;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({
  lang,
  onCheckRates,
}) => {
  // Setup default dates: tomorrow and 3 days from tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextThreeDays = new Date(today);
  nextThreeDays.setDate(nextThreeDays.getDate() + 3);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(nextThreeDays));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
  const [showPromoInput, setShowPromoInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckRates({
      checkIn,
      checkOut,
      adults,
      children,
      promoCode,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto -mt-16 md:-mt-20 relative z-30 px-4 sm:px-6">
      <div className="glass-card rounded-2xl p-4 md:p-6 shadow-2xl backdrop-blur-2xl border border-white/15 bg-neutral-900/90 text-white">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Check-In & Check-Out */}
          <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors">
            <span className="text-[11px] font-medium tracking-wider text-amber-300/90 uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'zh' ? '入住與退房日期' : 'Check-In — Check-Out'}
            </span>
            <div className="flex items-center gap-2 text-sm">
              <input
                type="date"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer w-full"
                aria-label={lang === 'zh' ? '入住日期' : 'Check-in date'}
              />
              <span className="text-neutral-500">→</span>
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer w-full"
                aria-label={lang === 'zh' ? '退房日期' : 'Check-out date'}
              />
            </div>
          </div>

          {/* Guests Selector */}
          <div className="relative">
            <div
              onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
              className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors cursor-pointer"
            >
              <span className="text-[11px] font-medium tracking-wider text-amber-300/90 uppercase flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'zh' ? '房客與人數' : 'Rooms & Guests'}
              </span>
              <div className="flex items-center justify-between text-xs font-semibold text-white">
                <span>
                  {adults} {lang === 'zh' ? '位成人' : 'Adults'}
                  {children > 0 && ` · ${children} ${lang === 'zh' ? '位兒童' : 'Child'}`}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </div>
            </div>

            {showGuestsDropdown && (
              <div className="absolute top-full mt-2 left-0 right-0 p-4 bg-neutral-900 border border-white/20 rounded-xl shadow-2xl z-50 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300">{lang === 'zh' ? '成人 (18歲以上)' : 'Adults'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded border border-white/20 text-xs hover:bg-white/10 disabled:opacity-30"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{adults}</span>
                    <button
                      type="button"
                      disabled={adults >= 4}
                      onClick={() => setAdults(Math.min(4, adults + 1))}
                      className="w-7 h-7 rounded border border-white/20 text-xs hover:bg-white/10 disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-300">{lang === 'zh' ? '兒童 (0-17歲)' : 'Children'}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded border border-white/20 text-xs hover:bg-white/10 disabled:opacity-30"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{children}</span>
                    <button
                      type="button"
                      disabled={children >= 3}
                      onClick={() => setChildren(Math.min(3, children + 1))}
                      className="w-7 h-7 rounded border border-white/20 text-xs hover:bg-white/10 disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowGuestsDropdown(false)}
                  className="mt-2 py-1.5 text-[11px] bg-white/10 hover:bg-white/20 rounded font-medium text-amber-300"
                >
                  {lang === 'zh' ? '確認人數' : 'Apply'}
                </button>
              </div>
            )}
          </div>

          {/* Special Promo / Preferred Rate */}
          <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors">
            <span className="text-[11px] font-medium tracking-wider text-amber-300/90 uppercase flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'zh' ? '禮遇代碼' : 'Special Rate'}
              </span>
              <button
                type="button"
                onClick={() => setShowPromoInput(!showPromoInput)}
                className="text-[10px] text-amber-400 underline lowercase"
              >
                {showPromoInput ? (lang === 'zh' ? '收起' : 'close') : (lang === 'zh' ? '輸入' : 'enter')}
              </button>
            </span>
            <input
              type="text"
              placeholder={lang === 'zh' ? 'PIYAN VIP / 企業優惠碼' : 'Promo Code / Corporate'}
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="bg-transparent text-xs text-white placeholder:text-neutral-500 focus:outline-none w-full"
            />
          </div>

          {/* Submit Action Button */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full h-[54px] flex items-center justify-center gap-2.5 px-6 rounded-xl font-semibold text-xs tracking-[0.16em] uppercase text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/35 transition-all duration-300 group"
            >
              <span>{lang === 'zh' ? '查詢即時房價' : 'Check Rates'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
