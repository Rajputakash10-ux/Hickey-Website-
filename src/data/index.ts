import type { Product, Review, Ingredient, FAQItem, NavLink } from '../types';

export const CURRENCY = '₹';

// ── Configurable product price — change here to update everywhere ──────────────
export const PRODUCT_PRICE = 599;
export const PRODUCT_COMPARE_PRICE = 799;

export const NAV_LINKS: NavLink[] = [
  { label: 'Shop', href: '/shop' },
  { label: 'Why HICKEY', href: '/#why-hickey' },
  { label: 'Ingredients', href: '/#ingredients' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
];

export const MAIN_PRODUCT: Product = {
  id: 'hickey-intimacy-chocolate',
  title: 'HICKEY',
  subtitle: 'Intimacy Dark Chocolate',
  description:
    'A premium dark chocolate crafted for intimate moments, shared experiences and connection between couples. 60g of rich, indulgent dark chocolate — with a free Secret Position Scratch Card inside every pack.',
  price: PRODUCT_PRICE,
  compareAtPrice: PRODUCT_COMPARE_PRICE,
  images: [
    { src: '/src/assets/hickey-1.png', alt: 'HICKEY Intimacy Dark Chocolate — front pack' },
    { src: '/src/assets/hickey-2.png', alt: 'HICKEY Intimacy Dark Chocolate — back pack' },
    { src: '/src/assets/hickey-3.png', alt: 'HICKEY dark chocolate pieces' },
    { src: '/src/assets/hickey-4.png', alt: 'HICKEY Secret Position Scratch Card' },
    { src: '/src/assets/hickey-5.png', alt: 'HICKEY product lifestyle' },
  ],
  category: 'consumables',
  badge: 'Bestseller',
  available: true,
  weight: '60g',
  whatsInside: [
    '1 × HICKEY Intimacy Dark Chocolate (60g)',
    '1 × FREE Secret Position Scratch Card',
    '1 × Premium Discreet Packaging',
  ],
};

export const PRODUCTS: Product[] = [MAIN_PRODUCT];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    initials: 'PM',
    name: 'Priya M.',
    city: 'Mumbai',
    rating: 5,
    text: 'Made our usual date night feel completely different. The packaging alone sets the mood — and the scratch card was such a fun surprise.',
    product: 'HICKEY Intimacy Dark Chocolate',
    date: 'December 2024',
  },
  {
    id: 'r2',
    initials: 'AN',
    name: 'Arjun & Neha',
    city: 'Bangalore',
    rating: 5,
    text: 'Beautiful packaging and the scratch card was such a fun surprise. We ended up ordering two more packs as anniversary gifts.',
    product: 'HICKEY Intimacy Dark Chocolate',
    date: 'January 2025',
  },
  {
    id: 'r3',
    initials: 'RS',
    name: 'Rohan S.',
    city: 'Delhi',
    rating: 5,
    text: 'The whole experience feels much more premium than regular chocolate. It\'s thoughtful, tasteful and genuinely different.',
    product: 'HICKEY Intimacy Dark Chocolate',
    date: 'February 2025',
  },
  {
    id: 'r4',
    initials: 'KR',
    name: 'Kavya R.',
    city: 'Hyderabad',
    rating: 5,
    text: 'Gifted this to my partner and the reaction was priceless. The discreet packaging was a nice touch — arrived looking like a luxury gift.',
    product: 'HICKEY Intimacy Dark Chocolate',
    date: 'March 2025',
  },
  {
    id: 'r5',
    initials: 'SA',
    name: 'Sneha A.',
    city: 'Pune',
    rating: 5,
    text: 'We opened it together and the scratch card turned a simple evening into something we still talk about. Highly recommend.',
    product: 'HICKEY Intimacy Dark Chocolate',
    date: 'March 2025',
  },
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'maca',
    name: 'Maca Root Powder',
    origin: 'Peruvian',
    description: 'A celebrated Andean root, traditionally used to support energy and vitality. Adds an earthy warmth to every bite.',
    icon: '🌿',
  },
  {
    id: 'damiana',
    name: 'Damiana Leaf',
    origin: 'Mexican',
    description: 'A fragrant herb with a long history in traditional wellness rituals. Known for its calming, mood-lifting qualities.',
    icon: '🍃',
  },
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    origin: 'KSM-66®',
    description: 'India\'s most revered adaptogen. Supports calm focus and helps the body ease into the present moment.',
    icon: '🌱',
  },
  {
    id: 'ginseng',
    name: 'Korean Red Ginseng',
    origin: 'Korean',
    description: 'A prized root used for centuries in Eastern wellness traditions. Brings warmth and a sense of grounded energy.',
    icon: '🫚',
  },
  {
    id: 'cayenne',
    name: 'Cayenne Pepper',
    origin: 'South American',
    description: 'A gentle heat that warms from within. Adds a subtle, lingering spice that makes the chocolate unforgettable.',
    icon: '🌶️',
  },
  {
    id: 'nutmeg',
    name: 'Nutmeg',
    origin: 'Indonesian',
    description: 'A warm, aromatic spice with deep roots in Indian and global culinary traditions. Adds depth and complexity.',
    icon: '🫙',
  },
  {
    id: 'cinnamon',
    name: 'Ceylon Cinnamon',
    origin: 'Sri Lankan',
    description: 'The finest cinnamon in the world. Delicate, sweet and warming — it rounds out the chocolate beautifully.',
    icon: '🪵',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is HICKEY?',
    answer: 'HICKEY is a premium intimacy dark chocolate crafted for couples. It\'s designed to make shared moments more memorable — combining rich dark chocolate with a playful free Secret Position Scratch Card in every pack.',
  },
  {
    id: 'faq-2',
    question: 'What does HICKEY contain?',
    answer: 'HICKEY Intimacy Dark Chocolate contains premium dark chocolate blended with Maca Root Powder, Damiana Leaf, Ashwagandha (KSM-66®), Korean Red Ginseng, Cayenne Pepper, Nutmeg and Ceylon Cinnamon. Full ingredient details are on the packaging.',
  },
  {
    id: 'faq-3',
    question: 'Who is HICKEY for?',
    answer: 'HICKEY is crafted for adult couples who want to make their shared moments more intentional and memorable. It\'s perfect for date nights, anniversaries, gifts, or simply turning an ordinary evening into something special.',
  },
  {
    id: 'faq-4',
    question: 'What comes inside the package?',
    answer: 'Every HICKEY pack includes: 1 × HICKEY Intimacy Dark Chocolate (60g) and 1 × FREE Secret Position Scratch Card — all in premium, discreet packaging.',
  },
  {
    id: 'faq-5',
    question: 'Is the scratch card free?',
    answer: 'Yes — absolutely free. The Secret Position Scratch Card is included with every single HICKEY pack at no extra cost. It\'s part of the experience.',
  },
  {
    id: 'faq-6',
    question: 'How does the scratch card work?',
    answer: 'The scratch card is a playful surprise included in every pack. Scratch the surface together to reveal a secret position — it\'s designed to spark curiosity, laughter and connection between couples.',
  },
  {
    id: 'faq-7',
    question: 'How should I store the chocolate?',
    answer: 'Store HICKEY in a cool, dry place away from direct sunlight. Ideal storage temperature is between 16–18°C. Avoid refrigeration as it can affect the texture and bloom of the chocolate.',
  },
  {
    id: 'faq-8',
    question: 'Is HICKEY suitable as a gift?',
    answer: 'Absolutely. HICKEY arrives in premium, discreet packaging that makes it a thoughtful and elegant gift for anniversaries, birthdays, Valentine\'s Day, or any occasion where you want to give something genuinely different.',
  },
  {
    id: 'faq-9',
    question: 'Do you offer discreet packaging?',
    answer: 'Yes. All HICKEY orders are shipped in plain, discreet outer packaging with no branding visible on the outside. The premium HICKEY experience is revealed only when opened.',
  },
  {
    id: 'faq-10',
    question: 'How do I place an order?',
    answer: 'Simply click "Shop HICKEY" or "Add to Cart" on this page, select your quantity and proceed to checkout. We accept all major payment methods and ship across India.',
  },
];
