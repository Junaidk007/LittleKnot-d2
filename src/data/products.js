export const CATEGORIES = [
  { id: 'all', name: 'All Pieces', icon: 'Sparkles', count: 8 },
  { id: 'bags', name: 'Bags', icon: 'ShoppingBag', count: 2 },
  { id: 'keychains', name: 'Keychains', icon: 'Key', count: 2 },
  { id: 'toys', name: 'Toys', icon: 'Smile', count: 2 },
  { id: 'wearables', name: 'Wearables', icon: 'Shirt', count: 1 },
  { id: 'home', name: 'Home Decor', icon: 'Home', count: 1 }
];

export const PRODUCTS = [
  {
    id: 'daisy-tote',
    name: 'Daisy Granny Square Tote Bag',
    category: 'bags',
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 38,
    isBestseller: true,
    image: '/images/daisy_tote_bag.jpg',
    gallery: [
      '/images/daisy_tote_bag.jpg',
      '/images/crochet_hero_flatlay.jpg'
    ],
    tag: 'Bestseller',
    badgeColor: 'bg-[#FF6B5E] text-white',
    description: 'An eye-catching pastel tote bag made from hand-stitched floral granny squares. Sturdy double-crochet handles and reinforced base ensure your essentials stay cozy and secure on sunny outings.',
    yarnType: '100% Combed Milk Cotton',
    dimensions: '34 cm x 30 cm (Strap drop: 26 cm)',
    care: 'Hand wash cold with mild detergent, lay flat in shade to dry.',
    colorOptions: [
      { name: 'Sky & Daisy Cream', hex: '#8CC8F2', inStock: true },
      { name: 'Pastel Lilac & Sage', hex: '#C9A7F5', inStock: true },
      { name: 'Warm Coral & Honey', hex: '#FF6B5E', inStock: true },
      { name: 'Matcha Mint', hex: '#7ED9B5', inStock: true }
    ],
    sizes: ['Standard (fits 13" laptop & books)', 'Mini Crossbody']
  },
  {
    id: 'fluffy-bunny',
    name: 'Fluffy Ear Amigurumi Bunny',
    category: 'toys',
    price: 899,
    originalPrice: 1099,
    rating: 5.0,
    reviewsCount: 52,
    isBestseller: true,
    image: '/images/crochet_bunny_toy.jpg',
    gallery: [
      '/images/crochet_bunny_toy.jpg',
      '/images/crochet_hero_flatlay.jpg'
    ],
    tag: 'Fan Favorite',
    badgeColor: 'bg-[#FFC94A] text-[#3B2A4A]',
    description: 'Soft, cuddly, and stitched with endless love. Features extra-long floppy ears with pastel blush inner lining, safety-embroidered eyes, and a neat bowtie.',
    yarnType: 'Ultra-soft Baby Velvet & Milk Cotton',
    dimensions: '22 cm height (sitting)',
    care: 'Spot clean only, gentle air dry.',
    colorOptions: [
      { name: 'Cream & Blush Pink', hex: '#FFE5EC', inStock: true },
      { name: 'Warm Honey Oatmeal', hex: '#FFEFD9', inStock: true },
      { name: 'Sky Baby Blue', hex: '#8CC8F2', inStock: true }
    ],
    sizes: ['Regular (22cm)', 'Pocket Baby (14cm)']
  },
  {
    id: 'strawberry-charm-crossbody',
    name: 'Strawberry Berry Mini Pouch',
    category: 'bags',
    price: 949,
    originalPrice: 1199,
    rating: 4.8,
    reviewsCount: 24,
    image: '/images/crochet_hero_flatlay.jpg',
    gallery: [
      '/images/crochet_hero_flatlay.jpg',
      '/images/daisy_tote_bag.jpg'
    ],
    tag: 'New',
    badgeColor: 'bg-[#7ED9B5] text-[#3B2A4A]',
    description: 'A charming berry-shaped pouch with seed stitch detailing and leafy drawstring closure. Perfectly sized for phone, lip balm, keys, and cards.',
    yarnType: 'Mercerised Egyptian Cotton',
    dimensions: '18 cm x 15 cm with adjustable cord',
    care: 'Hand wash cold, dry flat.',
    colorOptions: [
      { name: 'Ripe Berry Red', hex: '#FF6B5E', inStock: true },
      { name: 'Sweet Peach', hex: '#FFA296', inStock: true },
      { name: 'Wild Berry Plum', hex: '#C9A7F5', inStock: true }
    ],
    sizes: ['Crossbody (110cm strap)', 'Wristlet (20cm strap)']
  },
  {
    id: 'avocado-keychain',
    name: 'Smiley Avocado & Berry Charm Set',
    category: 'keychains',
    price: 349,
    originalPrice: 449,
    rating: 4.9,
    reviewsCount: 67,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      '/images/crochet_hero_flatlay.jpg'
    ],
    tag: 'Quick Gift',
    badgeColor: 'bg-[#C9A7F5] text-white',
    description: 'Chunky mini avocado keyring with an adorable 3D seed belly and stitched kawaii face. Includes a gold swivel clasp and small crochet heart tassel.',
    yarnType: '100% Combed Cotton',
    dimensions: '7.5 cm x 5.5 cm',
    care: 'Damp wipe surface when needed.',
    colorOptions: [
      { name: 'Guac Green & Brown Pit', hex: '#7ED9B5', inStock: true },
      { name: 'Pastel Mint', hex: '#A5EACD', inStock: true }
    ],
    sizes: ['Keyring with Clasp', 'Bag Charm with Chain']
  },
  {
    id: 'tulip-potted-flower',
    name: 'Eternal Bloom Potted Tulip Plant',
    category: 'home',
    price: 699,
    originalPrice: 850,
    rating: 5.0,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
      '/images/crochet_hero_flatlay.jpg'
    ],
    tag: 'Never Wilts',
    badgeColor: 'bg-[#FFC94A] text-[#3B2A4A]',
    description: 'Brighten your study desk or windowsill with flowers that live forever! Hand-crocheted tulips nestled in a warm brown yarn pot with natural soil texture.',
    yarnType: 'Cotton-Acrylic Blend',
    dimensions: '16 cm height x 9 cm pot base',
    care: 'Dust with soft dry brush.',
    colorOptions: [
      { name: 'Sunset Pink & Yellow', hex: '#FF6B5E', inStock: true },
      { name: 'Lavender Bliss', hex: '#C9A7F5', inStock: true },
      { name: 'Sunny Buttercup', hex: '#FFC94A', inStock: true }
    ],
    sizes: ['Single Tulip Pot', 'Trio Tulip Cluster (+₹350)']
  },
  {
    id: 'pastel-bucket-hat',
    name: 'Retro Ripple Pastel Bucket Hat',
    category: 'wearables',
    price: 1199,
    originalPrice: 1499,
    rating: 4.8,
    reviewsCount: 29,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80'
    ],
    tag: 'Trending',
    badgeColor: 'bg-[#FF6B5E] text-white',
    description: 'A breathable summer staple with wavy scalloped rim and soothing pastel colorblock waves. Snug, flexible, and foldable without losing shape.',
    yarnType: 'Cool Breathable Cotton Yarn',
    dimensions: 'Head circumference 54-58 cm (stretchy)',
    care: 'Hand wash, shape and dry flat.',
    colorOptions: [
      { name: 'Lavender & Cream Wave', hex: '#C9A7F5', inStock: true },
      { name: 'Mint & Sky Wave', hex: '#7ED9B5', inStock: true },
      { name: 'Coral Sunrise', hex: '#FF6B5E', inStock: true }
    ],
    sizes: ['One Size (Adult Regular 56cm)', 'Small / Petite (53cm)']
  },
  {
    id: 'sprout-leaf-keychain',
    name: 'Baby Sprout Headphone & Bag Clasp',
    category: 'keychains',
    price: 249,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 88,
    image: '/images/crochet_hero_flatlay.jpg',
    gallery: [
      '/images/crochet_hero_flatlay.jpg'
    ],
    tag: 'Under ₹299',
    badgeColor: 'bg-[#7ED9B5] text-[#3B2A4A]',
    description: 'The viral anime baby sprout! Ties effortlessly around headphone bands, car mirrors, bag straps, or key fobs for an instant mood booster.',
    yarnType: '100% Milk Cotton',
    dimensions: '9 cm stem with dual leaf blades',
    care: 'Gently hand wash.',
    colorOptions: [
      { name: 'Fresh Spring Green', hex: '#7ED9B5', inStock: true },
      { name: 'Olive Forest', hex: '#45A07C', inStock: true },
      { name: 'Golden Sunflower Leaf', hex: '#FFC94A', inStock: true }
    ],
    sizes: ['Single Sprout', 'Sprout Duo with Bell']
  },
  {
    id: 'boba-plushie',
    name: 'Taro Boba Tea Amigurumi Plush',
    category: 'toys',
    price: 749,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 33,
    image: '/images/crochet_bunny_toy.jpg',
    gallery: [
      '/images/crochet_bunny_toy.jpg'
    ],
    tag: 'Limited Edition',
    badgeColor: 'bg-[#C9A7F5] text-white',
    description: 'Complete with a striped straw, whipped cream cap, and shiny little tapioca pearls embroidered around the base. Unbelievably squishy and cozy.',
    yarnType: 'Chenille Velvet Yarn',
    dimensions: '16 cm height x 10 cm diameter',
    care: 'Surface clean with damp cloth.',
    colorOptions: [
      { name: 'Taro Lilac', hex: '#C9A7F5', inStock: true },
      { name: 'Matcha Green Tea', hex: '#7ED9B5', inStock: true },
      { name: 'Thai Milk Tea Orange', hex: '#FFC94A', inStock: true }
    ],
    sizes: ['Mini Cup (16cm)', 'Jumbo Hug Cup (28cm, +₹400)']
  }
];

export const MAKER_STORY = {
  name: "Meera & The Little Knot Crew",
  location: "Handmade in Bangalore, India",
  tagline: "Stitched with love, one loop at a time",
  bio: "Little Knot Studio started on a rainy Sunday with a single ball of coral cotton yarn and a vintage aluminium hook. Every single item here is slow-crafted by hand with meticulous tension, premium skin-friendly yarns, and double-knotted durability.",
  whatsappNumber: "917055638703",
  instagramHandle: "@littleknot.crochet",
  email: "hello@littleknotstudio.com"
};
