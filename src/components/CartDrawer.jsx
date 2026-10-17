import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateCartQty, removeFromCart, cartSubtotal, cartCount } = useShop();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-[#3B2A4A]/40 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Slide-in */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-md bg-[#FFF8EE] h-full shadow-2xl flex flex-col z-50 border-l border-[#F1DDC2]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#F1DDC2] flex items-center justify-between bg-[#FFEFD9]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FF6B5E] text-white flex items-center justify-center shadow-xs">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2
                    style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)' }}
                    className="font-fredoka font-semibold text-[#3B2A4A] leading-tight"
                  >
                    Your Basket
                  </h2>
                  <p className="text-xs text-[#7A6A86] font-nunito">
                    {cartCount} {cartCount === 1 ? 'handmade piece' : 'handmade pieces'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#F1DDC2] text-[#7A6A86] hover:text-[#3B2A4A] transition-colors"
                aria-label="Close basket"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#FFEFD9] border-2 border-dashed border-[#FF6B5E] flex items-center justify-center text-[#FF6B5E]">
                    <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-fredoka font-medium text-xl text-[#3B2A4A]">
                      Your basket is empty
                    </h3>
                    <p className="text-sm text-[#7A6A86] font-caveat text-xl mt-1">
                      Let us fix that with something cute!
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/shop');
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#FF6B5E] text-white font-nunito font-bold text-sm shadow-sm"
                  >
                    Browse Fresh Pieces
                  </motion.button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div
                    key={item.cartItemId}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-3.5 bg-[#FFEFD9] rounded-2xl border border-[#F1DDC2] flex gap-3.5 relative"
                  >
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover bg-white shrink-0 border border-[#F1DDC2]"
                    />

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="pr-6">
                        <h4 className="font-fredoka font-medium text-base text-[#3B2A4A] leading-snug line-clamp-1">
                          {item.name}
                        </h4>
                        <div className="text-xs text-[#7A6A86] font-nunito mt-0.5 space-y-0.5">
                          {item.selectedColor && (
                            <p>
                              Color: <span className="font-semibold text-[#3B2A4A]">{item.selectedColor}</span>
                            </p>
                          )}
                          {item.selectedSize && (
                            <p>
                              Size: <span className="font-semibold text-[#3B2A4A]">{item.selectedSize}</span>
                            </p>
                          )}
                          {item.customNote && (
                            <p className="text-[#FF6B5E] bg-[#FFF8EE] px-2 py-0.5 rounded-md inline-block font-medium mt-1">
                              Custom: "{item.customNote}"
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Stepper & Price */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F1DDC2]/60">
                        {/* Stepper */}
                        <div className="flex items-center border border-[#F1DDC2] rounded-lg bg-[#FFF8EE] p-0.5">
                          <button
                            onClick={() => updateCartQty(item.cartItemId, item.qty - 1)}
                            className="p-1 hover:text-[#FF6B5E] text-[#3B2A4A] rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 font-fredoka font-semibold text-sm text-[#3B2A4A]">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateCartQty(item.cartItemId, item.qty + 1)}
                            className="p-1 hover:text-[#FF6B5E] text-[#3B2A4A] rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-caveat font-bold text-2xl text-[#FF6B5E]">
                          ₹{item.price * item.qty}
                        </span>
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="absolute top-3 right-3 text-[#7A6A86] hover:text-[#FF6B5E] transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-[#FFEFD9] border-t border-[#F1DDC2] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-nunito text-sm text-[#7A6A86] font-semibold">Subtotal</span>
                  <span className="font-caveat font-bold text-3xl text-[#3B2A4A]">
                    ₹{cartSubtotal}
                  </span>
                </div>

                <p className="text-xs text-[#7A6A86] flex items-center gap-1.5 font-nunito">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFC94A] shrink-0" />
                  <span>Orders are confirmed & fulfilled directly via WhatsApp with the maker!</span>
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#FF6B5E] text-white font-fredoka font-medium text-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#e8584c] transition-colors"
                >
                  <span>Place Order</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
