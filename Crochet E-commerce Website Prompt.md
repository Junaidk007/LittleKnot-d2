# Crochet E-commerce Website Prompt

@Junaid Khan

## 1. Goal Statement

Build a playful, handmade e-commerce website for **\[Little Knot Studio]**, a crochet studio selling readymade pieces and fully custom orders. The site should feel like opening a basket of yarn: bright, cheerful, tactile, with a hanging crochet charm that really swings. Orders are placed through a form that opens a pre-filled WhatsApp message to the seller. There is no payment gateway.

## 2. Tech Stack

```
React + Vite + JavaScript + Tailwind CSS + Framer Motion (motion/react) + react-router-dom + shadcn/ui + lucide-react
```

State: React Context for cart, favorites and customizations, persisted to localStorage. No backend. Product data lives in a local `products.ts` file.

## 3. Design System: Colors

Playful and catchy on a light base. These are starting values; swap any of them if you want a different mood, but keep the light background and the bright accents.

```css
:root {
  --background: #FFF8EE;      /* warm cream, like undyed cotton */
  --foreground: #3B2A4A;      /* soft plum ink */
  --primary: #FF6B5E;         /* coral yarn */
  --primary-foreground: #FFFFFF;
  --secondary: #FFC94A;       /* sunny yellow */
  --accent-mint: #7ED9B5;
  --accent-sky: #8CC8F2;
  --accent-lilac: #C9A7F5;
  --card: #FFEFD9;
  --border: #F1DDC2;
  --muted-foreground: #7A6A86;
}
```

## 4. Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@300;400;600;700&family=Caveat:wght@500;700&display=swap" rel="stylesheet" />
```

- **H1:** Fredoka 600, clamp(40px, 6vw, 76px), line-height 1.05
- **H2:** Fredoka 500, 32–46px
- **H3 / product names:** Fredoka 500, 18–22px
- **Body:** Nunito 400, 17px, line-height 1.7
- **Handwritten accents** (small notes, price tags, taglines): Caveat 700, 22–28px
- **Eyebrows:** Nunito 700, uppercase, letter-spacing 0.14em, 12px, coral

## 5. Visual Effects

**Effect 1: Hanging crochet charm.** A small crocheted charm (e.g. a mini amigurumi or keyring, drawn as an SVG or a transparent PNG) hangs from a yarn thread at the top of the navbar and in a corner of the hero. It swings like a pendulum, with the pivot at the top of the thread.

```tsx
<motion.div
  style={{ transformOrigin: 'top center' }}
  animate={{ rotate: [-9, 9, -9] }}
  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
  className='absolute top-0 right-10 z-40 pointer-events-none'
>
  <img src='/charm.svg' alt='' className='w-14' />
</motion.div>
```

**Effect 2: Yarn thread dividers.** Between sections, a wavy yarn-coloured SVG line draws itself on scroll entry.

```tsx
<motion.path
  d='M0 12 Q 25 0, 50 12 T 100 12 T 150 12 T 200 12'
  stroke='var(--primary)' strokeWidth='3' strokeLinecap='round' fill='none'
  initial={{ pathLength: 0 }}
  whileInView={{ pathLength: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: 'easeInOut' }}
/>
```

**Effect 3: Dangling yarn strands.** Two or three thin strands of yarn hang from the top of the hero and the custom-order page and sway slightly out of sync (rotate ±3°, 5–7s, staggered delays).

**Effect 4: WhatsApp order message.** On checkout submit, build the message from the form and the cart and open WhatsApp.

```tsx
const SELLER_NUMBER = '91XXXXXXXXXX'; // seller's WhatsApp number, country code first

