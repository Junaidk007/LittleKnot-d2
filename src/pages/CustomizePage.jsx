import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Upload, Sparkles, MessageCircle, Calendar, IndianRupee, Heart, CheckCircle2 } from 'lucide-react';
import DanglingYarnStrands from '../components/DanglingYarnStrands';
import { MAKER_STORY } from '../data/products';

export default function CustomizePage() {
  const [formData, setFormData] = useState({
    itemType: '',
    colors: '',
    size: '',
    budget: '',
    neededBy: '',
    name: '',
    phone: '',
    details: ''
  });

  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Effect 4: WhatsApp pre-filled message
    const message = encodeURIComponent(
      `🧵 *New Custom Crochet Commission Request!*\n\n` +
      `*Piece Idea:* ${formData.itemType || 'Custom Crochet Item'}\n` +
      `*Yarn Colours:* ${formData.colors || 'Maker recommendation'}\n` +
      `*Size / Scale:* ${formData.size || 'Standard'}\n` +
      `*Estimated Budget:* ${formData.budget ? '₹' + formData.budget : 'Flexible'}\n` +
      `*Needed By:* ${formData.neededBy || 'No rush'}\n` +
      `*Additional Notes:* ${formData.details || 'None'}\n` +
      `${images.length > 0 ? `*Reference Images:* ${images.length} photos ready to send!\n` : ''}\n` +
      `*Customer Info:*\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}`
    );

    window.open(`https://wa.me/${MAKER_STORY.whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-16 max-w-[1180px] mx-auto px-6 sm:px-12">
      {/* Dangling yarn strands hanging from the top */}
      <DanglingYarnStrands className="absolute top-0 right-16 hidden sm:block pointer-events-none z-20" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFD9] border border-[#F1DDC2]">
          <Scissors className="w-3.5 h-3.5 text-[#FF6B5E]" />
          <span className="eyebrow">CUSTOM ORDERS & COMMISSIONS</span>
        </div>
        <h1
          style={{ fontSize: 'clamp(1.85rem, 5vw, 3rem)' }}
          className="font-fredoka font-semibold text-[#3B2A4A]"
        >
          Dream it. We will crochet it.
        </h1>
        <p
          style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.05rem)' }}
          className="font-nunito text-[#7A6A86] leading-relaxed"
        >
          Describe the piece you have in mind, add reference photos if you have them, and we will get back to you on WhatsApp with yarn samples, pricing, and timelines!
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto bg-[#FFEFD9] p-8 sm:p-12 rounded-3xl border-2 border-dashed border-[#FF6B5E] text-center space-y-4 shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-[#7ED9B5]/30 text-emerald-700 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="font-fredoka font-semibold text-3xl text-[#3B2A4A]">
            Request Sent on WhatsApp!
          </h2>
          <p className="font-nunito text-[#7A6A86] text-base leading-relaxed">
            Your WhatsApp chat has opened with Meera at Little Knot Studio. If you attached reference photos, please paste or send them directly into the chat now!
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 rounded-full bg-[#FF6B5E] text-white font-nunito font-bold text-sm"
            >
              Submit Another Custom Request
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xs p-6 sm:p-10 rounded-3xl border border-[#F1DDC2] shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Field 1: What would you like made? */}
            <div className="space-y-1.5">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                1. What would you like made? <span className="text-[#FF6B5E]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="E.g., Cat amigurumi wearing a strawberry hat, checkered laptop sleeve..."
                value={formData.itemType}
                onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            {/* Field 2 & 3: Colors & Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  2. Preferred Colours
                </label>
                <input
                  type="text"
                  placeholder="E.g., Pastel pink & matcha green..."
                  value={formData.colors}
                  onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  3. Size or Dimensions
                </label>
                <input
                  type="text"
                  placeholder="E.g., 20 cm height, or fits 14 inch laptop..."
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                />
              </div>
            </div>

            {/* Field 4: Reference Images Multi-Upload */}
            <div className="space-y-2">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                4. Reference Photos or Sketches
              </label>
              <div className="border-2 border-dashed border-[#F1DDC2] rounded-2xl p-6 bg-[#FFF8EE] text-center hover:bg-[#FFEFD9]/40 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  id="multi-ref-upload"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <label htmlFor="multi-ref-upload" className="cursor-pointer block">
                  <Upload className="w-8 h-8 text-[#FF6B5E] mx-auto mb-2" />
                  <span className="font-nunito font-semibold text-sm text-[#3B2A4A] block">
                    Upload reference photos or Pinterest pins
                  </span>
                  <span className="text-xs text-[#7A6A86] block mt-0.5">
                    Select multiple PNG or JPG files
                  </span>
                </label>
              </div>

              {/* Uploaded Previews */}
              {images.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {images.map((img, idx) => (
                    <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#F1DDC2] group">
                      <img src={img} alt="Reference" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs font-bold transition-opacity"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Field 5 & 6: Budget & Needed By */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  5. Estimated Budget (Optional)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#7A6A86]">₹</span>
                  <input
                    type="number"
                    placeholder="E.g. 1200"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full pl-8 pr-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  6. Needed By Date
                </label>
                <input
                  type="date"
                  value={formData.neededBy}
                  onChange={(e) => setFormData({ ...formData, neededBy: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                />
              </div>
            </div>

            {/* Field 7: Additional Details */}
            <div className="space-y-1.5">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                7. Description & Specific Details
              </label>
              <textarea
                rows={3}
                placeholder="Tell us everything: special yarn texture preference, embroidering initials, pose or expression for toys..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full p-4 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            {/* Field 8 & 9: Contact Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#F1DDC2]">
              <div className="space-y-1.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  Your Name <span className="text-[#FF6B5E]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  WhatsApp Number <span className="text-[#FF6B5E]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="E.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF8EE] border border-[#F1DDC2] text-sm font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#FF6B5E] text-white font-fredoka font-medium text-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#e8584c] transition-all"
            >
              <MessageCircle className="w-5 h-5 text-[#FFC94A]" />
              <span>Send Request on WhatsApp</span>
            </motion.button>
          </form>
        </div>
      )}
    </div>
  );
}
