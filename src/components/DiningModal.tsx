import React, { useState } from 'react';
import { DINING_DATA, DiningItem } from '../data/hotelData';
import { X, Calendar, Clock, Users, UtensilsCrossed, CheckCircle2, Sparkles } from 'lucide-react';

interface DiningModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
  initialVenue?: DiningItem | null;
}

export const DiningModal: React.FC<DiningModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialVenue,
}) => {
  if (!isOpen) return null;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [selectedVenue, setSelectedVenue] = useState<DiningItem>(initialVenue || DINING_DATA[0]);
  const [date, setDate] = useState<string>(formatDate(tomorrow));
  const [time, setTime] = useState<string>('19:00');
  const [guests, setGuests] = useState<number>(2);
  const [seating, setSeating] = useState<string>('window');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [resId, setResId] = useState<string>('');

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    setResId('PYN-DINE-' + Math.floor(1000 + Math.random() * 9000));
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            <span className="font-serif-brand text-lg font-bold text-white">
              {lang === 'zh' ? 'PIYAN 頂級珍饌座席預訂' : 'PIYAN Dining & Lounge Table Reservation'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!confirmed ? (
          <form onSubmit={handleReserve} className="p-6 sm:p-8 space-y-6">
            {/* Venue Selector */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                {lang === 'zh' ? '選擇餐廳或高空酒吧' : 'Select Destination'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DINING_DATA.map((venue) => {
                  const isSelected = venue.id === selectedVenue.id;
                  return (
                    <button
                      type="button"
                      key={venue.id}
                      onClick={() => setSelectedVenue(venue)}
                      className={`p-3 text-left rounded-xl border text-xs transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/20'
                      }`}
                    >
                      <div className="truncate">{venue.name}</div>
                      <div className={`text-[10px] truncate mt-0.5 ${isSelected ? 'text-neutral-900' : 'text-neutral-400'}`}>
                        {lang === 'zh' ? venue.typeZh : venue.typeEn}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date, Time & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                  {lang === 'zh' ? '預訂日期' : 'Date'}
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                  {lang === 'zh' ? '用餐時間' : 'Time Slot'}
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                  {lang === 'zh' ? '用餐人數' : 'Party Size'}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {lang === 'zh' ? '位貴賓' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                {lang === 'zh' ? '座位偏好' : 'Seating Preference'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'window', labelZh: '璀璨景觀窗邊', labelEn: 'Skyline Window' },
                  { id: 'booth', labelZh: 'VIP 私密沙發座', labelEn: 'VIP Private Booth' },
                  { id: 'bar', labelZh: '調酒吧台第一排', labelEn: 'Mixology Bar Seat' },
                ].map((seat) => (
                  <button
                    type="button"
                    key={seat.id}
                    onClick={() => setSeating(seat.id)}
                    className={`py-2 px-3 rounded-lg border text-xs text-center transition-colors ${
                      seating === seat.id
                        ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                        : 'border-white/10 bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {lang === 'zh' ? seat.labelZh : seat.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder={lang === 'zh' ? '訂位貴賓姓名 *' : 'Name *'}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder={lang === 'zh' ? '確認信箱 *' : 'Email Address *'}
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <textarea
                rows={2}
                placeholder={lang === 'zh' ? '飲食過敏、紀念日慶祝或特殊要求...' : 'Dietary restrictions, anniversary or birthday notes...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-neutral-950 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg transition-all"
            >
              {lang === 'zh' ? '確認並完成座席預訂' : 'Confirm Table Reservation'}
            </button>
          </form>
        ) : (
          <div className="p-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-amber-400 mb-4" />
            <h3 className="font-serif-brand text-2xl font-bold text-white mb-2">
              {lang === 'zh' ? '座席預訂已確認' : 'Reservation Confirmed'}
            </h3>
            <p className="text-xs text-neutral-300 font-light mb-6 max-w-sm">
              {lang === 'zh'
                ? `尊貴的 ${guestName} 貴賓，已為您於 ${selectedVenue.name} 預訂 ${date} ${time} (${guests}位) 座席。`
                : `Dear ${guestName}, your reservation at ${selectedVenue.name} on ${date} at ${time} (${guests} guests) is confirmed.`}
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-white/15 text-xs space-y-1.5 w-full max-w-sm text-left mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-500">訂位代碼</span>
                <span className="font-mono text-amber-400 font-bold">{resId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">著裝建議</span>
                <span className="text-neutral-300">{lang === 'zh' ? selectedVenue.dressCodeZh : selectedVenue.dressCodeEn}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-2.5 text-xs font-semibold uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
            >
              {lang === 'zh' ? '關閉' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
