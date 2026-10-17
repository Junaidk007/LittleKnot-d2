import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, MessageCircle, Mail, MapPin } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
import { MAKER_STORY } from '../data/products';

export default function Footer() {
  return (
    <footer className="relative bg-[#FF6B5E] text-white pt-20 pb-12 mt-20 scallop-top">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/20">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#FF6B5E] flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-[#FF6B5E]" />
              </div>
              <span
                style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}
                className="font-fredoka font-semibold text-white"
              >
                Little Knot Studio
              </span>
            </div>

            <p
              style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)' }}
              className="font-caveat font-bold text-[#FFEFD9] max-w-sm leading-snug"
            >
              "{MAKER_STORY.tagline}"
            </p>

            <p className="font-nunito text-sm text-white/90 leading-relaxed max-w-md">
              Every plushie, tote, and charm is hand-stitched with love, patience, and 100% skin-safe milk cotton yarn in our cozy sunny studio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-fredoka font-medium text-lg text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-nunito font-semibold text-white/85">
              <li>
                <Link to="/shop" className="hover:text-white hover:underline transition-all">
                  Shop All Pieces
                </Link>
              </li>
              <li>
                <Link to="/customize" className="hover:text-white hover:underline transition-all">
                  Custom Orders & Commissions
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-white hover:underline transition-all">
                  Your Favorites
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-all">
                  About the Maker
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact & Social */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-fredoka font-medium text-lg text-white">
              Say Hello
            </h4>
            <p className="text-xs text-white/80 font-nunito">
              Have a special custom request? Chat directly with Meera on WhatsApp:
            </p>

            <div className="pt-1 flex flex-col gap-2.5 text-sm font-nunito">
              <a
                href={`https://wa.me/${MAKER_STORY.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FFC94A]" />
                <span>+91 98765 43210 (WhatsApp)</span>
              </a>

              <a
                href={`https://instagram.com`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#FFC94A]" />
                <span>{MAKER_STORY.instagramHandle}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-white/80 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#FFEFD9]" />
                <span>{MAKER_STORY.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-nunito text-white/80">
          <p>© 2026 Little Knot Studio · All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>& soft crochet loops</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
