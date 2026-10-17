import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Heart, ShieldCheck, Truck, RefreshCw, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CategoryStrip from '../components/CategoryStrip';
import YarnDivider from '../components/YarnDivider';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, MAKER_STORY } from '../data/products';
import { useShop } from '../context/ShopContext';

export default function HomePage() {
  const { activeCategory } = useShop();

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Category Strip */}
      <section className="py-4">
        <CategoryStrip />
      </section>

      {/* Yarn Thread Divider 1 */}
      <YarnDivider />

      {/* 3. Fresh Off The Hook Product Grid */}
      <section className="py-12 sm:py-16 max-w-[1180px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">READY TO SHIP · HAND-CRAFTED</span>
            <h2
              style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.25rem)' }}
              className="font-fredoka font-medium text-[#3B2A4A] mt-1"
            >
              Fresh off the hook
            </h2>
            <p className="text-sm sm:text-base text-[#7A6A86] font-nunito mt-1">
              Each piece is meticulously crafted with soft milk cotton yarn. Grab yours or customize the colours!
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 font-fredoka font-medium text-[#FF6B5E] hover:text-[#e8584c] text-base group"
          >
            <span>View All Pieces</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Yarn Thread Divider 2 */}
      <YarnDivider color="#7ED9B5" />

      {/* 4. Custom Order Feature Banner */}
      <section className="py-12 sm:py-16 max-w-[1180px] mx-auto px-6 sm:px-12">
        <div className="relative rounded-3xl bg-[#FFEFD9] border-2 border-dashed border-[#FF6B5E]/50 p-8 sm:p-12 overflow-hidden shadow-sm">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF6B5E]/10 blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="eyebrow text-[#FF6B5E]">CUSTOM COMMISSIONS</span>
              <h2
                style={{ fontSize: 'clamp(1.4rem, 3.4vw, 2.25rem)' }}
                className="font-fredoka font-semibold text-[#3B2A4A] leading-tight"
              >
                Dream it. We will crochet it.
              </h2>
              <p className="text-[#7A6A86] font-nunito text-base leading-relaxed max-w-xl">
                Have a favorite video game character, beloved pet portrait, or a custom color palette in mind? Tell us what you want and send photos. We will handcraft your dream item and send updates straight to your WhatsApp!
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/customize"
                  className="px-6 py-3.5 rounded-full bg-[#FF6B5E] text-white font-fredoka font-medium text-base shadow-sm hover:bg-[#e8584c] transition-all flex items-center gap-2"
                >
                  <Scissors className="w-5 h-5 text-white" />
                  <span>Start a Custom Order</span>
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3.5 rounded-full bg-white text-[#3B2A4A] border border-[#F1DDC2] font-fredoka font-medium text-base hover:bg-[#FFF8EE] transition-all"
                >
                  <span>Meet The Maker</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-3 bg-white rounded-2xl shadow-lg border border-[#F1DDC2] rotate-3 max-w-[260px]">
                <img
                  src="/images/crochet_hero_flatlay.jpg"
                  alt="Custom order showcase"
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <div className="p-2 text-center">
                  <p className="font-caveat font-bold text-xl text-[#FF6B5E]">
                    Your idea, made real!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust & Craftsmanship Highlights */}
      <section className="py-12 max-w-[1180px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FFEFD9]/60 border border-[#F1DDC2] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FF6B5E]/15 text-[#FF6B5E] mx-auto flex items-center justify-center">
              <Heart className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-fredoka font-medium text-lg text-[#3B2A4A]">Slow Crafted by Hand</h3>
            <p className="text-xs text-[#7A6A86] font-nunito leading-relaxed">
              No factories or machine knitting. Every loop is gently hooked by our Bangalore artisan team.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFEFD9]/60 border border-[#F1DDC2] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FFC94A]/25 text-amber-700 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-fredoka font-medium text-lg text-[#3B2A4A]">Premium Cotton Yarns</h3>
            <p className="text-xs text-[#7A6A86] font-nunito leading-relaxed">
              Hypoallergenic, ultra-soft combed milk cotton yarn that holds shape without fraying.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#FFEFD9]/60 border border-[#F1DDC2] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#7ED9B5]/25 text-emerald-700 mx-auto flex items-center justify-center">
              <Truck className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="font-fredoka font-medium text-lg text-[#3B2A4A]">Carefully Boxed & Shipped</h3>
            <p className="text-xs text-[#7A6A86] font-nunito leading-relaxed">
              Wrapped in eco tissue paper, scented with lavender sprigs, and shipped safely all across India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
