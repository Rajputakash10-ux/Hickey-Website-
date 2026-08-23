import type { Product, Review, Ingredient, FAQItem, NavLink } from '../types';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FeatureBarItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  href: string;
}

export const CURRENCY = '₹';

// ── Configurable product price — change here to update everywhere ──────────────
export const PRODUCT_PRICE = 799;
export const PRODUCT_COMPARE_PRICE = undefined as number | undefined;

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
    { src: '/assets/etx-1.png', alt: 'HICKEY — front view' },
    { src: '/assets/etx-2.png', alt: 'HICKEY — detail' },
    { src: '/assets/etx-3.png', alt: 'HICKEY — lifestyle' },
    { src: '/assets/etx-4.png', alt: 'HICKEY — packaging' },
    { src: '/assets/etx-5.png', alt: 'HICKEY — ingredients' },
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
export const FEATURED_PRODUCT: Product = MAIN_PRODUCT;

export const FEATURE_BAR_ITEMS: FeatureBarItem[] = [
  { icon: '🚚', title: 'Free Shipping', subtitle: 'On all orders' },
  { icon: '🔒', title: 'Discreet Packaging', subtitle: 'Plain outer box' },
  { icon: '🍫', title: 'Premium Chocolate', subtitle: 'Artisan crafted' },
  { icon: '🎴', title: 'Free Scratch Card', subtitle: 'In every pack' },
];

export const STATS: Stat[] = [
  { value: '10K+', label: 'Happy Couples' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '60g', label: 'Premium Chocolate' },
  { value: '100%', label: 'Discreet Delivery' },
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'The Art of the Intentional Date Night',
    excerpt: 'How slowing down and being present can transform an ordinary evening into something you both remember.',
    image: '/assets/hickey-1.png',
    category: 'Rituals',
    readTime: '4 min read',
    date: 'March 2025',
  },
  {
    id: 'a2',
    title: 'Why Dark Chocolate and Intimacy Go Hand in Hand',
    excerpt: 'A look at the science and tradition behind chocolate as a symbol of connection and desire.',
    image: '/assets/hickey-2.png',
    category: 'Ingredients',
    readTime: '5 min read',
    date: 'February 2025',
  },
  {
    id: 'a3',
    title: 'Gift Ideas That Actually Mean Something',
    excerpt: 'Moving beyond generic gifts — how to give something that sparks a real moment between two people.',
    image: '/assets/hickey-3.png',
    category: 'Gifting',
    readTime: '3 min read',
    date: 'January 2025',
  },
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: "Valentine's Pop-Up, Mumbai",
    description: 'An exclusive in-store experience celebrating intimacy and connection. Limited spots available.',
    image: '/assets/hickey-1.png',
    date: 'Feb 14, 2025',
    location: 'Mumbai',
    href: '/events/valentines-mumbai',
  },
  {
    id: 'e2',
    title: 'Couples Night, Bangalore',
    description: 'A curated evening for couples — chocolate tasting, scratch card games and more.',
    image: '/assets/hickey-2.png',
    date: 'Mar 8, 2025',
    location: 'Bangalore',
    href: '/events/couples-night-bangalore',
  },
  {
    id: 'e3',
    title: 'Anniversary Drop Launch, Delhi',
    description: 'Be the first to experience our limited anniversary drop with an exclusive launch event.',
    image: '/assets/hickey-3.png',
    date: 'Apr 5, 2025',
    location: 'Delhi',
    href: '/events/anniversary-drop-delhi',
  },
];

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
