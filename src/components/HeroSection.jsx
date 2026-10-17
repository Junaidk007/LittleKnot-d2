import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Scissors, Smile } from 'lucide-react';
import DanglingYarnStrands from './DanglingYarnStrands';
import HangingCharm from './HangingCharm';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
      {/* Decorative Dangling Yarn Strands from top */}
      <DanglingYarnStrands className="absolute top-0 right-1/3 hidden sm:block pointer-events-none z-20" />
      
      {/* Floating Charm in Hero Corner */}
      <HangingCharm className="absolute -top-2 left-6 sm:left-14 hidden md:block z-20" size="w-12 sm:w-16" />

      {/* Background Soft Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#FFEFD9] blur-3xl -z-10 pointer-events-none opacity-70" />
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-[#7ED9B5]/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-left">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFD9] border border-[#F1DDC2]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B5E]" />
            <span className="eyebrow font-bold">
              HANDMADE WITH LOVE · ONE STITCH AT A TIME
            </span>
          </motion.div>

          {/* Big Fredoka H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 5.8vw, 3.75rem)' }}
            className="font-fredoka font-semibold text-[#3B2A4A] tracking-tight leading-[1.08]"
          >
            Soft, bright, and <br />
            <span className="text-[#FF6B5E] relative inline-block">
              made just for you.
              <svg
                viewBox="0 0 280 18"
                fill="none"
                className="absolute -bottom-2 left-0 w-full h-3 text-[#FFC94A]"
              >
                <path
                  d="M4 12 C 70 4, 150 16, 276 6"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontSize: 'clamp(0.925rem, 2.2vw, 1.125rem)' }}
            className="font-nunito text-[#7A6A86] leading-relaxed max-w-xl"
          >
            Cute crochet bags, keychains, toys and more, every piece stitched by hand.
            Pick a ready-made one or tell us your dream design and we will make it.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            {/* CTA 1: Shop Crochets */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/shop"
                style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.125rem)' }}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#FF6B5E] text-white font-fredoka font-medium flex items-center gap-2.5 shadow-md hover:bg-[#e8584c] transition-all"
              >
                <span>Shop Crochets</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* CTA 2: Make It Custom */}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                to="/customize"
                style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.125rem)' }}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#FFEFD9] text-[#3B2A4A] border-2 border-[#F1DDC2] font-fredoka font-medium flex items-center gap-2.5 hover:border-[#FF6B5E] hover:text-[#FF6B5E] transition-all"
              >
                <Scissors className="w-5 h-5 text-[#FF6B5E]" />
                <span>Make It Custom</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Cute Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#7A6A86] font-nunito"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7ED9B5]" />
              <span>100% Breathable Milk Cotton</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FFC94A]" />
              <span>Direct WhatsApp Ordering</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6B5E]" />
              <span>Custom Sizes & Colors</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3-Photo Collage with Rotations */}
        <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
          {/* Card 1: Flatlay Main (Center-bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="relative w-64 sm:w-72 aspect-4/3 rounded-3xl p-2.5 bg-white shadow-xl border border-[#F1DDC2] z-10"
          >
            <img
              src="/images/crochet_hero_flatlay.jpg"
              alt="Cosy crochet studio flatlay"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-[#FFC94A] text-[#3B2A4A] font-caveat font-bold text-lg px-3 py-1 rounded-full shadow-md transform rotate-6 border border-white">
              Hand-knit bliss ✨
            </div>
          </motion.div>

          {/* Card 2: Daisy Tote (Top-left, rotated -6deg) */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -7 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ rotate: -2, scale: 1.05 }}
            className="absolute -top-4 sm:top-2 -left-2 sm:left-4 w-44 sm:w-52 aspect-square rounded-3xl p-2 bg-white shadow-lg border border-[#F1DDC2] z-20"
          >
            <img
              src="/images/daisy_tote_bag.jpg"
              alt="Handmade daisy granny square tote"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute top-2 left-2 bg-[#FF6B5E] text-white font-fredoka text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs">
              Daisy Tote
            </div>
          </motion.div>

          {/* Card 3: Cute Bunny Plush (Bottom-right, rotated 8deg) */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            whileHover={{ rotate: 1, scale: 1.05 }}
            className="absolute -bottom-4 sm:bottom-0 -right-2 sm:right-2 w-44 sm:w-48 aspect-square rounded-3xl p-2 bg-white shadow-lg border border-[#F1DDC2] z-20"
          >
            <img
              src="/images/crochet_bunny_toy.jpg"
              alt="Soft amigurumi bunny toy"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-2 right-2 bg-[#7ED9B5] text-[#3B2A4A] font-fredoka text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
              Cute Amigurumi
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
