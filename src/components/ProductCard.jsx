import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Palette, Star, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { isFavorite, toggleFavorite, addToCart, setCustomizingProduct } = useShop();
  const favorited = isFavorite(product.id);

  return (
    <motion.div
      whileHover={{
        y: -6,
        rotate: [0, -1.5, 1.5, 0],
        transition: { duration: 0.45, ease: 'easeOut' }
      }}
      className="group relative bg-[#FFEFD9] rounded-3xl p-3.5 border border-[#F1DDC2] card-hover-shadow flex flex-col justify-between overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FFF8EE] mb-3">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <motion.img
            src={product.image}
            alt={product.name}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </Link>

        {/* Badge Tag */}
        {product.tag && (
          <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-xs font-bold font-fredoka shadow-xs ${product.badgeColor || 'bg-[#FF6B5E] text-white'}`}>
            {product.tag}
          </span>
        )}

        {/* Favorite Heart Button */}
        <motion.button
          whileTap={{ scale: [1, 1.4, 0.95, 1] }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          className="absolute top-2.5 right-2.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs text-[#3B2A4A] hover:text-[#FF6B5E] transition-colors"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <motion.div
            animate={favorited ? { scale: [1, 1.35, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                favorited ? 'fill-[#FF6B5E] text-[#FF6B5E]' : 'text-[#3B2A4A]'
              }`}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-between px-1">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#7A6A86] mb-1">
            <span className="capitalize font-semibold text-[#FF6B5E]">{product.category}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5 text-amber-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {product.rating}
            </span>
          </div>

          <Link to={`/product/${product.id}`} className="block">
            <h3
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}
              className="font-fredoka font-medium text-[#3B2A4A] group-hover:text-[#FF6B5E] transition-colors line-clamp-1 leading-snug"
            >
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#7A6A86] line-clamp-1 mt-0.5 mb-2">
            {product.yarnType}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-[#F1DDC2]/60 flex items-center justify-between gap-2 mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span
              style={{ fontSize: 'clamp(1.4rem, 4vw, 1.85rem)' }}
              className="font-caveat font-bold text-[#FF6B5E] leading-none"
            >
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#7A6A86] line-through font-nunito">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            {/* Customize side-panel trigger button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setCustomizingProduct(product)}
              className="p-2 rounded-xl bg-[#FFF8EE] text-[#3B2A4A] hover:text-[#FF6B5E] border border-[#F1DDC2] transition-colors"
              title="Customize colors & notes"
            >
              <Palette className="w-4 h-4 text-[#FF6B5E]" />
            </motion.button>

            {/* Add to Cart button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => addToCart(product)}
              style={{ fontSize: 'clamp(0.7rem, 1.8vw, 0.75rem)' }}
              className="px-3 py-2 rounded-xl bg-[#FF6B5E] text-white font-nunito font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#e8584c] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
