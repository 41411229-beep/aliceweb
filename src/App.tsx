/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickBookingBar } from './components/QuickBookingBar';
import { RoomsSection } from './components/RoomsSection';
import { DiningSection } from './components/DiningSection';
import { WellnessSection } from './components/WellnessSection';
import { BespokeServiceSection } from './components/BespokeServiceSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { DiningModal } from './components/DiningModal';
import { ConciergeModal } from './components/ConciergeModal';
import { RoomDetailModal } from './components/RoomDetailModal';

import { RoomItem, DiningItem, BespokeService, SpaTreatment, ROOMS_DATA } from './data/hotelData';

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  // Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPreselectRoom, setBookingPreselectRoom] = useState<RoomItem | null>(null);
  const [bookingQuickState, setBookingQuickState] = useState<{
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    promoCode: string;
  } | undefined>(undefined);

  const [isDiningModalOpen, setIsDiningModalOpen] = useState(false);
  const [selectedDiningVenue, setSelectedDiningVenue] = useState<DiningItem | null>(null);

  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<BespokeService | null>(null);

  const [isRoomDetailOpen, setIsRoomDetailOpen] = useState(false);
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<RoomItem | null>(null);

  // Handlers
  const handleOpenGeneralBooking = () => {
    setBookingPreselectRoom(ROOMS_DATA[1]);
    setIsBookingOpen(true);
  };

  const handleQuickBookingSearch = (state: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    promoCode: string;
  }) => {
    setBookingQuickState(state);
    setBookingPreselectRoom(ROOMS_DATA[1]);
    setIsBookingOpen(true);
  };

  const handleSelectRoomForBooking = (room: RoomItem) => {
    setBookingPreselectRoom(room);
    setIsBookingOpen(true);
  };

  const handleOpenRoomDetail = (room: RoomItem) => {
    setSelectedRoomDetail(room);
    setIsRoomDetailOpen(true);
  };

  const handleReserveTable = (venue: DiningItem) => {
    setSelectedDiningVenue(venue);
    setIsDiningModalOpen(true);
  };

  const handleBookSpaTreatment = (_treatment: SpaTreatment) => {
    setSelectedService({
      id: 'spa-custom',
      titleZh: `AWAY® SPA 水療預約: ${_treatment.nameZh}`,
      titleEn: `AWAY® SPA Ritual: ${_treatment.nameEn}`,
      categoryZh: '頂級水療芳療',
      categoryEn: 'Wellness Ritual',
      descriptionZh: _treatment.descriptionZh,
      descriptionEn: _treatment.descriptionEn,
      icon: 'Sparkles',
    });
    setIsConciergeOpen(true);
  };

  const handleRequestConcierge = (service?: BespokeService) => {
    setSelectedService(service || null);
    setIsConciergeOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* 3-Zone Top Bar Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        onOpenBooking={handleOpenGeneralBooking}
        activeSection=""
      />

      {/* Main Experience */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero
          lang={lang}
          onExploreSuites={() => scrollToSection('rooms')}
          onExploreButler={() => scrollToSection('services')}
        />

        {/* Mandarin Oriental Style Floating Booking Bar */}
        <QuickBookingBar
          lang={lang}
          onCheckRates={handleQuickBookingSearch}
        />

        {/* 01. Accommodations Showcase */}
        <RoomsSection
          lang={lang}
          onSelectRoomForBooking={handleSelectRoomForBooking}
          onOpenRoomDetail={handleOpenRoomDetail}
        />

        {/* 02. Fine Dining & High-Energy Mixology */}
        <DiningSection
          lang={lang}
          onReserveTable={handleReserveTable}
        />

        {/* 03. Wellness & AWAY® Spa & WET® Deck */}
        <WellnessSection
          lang={lang}
          onBookSpa={handleBookSpaTreatment}
        />

        {/* 04. Meticulous Butler & Whatever/Whenever® Experience */}
        <BespokeServiceSection
          lang={lang}
          onRequestConcierge={handleRequestConcierge}
        />

        {/* 05. Celebrations & Pillarless Ballroom */}
        <EventsSection lang={lang} />

        {/* 06. Visual Atmosphere Tour */}
        <GallerySection lang={lang} />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer lang={lang} />

      {/* Interactive Reservation & Service Engines */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        lang={lang}
        initialRoom={bookingPreselectRoom}
        initialState={bookingQuickState}
      />

      <DiningModal
        isOpen={isDiningModalOpen}
        onClose={() => setIsDiningModalOpen(false)}
        lang={lang}
        initialVenue={selectedDiningVenue}
      />

      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        lang={lang}
        service={selectedService}
      />

      <RoomDetailModal
        isOpen={isRoomDetailOpen}
        onClose={() => setIsRoomDetailOpen(false)}
        room={selectedRoomDetail}
        lang={lang}
        onBookRoom={handleSelectRoomForBooking}
      />
    </div>
  );
}
