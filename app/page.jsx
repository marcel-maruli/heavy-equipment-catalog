'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { products, categories } from '../src/data/catalog';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import CategoryRail from '../src/components/CategoryRail';
import Catalog from '../src/components/Catalog';
import SocialStrip from '../src/components/SocialStrip';
import Footer from '../src/components/Footer';
import DetailModal from '../src/components/DetailModal';
import Icon from '../src/components/Icon';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [selected, setSelected] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const filtered = useMemo(() => products.filter(product => (!category || product.category === category) && (!query || `${product.model} ${product.brand} ${product.category}`.toLowerCase().includes(query.toLowerCase()))), [category, query]);
  const pickCategory = value => { setCategory(value === category ? '' : value); setTimeout(() => document.getElementById('catalog')?.scrollIntoView({ behavior:'smooth' }), 0); };
  const reset = () => { setCategory(''); setQuery(''); };
  return <>
    <Header onSearch={() => setSearchOpen(true)} />
    <AnimatePresence>{searchOpen && <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} className="fixed right-6 top-[82px] z-30 flex w-[min(400px,calc(100vw-3rem))] items-center gap-3 border border-black/10 bg-white p-4 shadow-xl md:right-[5vw]"><Icon name="search" size={17}/><input autoFocus value={query} onChange={event=>setQuery(event.target.value)} placeholder="Cari model, brand, atau kategori..." className="w-full bg-transparent text-xs outline-none"/><button onClick={()=>setSearchOpen(false)} aria-label="Tutup pencarian"><Icon name="close" size={17}/></button></motion.div>}</AnimatePresence>
    <main><Hero onExplore={() => document.getElementById('catalog')?.scrollIntoView({ behavior:'smooth' })}/><CategoryRail categories={categories} active={category} onPick={pickCategory}/><Catalog products={filtered} onSelect={setSelected} onReset={reset}/><SocialStrip/></main>
    <Footer />
    <DetailModal product={selected} onClose={() => setSelected(null)} />
  </>;
}
