import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Palette, Star, ArrowLeft, Check, Sparkles, ShieldCheck, Ruler, Scissors } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, isFavorite, toggleFavorite, setCustomizingProduct } = useShop();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colorOptions?.[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [qty, setQty] = useState(1);

  // Update selectedImage if product changes
  React.useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedColor(product.colorOptions?.[0]?.name || 'Standard');
      setSelectedSize(product.sizes?.[0] || 'Standard');
      setQty(1);
    }
  }, [product]);

  const favorited = isFavorite(product.id);

  const handleAddToCart = () => {
    addToCart(product, {
      color: selectedColor,
      size: selectedSize,
      qty
    });
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen py-10 max-w-[1180px] mx-auto px-6 sm:px-12">
      {/* Breadcrumb / Back button */}
      <div className="mb-6">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-nunito font-semibold text-[#7A6A86] hover:text-[#FF6B5E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all pieces</span>
        </Link>
      </div>

      {/* Main Grid: Gallery Left + Details Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-[#FFEFD9]/50 p-6 sm:p-10 rounded-3xl border border-[#F1DDC2]">
        {/* Left: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-[#F1DDC2] shadow-sm">
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.tag && (
              <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold font-fredoka shadow-xs ${product.badgeColor || 'bg-[#FF6B5E] text-white'}`}>
                {product.tag}
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === img
                      ? 'border-[#FF6B5E] ring-2 ring-[#FF6B5E]/30 scale-102'
                      : 'border-[#F1DDC2] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Details & Buying Options */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="eyebrow uppercase font-bold text-[#FF6B5E]">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-sm font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{product.rating}</span>
                <span className="text-[#7A6A86] font-normal">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1
              style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)' }}
              className="font-fredoka font-semibold text-[#3B2A4A] mt-2 leading-tight"
            >
              {product.name}
            </h1>

            {/* Price in Caveat font */}
            <div className="flex items-baseline gap-3 mt-3">
              <span
                style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }}
                className="font-caveat font-bold text-[#FF6B5E] leading-none"
              >
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="font-nunito text-base text-[#7A6A86] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-xs bg-[#7ED9B5]/30 text-emerald-800 font-bold px-2.5 py-1 rounded-full font-nunito">
                Save ₹{product.originalPrice - product.price}
              </span>
            </div>

            <p className="font-nunito text-[#7A6A86] text-base leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Colorway Options */}
            {product.colorOptions && (
              <div className="mt-6 space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3B2A4A] font-nunito">
                  Yarn Palette: <span className="text-[#FF6B5E] normal-case font-semibold">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-2 rounded-xl text-xs font-nunito font-semibold flex items-center gap-2 border transition-all ${
                        selectedColor === c.name
                          ? 'border-[#FF6B5E] bg-white text-[#FF6B5E] ring-2 ring-[#FF6B5E]/20 shadow-xs'
                          : 'border-[#F1DDC2] bg-[#FFEFD9] text-[#3B2A4A] hover:bg-white'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Options */}
            {product.sizes && (
              <div className="mt-5 space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3B2A4A] font-nunito">
                  Size Options:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-nunito font-semibold border transition-all ${
                        selectedSize === s
                          ? 'border-[#FF6B5E] bg-[#FF6B5E] text-white shadow-xs'
                          : 'border-[#F1DDC2] bg-white text-[#3B2A4A] hover:bg-[#FFEFD9]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Material & Specs */}
            <div className="mt-6 pt-6 border-t border-[#F1DDC2] grid grid-cols-2 gap-3 text-xs font-nunito text-[#7A6A86]">
              <div>
                <span className="font-bold text-[#3B2A4A] block">Yarn Material:</span>
                <span>{product.yarnType}</span>
              </div>
              <div>
                <span className="font-bold text-[#3B2A4A] block">Dimensions:</span>
                <span>{product.dimensions}</span>
              </div>
            </div>
          </div>

          {/* Stepper & 3 Action Buttons */}
          <div className="space-y-3 pt-6 border-t border-[#F1DDC2]">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-[#F1DDC2] rounded-xl bg-white p-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold hover:bg-[#FFEFD9] text-[#3B2A4A]"
                >
                  -
                </button>
                <span className="w-10 text-center font-fredoka font-semibold text-base text-[#3B2A4A]">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold hover:bg-[#FFEFD9] text-[#3B2A4A]"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-[#FF6B5E] text-white font-fredoka font-medium text-base flex items-center justify-center gap-2 shadow-md hover:bg-[#e8584c] transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart (₹{product.price * qty})</span>
              </motion.button>

              {/* Add to Favorites Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleFavorite(product.id)}
                className={`p-3.5 rounded-2xl border transition-colors shadow-xs ${
                  favorited
                    ? 'bg-[#FF6B5E] text-white border-[#FF6B5E]'
                    : 'bg-white text-[#3B2A4A] border-[#F1DDC2] hover:text-[#FF6B5E]'
                }`}
                aria-label="Toggle Favorite"
              >
                <Heart className={`w-5 h-5 ${favorited ? 'fill-white' : ''}`} />
              </motion.button>
            </div>

            {/* 3rd Button: Customize This Design */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCustomizingProduct(product)}
              className="w-full py-3 px-6 rounded-2xl bg-white text-[#3B2A4A] border-2 border-dashed border-[#FF6B5E] font-fredoka font-medium text-base flex items-center justify-center gap-2 hover:bg-[#FFEFD9] transition-colors"
            >
              <Palette className="w-5 h-5 text-[#FF6B5E]" />
              <span>Customize This Design (Colors, Name Tag, Charms)</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <div className="mb-6">
          <span className="eyebrow">YOU MAY ALSO LOVE</span>
          <h2 className="font-fredoka font-medium text-2xl sm:text-3xl text-[#3B2A4A]">
            More handmade pieces
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
