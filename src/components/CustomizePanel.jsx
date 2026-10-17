import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Upload, Check, Palette, Plus, Tag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CustomizePanel() {
  const { customizingProduct, setCustomizingProduct, addToCart } = useShop();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [customColorInput, setCustomColorInput] = useState('');
  const [addons, setAddons] = useState([]);
  const [notes, setNotes] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  // Initialize defaults whenever modal opens
  React.useEffect(() => {
    if (customizingProduct) {
      setSelectedColor(customizingProduct.colorOptions?.[0]?.name || 'Standard');
      setSelectedSize(customizingProduct.sizes?.[0] || 'Standard');
      setCustomColorInput('');
      setAddons([]);
      setNotes('');
      setImagePreview(null);
    }
  }, [customizingProduct]);

  if (!customizingProduct) return null;

  const availableAddons = [
    { id: 'nametag', name: 'Hand-stitched Initial Letter Tag (+₹80)', price: 80 },
    { id: 'minicharm', name: 'Extra Mini Amigurumi Charm (+₹120)', price: 120 },
    { id: 'giftbox', name: 'Cozy Yarn Gift Box & Handwritten Card (+₹99)', price: 99 }
  ];

  const toggleAddon = (addon) => {
    if (addons.find(a => a.id === addon.id)) {
      setAddons(addons.filter(a => a.id !== addon.id));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addonTotal = addons.reduce((sum, a) => sum + a.price, 0);
  const finalPrice = customizingProduct.price + addonTotal;

  const handleSaveAndAdd = () => {
    const colorChoice = customColorInput.trim() ? customColorInput.trim() : selectedColor;
    const addonNames = addons.map(a => a.name.split(' (')[0]).join(', ');
    
    let noteParts = [];
    if (notes.trim()) noteParts.push(notes.trim());
    if (addonNames) noteParts.push(`Add-ons: ${addonNames}`);

    const finalCustomNote = noteParts.join(' | ');

    addToCart(
      {
        ...customizingProduct,
        price: finalPrice
      },
      {
        color: colorChoice,
        size: selectedSize,
        qty: 1,
        customNote: finalCustomNote,
        referenceImage: imagePreview
      }
    );

    setCustomizingProduct(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCustomizingProduct(null)}
          className="fixed inset-0 bg-[#3B2A4A]/40 backdrop-blur-xs transition-opacity"
        />

        {/* Slide-in Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#FFF8EE] h-full shadow-2xl flex flex-col z-50 border-l border-[#F1DDC2]"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#F1DDC2] flex items-center justify-between bg-[#FFEFD9]/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF6B5E] text-white flex items-center justify-center shadow-xs">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h2
                  style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)' }}
                  className="font-fredoka font-semibold text-[#3B2A4A] leading-tight"
                >
                  Make It Yours
                </h2>
                <p className="text-xs text-[#7A6A86] font-nunito">
                  {customizingProduct.name}
                </p>
              </div>
            </div>
            <button
              onClick={() => setCustomizingProduct(null)}
              className="p-2 rounded-full hover:bg-[#F1DDC2] text-[#7A6A86] hover:text-[#3B2A4A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Scroll Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="bg-[#FFEFD9] p-4 rounded-2xl border border-[#F1DDC2]">
              <p className="text-sm text-[#3B2A4A] font-nunito leading-relaxed">
                🧶 <strong className="text-[#FF6B5E]">Custom Handmade Note:</strong> Tell us what to change: colours, size, a name tag, anything. We will stitch it your way with fresh yarn!
              </p>
            </div>

            {/* Colors Section */}
            <div className="space-y-3">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                1. Pick Yarn Colorway
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {customizingProduct.colorOptions?.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => {
                      setSelectedColor(c.name);
                      setCustomColorInput('');
                    }}
                    className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                      selectedColor === c.name && !customColorInput
                        ? 'border-[#FF6B5E] bg-white ring-2 ring-[#FF6B5E]/30'
                        : 'border-[#F1DDC2] bg-[#FFEFD9]/50 hover:bg-[#FFEFD9]'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-black/10 shrink-0 shadow-2xs"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-nunito font-semibold text-xs text-[#3B2A4A] truncate">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* Or custom shade input */}
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Or enter custom colors (e.g. Sage Green & Milk White)..."
                  value={customColorInput}
                  onChange={(e) => setCustomColorInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#F1DDC2] text-xs font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
                />
              </div>
            </div>

            {/* Sizes */}
            {customizingProduct.sizes && customizingProduct.sizes.length > 0 && (
              <div className="space-y-2.5">
                <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                  2. Select Size / Dimensions
                </label>
                <div className="space-y-2">
                  {customizingProduct.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between text-xs font-nunito font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-[#FF6B5E] bg-white text-[#FF6B5E] ring-2 ring-[#FF6B5E]/20'
                          : 'border-[#F1DDC2] bg-[#FFEFD9]/40 text-[#3B2A4A] hover:bg-[#FFEFD9]'
                      }`}
                    >
                      <span>{size}</span>
                      {selectedSize === size && <Check className="w-4 h-4 text-[#FF6B5E]" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add-ons */}
            <div className="space-y-2.5">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                3. Optional Handmade Add-ons
              </label>
              <div className="space-y-2">
                {availableAddons.map((addon) => {
                  const isChecked = Boolean(addons.find(a => a.id === addon.id));
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-nunito transition-all ${
                        isChecked
                          ? 'border-[#FF6B5E] bg-[#FFEFD9] text-[#3B2A4A]'
                          : 'border-[#F1DDC2] bg-white text-[#7A6A86] hover:bg-[#FFEFD9]/40'
                      }`}
                    >
                      <span className="font-semibold">{addon.name}</span>
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#FF6B5E] border-[#FF6B5E] text-white' : 'border-[#F1DDC2] bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Custom Notes */}
            <div className="space-y-2">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                4. Special Notes or Modifications
              </label>
              <textarea
                rows={3}
                placeholder="E.g., Please make the handles 5cm longer, stitch the letter 'K' on the corner..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-[#F1DDC2] text-xs font-nunito focus:outline-none focus:border-[#FF6B5E] focus:ring-1 focus:ring-[#FF6B5E]"
              />
            </div>

            {/* Reference Image Upload */}
            <div className="space-y-2">
              <label className="block font-fredoka font-medium text-base text-[#3B2A4A]">
                5. Reference Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-[#F1DDC2] rounded-2xl p-4 bg-white/60 text-center hover:bg-[#FFEFD9]/30 transition-colors">
                {imagePreview ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={imagePreview}
                      alt="Custom preview"
                      className="w-16 h-16 rounded-xl object-cover border border-[#F1DDC2]"
                    />
                    <div className="text-left flex-1">
                      <p className="text-xs font-bold text-[#3B2A4A]">Reference photo attached!</p>
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="text-xs text-[#FF6B5E] hover:underline mt-1"
                      >
                        Remove photo
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="cursor-pointer block">
                    <Upload className="w-6 h-6 text-[#FF6B5E] mx-auto mb-1.5" />
                    <span className="text-xs font-semibold text-[#3B2A4A] block">
                      Click to upload inspiration image
                    </span>
                    <span className="text-[11px] text-[#7A6A86] block">
                      PNG, JPG up to 10MB
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Footer Save & Add Button */}
          <div className="p-6 bg-[#FFEFD9] border-t border-[#F1DDC2] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#7A6A86] font-semibold block">Total Customized Price</span>
                <span className="font-caveat font-bold text-3xl text-[#FF6B5E]">
                  ₹{finalPrice}
                </span>
              </div>
              <span className="text-xs font-caveat text-xl text-[#7A6A86]">
                Stitched with love & care
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSaveAndAdd}
              className="w-full py-3.5 px-6 rounded-2xl bg-[#FF6B5E] text-white font-fredoka font-medium text-lg flex items-center justify-center gap-2 shadow-md hover:bg-[#e8584c] transition-colors"
            >
              <Sparkles className="w-5 h-5 text-[#FFC94A]" />
              <span>Save and Add to Cart</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
