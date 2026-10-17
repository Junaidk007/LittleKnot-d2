import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart, MessageCircle, Scissors, ShieldCheck, Sun } from 'lucide-react';

function InstagramIcon({ className = "w-5 h-5 text-[#FF6B5E]" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { MAKER_STORY } from '../data/products';
import YarnDivider from '../components/YarnDivider';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 max-w-[1180px] mx-auto px-6 sm:px-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
        <span className="eyebrow">OUR STORY & VALUES</span>
        <h1
          style={{ fontSize: 'clamp(1.85rem, 5vw, 3rem)' }}
          className="font-fredoka font-semibold text-[#3B2A4A]"
        >
          Meet Little Knot Studio
        </h1>
        <p
          style={{ fontSize: 'clamp(1.35rem, 3.5vw, 2rem)' }}
          className="font-caveat font-bold text-[#FF6B5E]"
        >
          "{MAKER_STORY.tagline}"
        </p>
      </div>

      {/* Main Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        {/* Photo Left */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative p-3.5 bg-white rounded-3xl border border-[#F1DDC2] shadow-xl rotate-[-2deg] max-w-sm">
            <img
              src="/images/crochet_hero_flatlay.jpg"
              alt="Meera at Little Knot Studio workspace"
              className="w-full aspect-4/3 object-cover rounded-2xl"
            />
            <div className="p-3 text-center">
              <h3 className="font-fredoka font-medium text-lg text-[#3B2A4A]">
                {MAKER_STORY.name}
              </h3>
              <p className="text-xs text-[#7A6A86] font-nunito">
                {MAKER_STORY.location}
              </p>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#FF6B5E] text-white font-caveat font-bold text-xl px-4 py-1.5 rounded-full shadow-md rotate-4">
              Slow crafted with love 🧶
            </div>
          </div>
        </div>

        {/* Story Right */}
        <div className="lg:col-span-7 space-y-5">
          <h2 className="font-fredoka font-medium text-3xl text-[#3B2A4A] leading-tight">
            From a single skein of yarn to cherished keepsake gifts.
          </h2>
          <p className="font-nunito text-[#7A6A86] text-base leading-relaxed">
            {MAKER_STORY.bio}
          </p>
          <p className="font-nunito text-[#7A6A86] text-base leading-relaxed">
            In a fast-fashion world of automated machinery, we believe in the warmth of items made by real human hands. Every single petal on our daisy totes, every embroidered smile on our amigurumi plushies, and every custom bag charm carries genuine care and joy.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${MAKER_STORY.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#FF6B5E] text-white font-fredoka font-medium text-base shadow-sm hover:bg-[#e8584c] transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#FFC94A]" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white text-[#3B2A4A] border border-[#F1DDC2] font-fredoka font-medium text-base hover:bg-[#FFEFD9] transition-colors flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5 text-[#FF6B5E]" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <YarnDivider />

      {/* Craftsmanship Pillars */}
      <div className="py-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="eyebrow">QUALITY & MATERIALS</span>
          <h2 className="font-fredoka font-medium text-3xl text-[#3B2A4A] mt-1">
            Why Our Crochets Last A Lifetime
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#FFEFD9] border border-[#F1DDC2] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#FF6B5E] flex items-center justify-center shadow-xs">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-fredoka font-medium text-xl text-[#3B2A4A]">Zero Pill Milk Cotton</h3>
            <p className="text-xs font-nunito text-[#7A6A86] leading-relaxed">
              We exclusively source multi-ply combed milk cotton yarn. It is silky smooth, lightweight, breathable, and doesn't unravel or pill over time.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFEFD9] border border-[#F1DDC2] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#FF6B5E] flex items-center justify-center shadow-xs">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="font-fredoka font-medium text-xl text-[#3B2A4A]">Tight Hand Tension</h3>
            <p className="text-xs font-nunito text-[#7A6A86] leading-relaxed">
              Our stitch tension is calibrated so bag handles will never sag under weight and amigurumi stuffing never peeks through the crochet stitches.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#FFEFD9] border border-[#F1DDC2] space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#FF6B5E] flex items-center justify-center shadow-xs">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-fredoka font-medium text-xl text-[#3B2A4A]">Custom Commission Care</h3>
            <p className="text-xs font-nunito text-[#7A6A86] leading-relaxed">
              Before shipping any custom order, we send you high-resolution photos and video previews on WhatsApp to ensure it matches your dream vision perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
