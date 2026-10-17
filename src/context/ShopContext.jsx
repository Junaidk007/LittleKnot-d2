import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export function ShopProvider({ children }) {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('lks_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Favorites state persisted to localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('lks_favorites');
      return saved ? JSON.parse(saved) : ['daisy-tote', 'fluffy-bunny'];
    } catch {
      return ['daisy-tote', 'fluffy-bunny'];
    }
  });

  // UI Drawer / Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingProduct, setCustomizingProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('lks_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('lks_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const addToCart = (product, options = {}) => {
    const {
      color = product.colorOptions?.[0]?.name || 'Standard',
      size = product.sizes?.[0] || 'Standard',
      qty = 1,
      customNote = '',
      referenceImage = null
    } = options;

    setCart(prev => {
      // Create a unique key based on id and customization
      const customKey = `${product.id}-${color}-${size}-${customNote}`;
      const existingIndex = prev.findIndex(item => item.customKey === customKey);

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += qty;
        return updated;
      } else {
        const newItem = {
          cartItemId: `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
          customKey,
          productId: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
          image: product.image,
          selectedColor: color,
          selectedSize: size,
          customNote,
          referenceImage,
          qty
        };
        return [newItem, ...prev];
      }
    });

    setIsCartOpen(true);
  };

  const updateCartQty = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.cartItemId === cartItemId ? { ...item, qty: newQty } : item))
    );
  };

  const removeFromCart = cartItemId => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = productId => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const isFavorite = productId => favorites.includes(productId);

  const moveFavoriteToCart = product => {
    addToCart(product);
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        addToCart,
        updateCartQty,
        removeFromCart,
        clearCart,
        favorites,
        toggleFavorite,
        isFavorite,
        moveFavoriteToCart,
        isCartOpen,
        setIsCartOpen,
        customizingProduct,
        setCustomizingProduct,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
