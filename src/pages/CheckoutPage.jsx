import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag, ArrowLeft, CheckCircle2, Sparkles, MapPin, Phone, User, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useShop } from '../context/ShopContext';
import { MAKER_STORY } from '../data/products';

export default function CheckoutPage() {
  const { cart, cartSubtotal, clearCart } = useShop();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const [orderSent, setOrderSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    // Effect 4: WhatsApp order message format from prompt
    const lines = cart.map(i =>
      `• ${i.qty} x ${i.name} (₹${i.price * i.qty})${
        i.selectedColor ? ` [Color: ${i.selectedColor}]` : ''
      }${
        i.selectedSize ? ` [Size: ${i.selectedSize}]` : ''
      }${
        i.customNote ? ` (Customization: ${i.customNote})` : ''
      }`
    );

    const text = encodeURIComponent(
      `🧶 *Hi Little Knot Studio! I'd like to place an order:*\n\n` +
      `${lines.join('\n')}\n\n` +
      `*Total Estimated Subtotal:* ₹${cartSubtotal}\n\n` +
      `*Shipping Details:*\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📍 Delivery Address: ${form.address}\n\n` +
      `📝 *Special Notes:* ${form.notes || 'None'}\n\n` +
      `Please let me know the payment details and delivery timeframe!`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${MAKER_STORY.whatsappNumber}?text=${text}`, '_blank');

    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF6B5E', '#FFC94A', '#7ED9B5', '#8CC8F2', '#C9A7F5']
    });

    setOrderSent(true);
    clearCart();
  };

  // If order was sent: Thank you screen
  if (orderSent) {
    return (
      <div className="min-h-screen py-20 max-w-[700px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#FFEFD9] p-8 sm:p-12 rounded-3xl border-2 border-dashed border-[#FF6B5E] shadow-sm space-y-5"
        >
          <div className="w-20 h-20 rounded-full bg-[#7ED9B5]/30 text-emerald-700 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <span className="eyebrow">ORDER DISPATCHED TO WHATSAPP</span>
          
          <h1 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#3B2A4A]">
            Thank you!
          </h1>
          
          <p className="font-caveat font-bold text-2xl text-[#FF6B5E]">
            Your order message is on its way to us on WhatsApp.
          </p>

          <p className="font-nunito text-[#7A6A86] text-sm leading-relaxed max-w-md mx-auto">
            Meera will review your requested pieces and share confirmation, payment details (UPI/GPay), and tracking right in the chat.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="px-6 py-3 rounded-full bg-[#FF6B5E] text-white font-nunito font-bold text-sm shadow-sm hover:bg-[#e8584c] transition-colors"
            >
              Back to Crochet Shop
            </Link>
            <a
              href={`https://wa.me/${MAKER_STORY.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-white text-[#3B2A4A] border border-[#F1DDC2] font-nunito font-bold text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B5E]" />
              <span>Open WhatsApp Chat</span>
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-20 max-w-[600px] mx-auto px-6 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-[#FFEFD9] mx-auto flex items-center justify-center text-[#FF6B5E]">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="font-fredoka font-medium text-3xl text-[#3B2A4A]">
          Your basket is empty
        </h1>
        <p className="font-nunito text-[#7A6A86] text-sm">
          Please add a handmade piece to your basket before checking out.
        </p>
        <Link
          to="/shop"
          className="inline-block px-6 py-2.5 rounded-full bg-[#FF6B5E] text-white font-nunito font-bold text-sm"
        >
          Browse Fresh Crochets
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 max-w-[1180px] mx-auto px-6 sm:px-12">
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm font-nunito font-semibold text-[#7A6A86] hover:text-[#FF6B5E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Form Left */}
        <div className="lg:col-span-7 bg-white/80 backdrop-blur-xs p-6 sm:p-10 rounded-3xl border border-[#F1DDC2] shadow-sm space-y-6">
          <div>
            <span className="eyebrow">DIRECT WHATSAPP CHECKOUT</span>
            <h1 className="font-fredoka font-semibold text-3xl sm:text-4xl text-[#3B2A4A] mt-1">
              Almost there
            </h1>
            <p className="text-xs text-[#7A6A86] font-nunito mt-1">
              We will confirm your order and share payment details on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#3B2A4A] font-nunito">
                <User className="w-3.5 h-3.5 text-[#FF6B5E]" />
                <span>Full Name</span>
                <span className="text-[#FF6B5E]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="E.g., Ananya Sharma"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#3B2A4A] font-nunito">
                <Phone className="w-3.5 h-3.5 text-[#FF6B5E]" />
                <span>WhatsApp Phone Number</span>
                <span className="text-[#FF6B5E]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="E.g., 9876543210 (India)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#3B2A4A] font-nunito">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B5E]" />
                <span>Full Delivery Address & Pincode</span>
                <span className="text-[#FF6B5E]">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="House / Flat No, Street, Landmark, City, State, Pincode"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full p-4 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-1.5 text-xs font-bold text-[#3B2A4A] font-nunito">
                <FileText className="w-3.5 h-3.5 text-[#FF6B5E]" />
                <span>Order Notes / Delivery Instructions</span>
              </label>
              <input
                type="text"
                placeholder="E.g., Please leave with security, gift packing requested..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#FF6B5E] text-white font-fredoka font-medium text-lg flex items-center justify-center gap-2.5 shadow-md hover:bg-[#e8584c] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#FFC94A]" />
                <span>Send Order on WhatsApp</span>
              </motion.button>
              <p className="text-center text-xs text-[#7A6A86] font-nunito mt-3">
                No prepayment required now. You can pay safely via UPI / GPay after confirming with the maker!
              </p>
            </div>
          </form>
        </div>

        {/* Order Summary Right */}
        <div className="lg:col-span-5 bg-[#FFEFD9] p-6 sm:p-8 rounded-3xl border border-[#F1DDC2] space-y-6">
          <h2 className="font-fredoka font-medium text-2xl text-[#3B2A4A] border-b border-[#F1DDC2] pb-4">
            Order Summary
          </h2>

          <div className="space-y-3.5 max-h-[360px] overflow-y-auto pr-1">
            {cart.map((item) => (
              <div key={item.cartItemId} className="flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-xl object-cover bg-white border border-[#F1DDC2] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-fredoka font-medium text-sm text-[#3B2A4A] truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#7A6A86] font-nunito">
                    Qty: {item.qty} {item.selectedColor ? `· ${item.selectedColor}` : ''}
                  </p>
                  {item.customNote && (
                    <p className="text-[11px] text-[#FF6B5E] font-medium truncate">
                      Custom: {item.customNote}
                    </p>
                  )}
                </div>
                <span className="font-caveat font-bold text-xl text-[#FF6B5E] shrink-0">
                  ₹{item.price * item.qty}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F1DDC2] pt-4 space-y-2 text-sm font-nunito">
            <div className="flex justify-between text-[#7A6A86]">
              <span>Items Total:</span>
              <span>₹{cartSubtotal}</span>
            </div>
            <div className="flex justify-between text-[#7A6A86]">
              <span>Handmade Packaging:</span>
              <span className="text-emerald-700 font-bold">FREE</span>
            </div>
            <div className="flex justify-between text-[#7A6A86]">
              <span>Domestic Shipping:</span>
              <span className="text-emerald-700 font-bold">Calculated on WhatsApp</span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#3B2A4A] border-t border-[#F1DDC2] pt-3">
              <span>Estimated Subtotal:</span>
              <span className="font-caveat font-bold text-3xl text-[#FF6B5E]">
                ₹{cartSubtotal}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
