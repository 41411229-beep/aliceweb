import React, { useState } from 'react';
import { ROOMS_DATA, RoomItem } from '../data/hotelData';
import { X, Calendar, Users, ShieldCheck, CheckCircle2, Sparkles, ChevronRight, Download, QrCode } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
  initialRoom?: RoomItem | null;
  initialState?: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    promoCode: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialRoom,
  initialState,
}) => {
  if (!isOpen) return null;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextThreeDays = new Date(today);
  nextThreeDays.setDate(nextThreeDays.getDate() + 3);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const [selectedRoom, setSelectedRoom] = useState<RoomItem>(initialRoom || ROOMS_DATA[1]);
  const [checkIn, setCheckIn] = useState<string>(initialState?.checkIn || formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(initialState?.checkOut || formatDate(nextThreeDays));
  const [adults, setAdults] = useState<number>(initialState?.adults || 2);
  const [children, setChildren] = useState<number>(initialState?.children || 0);

  // Bespoke Add-ons
  const [addonTransfer, setAddonTransfer] = useState(false);
  const [addonChampagne, setAddonChampagne] = useState(false);
  const [addonSpa, setAddonSpa] = useState(false);
  const [addonMixologist, setAddonMixologist] = useState(false);

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [pillowChoice, setPillowChoice] = useState('Swiss White Goose Down');
  const [specialRequests, setSpecialRequests] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  // Calculate nights
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);
  const diffTime = Math.max(1, Math.round((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
  const nights = isNaN(diffTime) || diffTime <= 0 ? 1 : diffTime;

  // Pricing calculations
  const roomTotal = selectedRoom.priceTwd * nights;
  const transferCost = addonTransfer ? 4500 : 0;
  const champagneCost = addonChampagne ? 8800 : 0;
  const spaCost = addonSpa ? 16400 : 0;
  const mixologistCost = addonMixologist ? 6000 : 0;
  const addonsTotal = transferCost + champagneCost + spaCost + mixologistCost;
  const subtotal = roomTotal + addonsTotal;
  const serviceCharge = Math.round(subtotal * 0.1);
  const grandTotal = subtotal + serviceCharge;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
    const randomCode = 'PYN-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(randomCode);
    setStep('confirmed');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <span className="font-serif-brand text-xl font-bold tracking-widest text-amber-400">PIYAN</span>
            <span className="text-xs text-neutral-400 tracking-wider">
              {lang === 'zh' ? '· 頂級預訂禮賓系統' : '· Luxury Reservation Engine'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleConfirmBooking} className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Room & Dates Selection */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                    {lang === 'zh' ? '01. 選擇奢華房型與套房' : '01. Select Room or Suite'}
                  </label>
                  <div className="grid grid-cols-1 gap-2.5">
                    {ROOMS_DATA.map((room) => {
                      const isSelected = room.id === selectedRoom.id;
                      return (
                        <div
                          key={room.id}
                          onClick={() => setSelectedRoom(room)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-amber-400/10 border-amber-400 text-white shadow-md'
                              : 'bg-white/5 border-white/10 hover:border-white/20 text-neutral-300'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-xs sm:text-sm text-white">
                              {lang === 'zh' ? room.nameZh : room.nameEn}
                            </div>
                            <div className="text-[11px] text-neutral-400 font-light mt-0.5">
                              {room.sizeSqm} m² · {lang === 'zh' ? room.viewZh : room.viewEn}
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-serif-brand font-bold text-amber-400 text-xs sm:text-sm tabular-nums">
                              NT$ {room.priceTwd.toLocaleString()}
                            </span>
                            <span className="text-[10px] text-neutral-500 block">
                              {lang === 'zh' ? '/ 每晚' : '/ night'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-semibold tracking-wider text-amber-300 uppercase block mb-1">
                      {lang === 'zh' ? '入住與退房日期' : 'Stay Dates'}
                    </span>
                    <div className="flex items-center gap-2 text-xs">
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="bg-transparent text-white font-medium focus:outline-none w-full"
                      />
                      <span className="text-neutral-500">→</span>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="bg-transparent text-white font-medium focus:outline-none w-full"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-amber-300 uppercase block mb-1">
                        {lang === 'zh' ? '房客人數' : 'Guest Count'}
                      </span>
                      <div className="text-xs font-semibold text-white">
                        {adults} {lang === 'zh' ? '成人' : 'Adults'}
                        {children > 0 && ` · ${children} ${lang === 'zh' ? '兒童' : 'Children'}`}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-neutral-800 text-xs hover:bg-neutral-700"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => setAdults(Math.min(4, adults + 1))}
                        className="w-6 h-6 rounded bg-neutral-800 text-xs hover:bg-neutral-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bespoke Add-on Enhancements */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'zh' ? '02. 專屬管家私享加選禮遇' : '02. Bespoke VIP Enhancements'}</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addonTransfer}
                          onChange={(e) => setAddonTransfer(e.target.checked)}
                          className="accent-amber-400 w-4 h-4 rounded"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {lang === 'zh' ? 'Maybach / Rolls-Royce 機場尊榮專車接送' : 'Maybach / Rolls-Royce Airport Chauffeur'}
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            {lang === 'zh' ? '航廈快速通關與專人車邊接待' : 'VIP Tarmac Fast-Track & Meet & Greet'}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-amber-400 tabular-nums">+ NT$ 4,500</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addonChampagne}
                          onChange={(e) => setAddonChampagne(e.target.checked)}
                          className="accent-amber-400 w-4 h-4 rounded"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {lang === 'zh' ? '抵達客房 Dom Pérignon 香檳與魚子醬禮遇' : 'Dom Pérignon Vintage & Imperial Caviar'}
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            {lang === 'zh' ? '頂級香檳冰鎮入房與主廚特製小點' : 'Chilled in-suite with chef canapés'}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-amber-400 tabular-nums">+ NT$ 8,800</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addonSpa}
                          onChange={(e) => setAddonSpa(e.target.checked)}
                          className="accent-amber-400 w-4 h-4 rounded"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {lang === 'zh' ? 'AWAY® Spa 雙人都會排毒煥彩芳療 (90分鐘)' : 'AWAY® Spa Metropolitan Glow for Two (90m)'}
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            {lang === 'zh' ? '火山黑石溫熱理療與私人水療池' : 'Volcanic basalt therapy & private suite'}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-amber-400 tabular-nums">+ NT$ 16,400</span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addonMixologist}
                          onChange={(e) => setAddonMixologist(e.target.checked)}
                          className="accent-amber-400 w-4 h-4 rounded"
                        />
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {lang === 'zh' ? '首席調酒師進駐套房特調 (1小時專屬)' : 'In-Suite Master Mixologist Session (1 hr)'}
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            {lang === 'zh' ? '現場調製3款訂製雞尾酒與輕食佐搭' : '3 custom signature craft cocktails'}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-amber-400 tabular-nums">+ NT$ 6,000</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Guest Information & Order Summary */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                    {lang === 'zh' ? '03. 貴賓入住登記資料' : '03. Guest Details'}
                  </label>

                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'zh' ? '姓名 (護照英文姓名或中文全名) *' : 'Full Name *'}
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="email"
                        required
                        placeholder={lang === 'zh' ? '電子信箱 *' : 'Email Address *'}
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                      <input
                        type="tel"
                        placeholder={lang === 'zh' ? '聯絡電話' : 'Phone Number'}
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-neutral-400 block mb-1">
                        {lang === 'zh' ? '客製舒眠枕頭菜單偏好：' : 'Sleep Pillow Preference:'}
                      </label>
                      <select
                        value={pillowChoice}
                        onChange={(e) => setPillowChoice(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Swiss White Goose Down">{lang === 'zh' ? '瑞士白鵝絨枕 (極致親膚雲朵感)' : 'Swiss White Goose Down'}</option>
                        <option value="Ergonomic Cooling Memory Gel">{lang === 'zh' ? '人體工學凝膠記憶枕 (深層涼感支撐)' : 'Ergonomic Cooling Memory Gel'}</option>
                        <option value="Organic Lavender Buckwheat">{lang === 'zh' ? '天然有機薰衣草蕎麥枕 (舒緩安神香氛)' : 'Organic Lavender Buckwheat'}</option>
                        <option value="Hypoallergenic Silk">{lang === 'zh' ? '抗敏頂級雙層天然蠶絲枕 (防蟎養顏護膚)' : 'Hypoallergenic Mulberry Silk'}</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        rows={2}
                        placeholder={lang === 'zh' ? '特殊慶祝、飲食禁忌或抵達需求...' : 'Special requests, celebrations, dietary restrictions...'}
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        className="w-full bg-neutral-950 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>
                  </div>

                  {/* Pricing Breakdown Sheet */}
                  <div className="mt-6 p-4 rounded-2xl bg-neutral-950/80 border border-white/10 space-y-2 text-xs">
                    <div className="flex justify-between text-neutral-400">
                      <span>{selectedRoom.nameZh} × {nights} {lang === 'zh' ? '晚' : 'nights'}</span>
                      <span className="tabular-nums text-white">NT$ {roomTotal.toLocaleString()}</span>
                    </div>

                    {addonsTotal > 0 && (
                      <div className="flex justify-between text-neutral-400">
                        <span>{lang === 'zh' ? '專屬禮遇加購' : 'Bespoke Enhancements'}</span>
                        <span className="tabular-nums text-white">NT$ {addonsTotal.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-neutral-400">
                      <span>{lang === 'zh' ? '服務費與稅額 (10%)' : 'Service & Local Taxes (10%)'}</span>
                      <span className="tabular-nums text-white">NT$ {serviceCharge.toLocaleString()}</span>
                    </div>

                    <div className="border-t border-white/15 pt-2 flex justify-between items-baseline text-sm font-bold">
                      <span className="text-amber-400">{lang === 'zh' ? '應付總額 (TWD)' : 'Total Amount'}</span>
                      <span className="font-serif-brand text-lg text-amber-400 tabular-nums">
                        NT$ {grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold tracking-widest uppercase text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-xl shadow-amber-400/25 transition-all text-center"
                >
                  {lang === 'zh' ? '確認立即預訂' : 'Confirm Luxury Reservation'}
                </button>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmed Reservation Voucher Pass */
          <div className="p-8 sm:p-12 text-center max-w-lg mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2">
              {lang === 'zh' ? '預訂已確認 · 專屬管家就緒' : 'RESERVATION CONFIRMED'}
            </div>

            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white mb-2">
              {lang === 'zh' ? '期待在台北與您相遇' : 'Welcome to PIYAN Taipei'}
            </h3>

            <p className="text-xs text-neutral-300 font-light max-w-sm mb-6">
              {lang === 'zh'
                ? `尊貴的 ${guestName} 貴賓，您的專屬管家團隊已記錄您的下榻偏好。確認信件已同步發送至 ${guestEmail}。`
                : `Dear ${guestName}, your master butler team has curated your arrival itinerary. A confirmation dispatch has been sent to ${guestEmail}.`}
            </p>

            {/* Voucher Card */}
            <div className="w-full p-6 rounded-2xl bg-neutral-950 border border-white/15 text-left mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block tracking-wider">
                    {lang === 'zh' ? '預訂專屬代碼' : 'Confirmation Code'}
                  </span>
                  <span className="font-mono text-base font-bold text-amber-400 tracking-wider">
                    {confirmationCode}
                  </span>
                </div>
                <QrCode className="w-10 h-10 text-neutral-300" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-400">{lang === 'zh' ? '預訂房型' : 'Suite'}</span>
                  <span className="font-medium text-white">{lang === 'zh' ? selectedRoom.nameZh : selectedRoom.nameEn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">{lang === 'zh' ? '入住日期' : 'Dates'}</span>
                  <span className="text-white tabular-nums">{checkIn} → {checkOut} ({nights} {lang === 'zh' ? '晚' : 'nights'})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">{lang === 'zh' ? '舒眠枕頭' : 'Pillow'}</span>
                  <span className="text-neutral-200">{pillowChoice}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 font-bold">
                  <span className="text-amber-400">{lang === 'zh' ? '總預訂額' : 'Grand Total'}</span>
                  <span className="text-amber-400 tabular-nums">NT$ {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow"
            >
              {lang === 'zh' ? '完成並返回首頁' : 'Return to Hotel'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
