import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../data/products';
import { ShoppingBag, Key, Smile, Shirt, Home, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CategoryStrip() {
  const { activeCategory, setActiveCategory } = useShop();

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
      case 'Key': return <Key className="w-4 h-4" />;
      case 'Smile': return <Smile className="w-4 h-4" />;
      case 'Shirt': return <Shirt className="w-4 h-4" />;
      case 'Home': return <Home className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full py-4 overflow-x-auto no-scrollbar">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-12 flex items-center justify-start sm:justify-center gap-3">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-2.5 rounded-full flex items-center gap-2 text-sm font-nunito font-bold transition-all shadow-2xs border ${
                isSelected
                  ? 'bg-[#FF6B5E] text-white border-[#FF6B5E] shadow-sm'
                  : 'bg-[#FFEFD9] text-[#3B2A4A] border-[#F1DDC2] hover:bg-white hover:border-[#FF6B5E]/50'
              }`}
            >
              <span className={isSelected ? 'text-white' : 'text-[#FF6B5E]'}>
                {getIcon(cat.icon)}
              </span>
              <span>{cat.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
