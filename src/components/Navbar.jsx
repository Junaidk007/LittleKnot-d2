import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Menu, X, Sparkles, Scissors } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import HangingCharm from './HangingCharm';

export default function Navbar() {
  const location = useLocation();
  const { cartCount, favorites, setIsCartOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Customize', path: '/customize' },
    { name: 'Favorites', path: '/favorites' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path) => {
    if (path === '/shop' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF8EE]/95 backdrop-blur-md border-b border-[#F1DDC2] shadow-xs">
      {/* Hanging charm dangling from top edge - positioned cleanly to never overlap buttons */}
      <HangingCharm
        className="absolute top-0 right-32 sm:right-36 md:right-40 z-30 pointer-events-none hidden xs:block"
        size="w-9 sm:w-12 md:w-14"
      />

      <div className="max-w-[1180px] mx-auto px-3 xs:px-4 sm:px-8 md:px-10 h-16 sm:h-[74px] flex items-center justify-between relative">
        {/* Brand Logo Left */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
          <motion.div
            whileHover={{ rotate: 18, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF6B5E] flex items-center justify-center text-white shadow-xs border-2 border-[#FFF8EE] shrink-0"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC94A]" />
          </motion.div>
          <div className="flex flex-col min-w-0">
            <span
              className="font-fredoka font-semibold text-[#3B2A4A] tracking-tight group-hover:text-[#FF6B5E] transition-colors leading-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(0.925rem, 3.6vw, 1.45rem)' }}
            >
              Little Knot Studio
            </span>
            <span
              className="eyebrow text-[#FF6B5E] leading-none mt-0.5 font-bold whitespace-nowrap"
              style={{
                fontSize: 'clamp(0.525rem, 1.8vw, 0.6875rem)',
                letterSpacing: 'clamp(0.06em, 0.3vw, 0.14em)'
              }}
            >
              HANDMADE CROCHET
            </span>
          </div>
        </Link>

        {/* Links Centre (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                style={{ fontSize: 'clamp(0.85rem, 1.1vw, 0.975rem)' }}
                className={`relative px-3.5 lg:px-4 py-2 rounded-full font-nunito font-semibold transition-all duration-200 ${
                  active
                    ? 'text-[#FF6B5E] bg-[#FFEFD9]'
                    : 'text-[#3B2A4A] hover:text-[#FF6B5E] hover:bg-[#FFEFD9]/60'
                }`}
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#FF6B5E] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Icons Right */}
        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 shrink-0">
          {/* Favorites Link */}
          <Link
            to="/favorites"
            className="relative p-2 sm:p-2.5 rounded-full text-[#3B2A4A] hover:text-[#FF6B5E] hover:bg-[#FFEFD9] transition-colors"
            title="Your Favorites"
            aria-label="View Favorites"
          >
            <Heart className={`w-4 h-4 xs:w-5 xs:h-5 ${favorites.length > 0 ? 'fill-[#FF6B5E] text-[#FF6B5E]' : ''}`} />
            {favorites.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ fontSize: 'clamp(0.55rem, 1.6vw, 0.625rem)' }}
                className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 min-w-[15px] h-[15px] sm:min-w-4 sm:h-4 px-0.5 bg-[#FF6B5E] text-white font-bold rounded-full flex items-center justify-center font-nunito shadow-xs"
              >
                {favorites.length}
              </motion.span>
            )}
          </Link>

          {/* Cart Icon & Count Badge */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 sm:p-2.5 rounded-full bg-[#FFEFD9] text-[#3B2A4A] hover:text-[#FF6B5E] border border-[#F1DDC2] flex items-center gap-1 sm:gap-1.5 transition-colors"
            aria-label="Open Shopping Basket"
          >
            <ShoppingBag className="w-4 h-4 xs:w-5 xs:h-5 text-[#FF6B5E]" />
            <AnimatePresence mode="wait">
              {cartCount > 0 ? (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.5, y: -4 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.5 }}
                  style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)' }}
                  className="px-1.5 py-0.2 bg-[#FF6B5E] text-white font-bold rounded-full font-nunito shadow-xs leading-none"
                >
                  {cartCount}
                </motion.span>
              ) : null}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-xl text-[#3B2A4A] hover:bg-[#FFEFD9] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 xs:w-6 xs:h-6" />
            ) : (
              <Menu className="w-5 h-5 xs:w-6 xs:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFF8EE] border-b border-[#F1DDC2] px-5 sm:px-6 py-4 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: 'clamp(1rem, 3.8vw, 1.25rem)' }}
                className={`px-4 py-2.5 rounded-xl font-fredoka transition-all ${
                  isActive(link.path)
                    ? 'bg-[#FF6B5E] text-white shadow-xs'
                    : 'text-[#3B2A4A] hover:bg-[#FFEFD9]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
