'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import Reveal from './Reveal';

const slides = [
  {
    image: '/assets/banners/hero-wheel-loader.png',
    eyebrow: 'WHEEL LOADER / 01',
    title: 'Kerja lebih\nbertenaga.',
    detail: 'Wheel loader tangguh untuk material handling, quarry, dan proyek berskala besar.',
  },
  {
    image: '/assets/banners/hero-excavator.png',
    eyebrow: 'EXCAVATOR / 02',
    title: 'Gali lebih\ndalam.',
    detail: 'Excavator presisi dengan daya tahan kerja untuk medan yang menuntut.',
  },
  {
    image: '/assets/banners/hero-grader.png',
    eyebrow: 'MOTOR GRADER / 03',
    title: 'Bangun arah\nselanjutnya.',
    detail: 'Motor grader untuk hasil akhir yang rapi, stabil, dan konsisten.',
  },
];

export default function Hero({ onExplore }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[active];

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = direction => setActive(current => (current + direction + slides.length) % slides.length);

  return (
    <section id="top" className="border-b border-black/10">
      <div className="grid min-h-[650px] md:grid-cols-[42%_58%]">
        <div className="px-6 py-20 md:pl-[10vw] md:pr-8 md:pt-24">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[1.2px] text-[#777a71]">MITRA ALAT BERAT TERPERCAYA</p>
            <h1 className="mt-6 text-[clamp(4.2rem,7.5vw,6.6rem)] font-bold leading-[.9] tracking-[-.07em]">Powering<br /><em className="text-[#858981] not-italic">Progress.</em></h1>
            <p className="mt-8 max-w-[345px] text-sm leading-7 text-[#60635c]">Solusi alat berat untuk proyek yang bergerak lebih jauh. Temukan mesin yang bekerja sekeras Anda.</p>
            <button onClick={onExplore} className="mt-8 inline-flex items-center gap-5 bg-[#d8f35a] px-5 py-4 text-[11px] font-bold transition hover:-translate-y-1 hover:shadow-[5px_5px_0_#171a17]">Jelajahi katalog <Icon name="arrow" size={15} /></button>
            <div className="mt-14 flex gap-8 border-t border-black/10 pt-4 font-mono text-[10px] text-[#81847b]"><span><strong className="block font-sans text-lg text-[#171a17]">40</strong>model tersedia</span><span><strong className="block font-sans text-lg text-[#171a17]">2</strong>brand pilihan</span></div>
          </Reveal>
        </div>

        <div className="relative min-h-[470px] overflow-hidden bg-[#c9cec3]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <AnimatePresence mode="wait">
            <motion.img key={slide.image} src={slide.image} alt={slide.eyebrow} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .7 }} className="absolute inset-0 h-full w-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#171a17]/55 via-transparent to-transparent" />
          <div className="absolute left-6 top-7 font-mono text-[10px] tracking-[1.2px] text-white/80 md:left-10">{slide.eyebrow}</div>
          <div className="absolute bottom-24 left-6 max-w-[220px] text-white md:left-10"><p className="whitespace-pre-line text-4xl font-bold leading-[.92] tracking-[-.06em] md:text-5xl">{slide.title}</p><p className="mt-4 text-xs leading-5 text-white/80">{slide.detail}</p></div>
          <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between md:left-10 md:right-10">
            <div className="flex gap-2" aria-label="Pilih slide banner">{slides.map((item, index) => <button key={item.image} onClick={() => setActive(index)} aria-label={`Slide ${index + 1}`} className={`h-1 transition-all ${index === active ? 'w-10 bg-[#d8f35a]' : 'w-5 bg-white/50'}`} />)}</div>
            <div className="flex gap-2"><button onClick={() => move(-1)} aria-label="Banner sebelumnya" className="grid h-9 w-9 place-items-center border border-white/50 text-white transition hover:bg-white hover:text-[#171a17]"><Icon name="arrow" size={15} /></button><button onClick={() => move(1)} aria-label="Banner berikutnya" className="grid h-9 w-9 place-items-center border border-white/50 text-white transition hover:bg-white hover:text-[#171a17]"><span className="rotate-180"><Icon name="arrow" size={15} /></span></button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
