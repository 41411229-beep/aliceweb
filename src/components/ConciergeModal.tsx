import React, { useState } from 'react';
import { BespokeService } from '../data/hotelData';
import { X, Sparkles, BellRing, CheckCircle2, Send } from 'lucide-react';

interface ConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'zh' | 'en';
  service?: BespokeService | null;
}

export const ConciergeModal: React.FC<ConciergeModalProps> = ({
  isOpen,
  onClose,
  lang,
  service,
}) => {
  if (!isOpen) return null;

  const [selectedService, setSelectedService] = useState<string>(
    service?.titleZh || '24/7 WHATEVER/WHENEVER® 專屬管家'
  );
  const [guestName, setGuestName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [timePreference, setTimePreference] = useState('即刻服務 (Immediately)');
  const [requestDetails, setRequestDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dispatchId, setDispatchId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName) return;
    setDispatchId('BUTLER-' + Math.floor(1000 + Math.random() * 9000));
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 text-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <BellRing className="w-5 h-5 text-amber-400" />
            <span className="font-serif-brand text-lg font-bold text-white">
              {lang === 'zh' ? 'WHATEVER / WHENEVER® 呼叫管家' : 'Whatever/Whenever® Butler Summon'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-1.5">
                {lang === 'zh' ? '禮遇服務項目' : 'Requested Service'}
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="24/7 WHATEVER/WHENEVER® 專屬管家">{lang === 'zh' ? '24/7 專屬管家個人即時諮詢' : '24/7 Master Butler Consultation'}</option>
                <option value="頂級舒眠香氛與 6 款客製枕頭菜單">{lang === 'zh' ? '訂製舒眠香氛與客製枕頭菜單' : 'Bespoke Sleep Aroma & Pillow Menu'}</option>
                <option value="Rolls-Royce & Maybach 奢華專車接送">{lang === 'zh' ? 'Maybach / Rolls-Royce 奢華尊榮接送' : 'Rolls-Royce / Maybach Airport Transfer'}</option>
                <option value="客房私人調酒師進駐調飲">{lang === 'zh' ? '客房私人調酒師進駐調飲 (In-Suite Mixology)' : 'In-Suite Private Mixologist'}</option>
                <option value="W Insider 台北隱密藝術與夜行導覽">{lang === 'zh' ? 'W Insider 台北私人秘境導覽' : 'W Insider Curated Night Tour'}</option>
                <option value="行李精緻開箱整理與高級衣物護理">{lang === 'zh' ? '行李開箱整燙與高級衣物護理' : 'Unpacking Ritual & Couture Steaming'}</option>
                <option value="其他客製專屬願望">{lang === 'zh' ? '其他客製專屬渴望 (Custom Whatever)' : 'Other Custom Desire'}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                  {lang === 'zh' ? '貴賓尊姓大名 *' : 'Guest Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'zh' ? '例如：林先生 / 陳小姐' : 'e.g. Mr. Chen'}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                  {lang === 'zh' ? '房號或預訂編號' : 'Room # or Booking Ref'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'zh' ? '例如：Suite 1802 或 待入住' : 'e.g. Suite 1802'}
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                {lang === 'zh' ? '期望執行時間' : 'Desired Timeline'}
              </label>
              <select
                value={timePreference}
                onChange={(e) => setTimePreference(e.target.value)}
                className="w-full bg-neutral-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="即刻服務 (Immediately)">{lang === 'zh' ? '即刻服務 (15分鐘內管家聯絡)' : 'Immediately (Within 15 minutes)'}</option>
                <option value="抵達入住前備妥">{lang === 'zh' ? '抵達入住前備妥 (Pre-Arrival Styling)' : 'Before Arrival'}</option>
                <option value="今晚夜床服務時段">{lang === 'zh' ? '今晚夜床服務時段 (Turndown Service)' : 'Evening Turndown'}</option>
                <option value="明天早晨">{lang === 'zh' ? '明天早晨指定時刻' : 'Tomorrow Morning'}</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-medium text-neutral-400 block mb-1.5">
                {lang === 'zh' ? '詳細要求說明 (無論多麼獨特，請盡情告知)' : 'Specific Details (Whatever your wish)'}
              </label>
              <textarea
                rows={3}
                placeholder={lang === 'zh' ? '例如：希望在晚間 9 點請調酒師進駐套房調配兩杯烏龍琴酒特調；或是偏好天然有機薰衣草枕頭...' : 'e.g. Prefer in-suite mixology at 21:00 with tea-infused cocktails...'}
                value={requestDetails}
                onChange={(e) => setRequestDetails(e.target.value)}
                className="w-full bg-neutral-950 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'zh' ? '即刻傳送專屬管家團隊' : 'Transmit to Master Butler'}</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-amber-400 mb-4" />
            <h3 className="font-serif-brand text-2xl font-bold text-white mb-2">
              {lang === 'zh' ? '專屬管家已接收您的渴望' : 'Wish Dispatched to Master Butler'}
            </h3>
            <p className="text-xs text-neutral-300 font-light mb-6 max-w-sm">
              {lang === 'zh'
                ? `尊貴的 ${guestName} 貴賓，PIYAN 專屬管家正在為您細心打點「${selectedService}」。管家將於指定時間親自為您奉上。`
                : `Dear ${guestName}, your Whatever/Whenever request for "${selectedService}" is being flawlessly prepared.`}
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-white/15 text-xs space-y-1.5 w-full max-w-sm text-left mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-500">禮賓專案編號</span>
                <span className="font-mono text-amber-400 font-bold">{dispatchId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">服務時間</span>
                <span className="text-neutral-300">{timePreference}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-2.5 text-xs font-semibold uppercase text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
            >
              {lang === 'zh' ? '完成' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
