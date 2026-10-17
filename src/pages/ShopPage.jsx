import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryStrip from '../components/CategoryStrip';
import YarnDivider from '../components/YarnDivider';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';

export default function ShopPage() {
  const { activeCategory, setActiveCategory } = useShop();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.yarnType.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [activeCategory, search, sortBy]);

  return (
    <div className="min-h-screen py-10 sm:py-14 max-w-[1180px] mx-auto px-6 sm:px-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
        <span className="eyebrow">OUR FULL CATALOGUE</span>
        <h1
          style={{ fontSize: 'clamp(1.85rem, 5vw, 3rem)' }}
          className="font-fredoka font-semibold text-[#3B2A4A]"
        >
          Fresh off the hook
        </h1>
        <p
          style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.05rem)' }}
          className="font-nunito text-[#7A6A86]"
        >
          Browse our ready-to-ship crocheted pieces or pick any design to customize the colorway.
        </p>
      </div>

      {/* Category Chips */}
      <div className="mb-6">
        <CategoryStrip />
      </div>

      {/* Search & Sort Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-[#FFEFD9] p-4 rounded-2xl border border-[#F1DDC2]">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#7A6A86] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search bags, bunnies, keychains..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
          />
        </div>

        {/* Count & Sort */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <span className="text-xs font-semibold text-[#7A6A86] font-nunito">
            Showing {filteredProducts.length} pieces
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#FF6B5E]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl bg-white border border-[#F1DDC2] text-xs font-nunito font-semibold text-[#3B2A4A] focus:outline-none focus:border-[#FF6B5E]"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#FFEFD9]/40 rounded-3xl border border-dashed border-[#F1DDC2] space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FFEFD9] mx-auto flex items-center justify-center text-[#FF6B5E]">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="font-fredoka font-medium text-2xl text-[#3B2A4A]">
            No crochet matches found
          </h3>
          <p className="font-nunito text-[#7A6A86] text-sm max-w-md mx-auto">
            Try adjusting your search or category filter. Or tell us what you'd like made in a custom order!
          </p>
          <button
            onClick={() => {
              setSearch('');
              setActiveCategory('all');
            }}
            className="px-5 py-2.5 rounded-full bg-[#FF6B5E] text-white font-nunito font-bold text-xs"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Decorative Bottom Divider */}
      <YarnDivider className="mt-16" />
    </div>
  );
}
