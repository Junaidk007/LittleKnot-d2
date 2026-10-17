import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function FavoritesPage() {
  const { favorites } = useShop();

  const favoriteProducts = PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen py-12 max-w-[1180px] mx-auto px-6 sm:px-12">
      <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
        <span className="eyebrow">YOUR SAVED WISHLIST</span>
        <h1
          style={{ fontSize: 'clamp(1.75rem, 4.5vw, 2.5rem)' }}
          className="font-fredoka font-semibold text-[#3B2A4A]"
        >
          Your favourites
        </h1>
        <p
          style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.05rem)' }}
          className="font-nunito text-[#7A6A86]"
        >
          All the handmade cuties you have saved for later.
        </p>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="max-w-md mx-auto text-center py-20 px-6 bg-[#FFEFD9] rounded-3xl border border-dashed border-[#F1DDC2] space-y-4">
          <div className="w-20 h-20 rounded-full bg-[#FFF8EE] mx-auto flex items-center justify-center text-[#FF6B5E] shadow-xs">
            <Heart className="w-10 h-10 stroke-[1.5]" />
          </div>
          <h2 className="font-fredoka font-medium text-2xl text-[#3B2A4A]">
            Nothing here yet
          </h2>
          <p className="font-caveat font-bold text-2xl text-[#7A6A86]">
            Tap the heart on anything you love.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6B5E] text-white font-nunito font-bold text-sm shadow-sm hover:bg-[#e8584c] transition-colors"
            >
              <span>Explore The Shop</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