const lines = cart.map(i =>
  `${i.qty} x ${i.name}${i.customNote ? ` (Custom: ${i.customNote})` : ''}`
);
const text = encodeURIComponent(
  `Hi! I'd like to order:\n${lines.join('\n')}\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nNotes: ${form.notes}`
);
window.open(`https://wa.me/${SELLER_NUMBER}?text=${text}`, '_blank');
```

## 6. Component Breakdown

1. **Navbar:** 76px, sticky, cream with a soft bottom shadow. Logo left, links centre (Shop, Customize, Favorites, About), heart icon and cart icon with a count badge right. The hanging charm (Effect 1) dangles from the top edge.
2. **Hero:** Eyebrow, big Fredoka H1, subline, two CTAs (`Shop Crochets`, `Make It Custom`). Right side: a collage of three product photos on rounded, slightly rotated cards, with yarn strands hanging above them. *Image: cosy flat-lay of colourful crochet pieces on a cream knit blanket, soft daylight.*
3. **Category strip:** Round category chips (Bags, Keychains, Toys, Wearables, Home Decor) with a small icon each.
4. **Shop page:** Filter chips on top, 4-column product grid. Each card shows the image, name, price in Caveat, a heart toggle, and `Add to Cart`.
5. **Product detail page:** Image gallery left. Right: name, price, description, colour options, quantity stepper, and three buttons: `Add to Cart`, `Add to Favorites`, `Customize This Design`. The customize button opens a side panel (see section 7).
6. **Customize This Design panel:** A slide-in panel on the product page. Fields: colour changes, size, add-ons (name tag, extra charm), a free-text note, optional reference image upload. `Save and Add to Cart` adds the product to the cart with the custom note attached.
7. **Custom Order page:** For a fully custom piece. A friendly form: what do you want made, colours, size, reference images (multi-upload), budget (optional), needed-by date, name and phone. Submit opens a pre-filled WhatsApp message with all details.
8. **Favorites page:** Grid of saved products with `Move to Cart` and a remove option. Friendly empty state.
9. **Cart drawer:** Slides in from the right when an item is added (not a page redirect). Lists items with quantity steppers, custom notes, remove buttons, subtotal, and a `Place Order` button.
10. **Checkout page:** Three simple fields plus notes: name, phone, address, order notes. An order summary sits beside the form. The `Send Order on WhatsApp` button runs Effect 4, then shows a thank-you screen.
11. **About / Contact:** A short story of the maker, a photo, WhatsApp and Instagram links.
12. **Footer:** Coral background with a scalloped top edge, brand, quick links, contact, and a handwritten tagline.

## 7. User Flow

1. Homepage → browse categories or hit `Shop Crochets`.
2. Shop page → click a product card → Product detail page.
3. On product detail the customer can: add to favorites, add to cart as is, or open `Customize This Design`, fill the panel, and add the customised version to the cart.
4. Adding to cart opens the cart drawer. From there: continue shopping or `Place Order`.
5. Checkout form → `Send Order on WhatsApp` → WhatsApp opens with the order pre-filled → thank-you screen, cart cleared.
6. Separate path: `Customize` in the navbar → Custom Order page → submit → WhatsApp opens with the request pre-filled.
7. Favorites is reachable from the navbar at any time and items can be moved to the cart.

## 8. Animations

- Hanging charm: continuous pendulum swing, 4.5s ease-in-out, infinite
- Yarn strands: slow sway, ±3°, staggered delays
- Yarn dividers: path draws in 1.2s on scroll entry
- Hero collage cards: fade up with a slight rotation settle, stagger 0.12s
- Product cards: lift `-6px` and wiggle (`rotate: [0, -1.5, 1.5, 0]`, 0.5s) on hover; image scales 1.05
- Buttons: soft squish on press (`scale 0.96`) and a small bounce on hover
- Heart toggle: pop animation (`scale 1 → 1.35 → 1`) when favorited
- Cart badge: bounce when the count changes
- Cart drawer: slides in from the right, 0.35s, with a dimmed backdrop
- Page transitions: fade and 12px rise, 0.3s

## 9. Layout and Spacing Rules

- Generous white space everywhere. Sections use `py-24` on desktop and `py-16` on mobile.
- Max content width 1180px with `px-6` on mobile and `px-12` on desktop.
- Grid gaps of at least 24px. Never let cards touch or crowd each other.
- One main idea per section. No dense walls of text.
- The layout must never break: no horizontal scroll, no overlapping text, no cut-off images at any width from 320px up.

## 10. Responsive

- **Mobile (<768px):** hamburger menu; H1 clamps to 40px; hero collage stacks under the text; product grid 2 columns; cart drawer is full width; filters scroll horizontally; the hanging charm shrinks to 40px.
- **Tablet:** product grid 3 columns; product detail stays 2 columns.
- **Desktop:** product grid 4 columns; max width 1180px.

## 11. Full Copy

Replace the bracketed items with your own.

**Brand:** \[YOUR BRAND NAME\] · Handmade Crochet

**Navbar:** Shop · Customize · Favorites · About · \[Heart icon\] · \[Cart icon\]

**Hero**

- Eyebrow: `HANDMADE WITH LOVE · ONE STITCH AT A TIME`
- H1: `Soft, bright, and made just for you.`
- Subline: `Cute crochet bags, keychains, toys and more, every piece stitched by hand. Pick a ready-made one or tell us your dream design and we will make it.`
- CTAs: `Shop Crochets` · `Make It Custom`

**Categories:** Bags · Keychains · Toys · Wearables · Home Decor

**Shop**

- H2: `Fresh off the hook`
- Sample products (use 8 placeholders with image, name, price): \[Product name\] · ₹\[price\]
- Card button: `Add to Cart`

**Product detail buttons:** `Add to Cart` · `Add to Favorites` · `Customize This Design`

**Customize panel**

- Title: `Make it yours`
- Helper: `Tell us what to change: colours, size, a name tag, anything. We will stitch it your way.`
- Fields: Colours · Size · Add-ons · Notes · Reference image
- Button: `Save and Add to Cart`

**Custom Order page**

- Eyebrow: `CUSTOM ORDERS`
- H2: `Dream it. We will crochet it.`
- Helper: `Describe the piece you have in mind, add reference photos if you have them, and we will get back to you on WhatsApp.`
- Fields: What would you like made? · Colours · Size · Reference images · Budget (optional) · Needed by · Name · Phone
- Button: `Send Request on WhatsApp`

**Favorites:** H2 `Your favourites`; empty state `Nothing here yet. Tap the heart on anything you love.`

**Cart:** H2 `Your basket`; empty state `Your basket is empty. Let us fix that.`; button `Place Order`

**Checkout:** H2 `Almost there`; fields Name · Phone · Address · Order notes; button `Send Order on WhatsApp`; helper `We will confirm your order and share payment details on WhatsApp.`

**Thank-you:** `Thank you! Your order message is on its way to us on WhatsApp.`

**About:** `[Two or three sentences about the maker and how the pieces are made.]`

**Footer:** \[YOUR BRAND NAME\] · WhatsApp \[number\] · Instagram \[handle\] · © 2026

## 12. Key Dependencies

```json
{
  "motion": "^12.0.0",
  "react-router-dom": "^6.28.0",
  "lucide-react": "^0.460.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.5.0"
}
```
