import type { Product, Review, Event, Article, NavLink } from '../types';

export const CURRENCY = '₹';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: '5-Day Experience', href: '/experience' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
];

export const FEATURED_PRODUCT: Product = {
  id: 'velvet-hour-kit',
  title: 'The Velvet Hour',
  subtitle: 'Evening Ritual Kit',
  description:
    'An evening ritual for two. Dark chocolate, warm amber candlelight and a game that turns conversation into connection.',
  price: 1899,
  compareAtPrice: 2499,
  images: [
    { src: '/assets/hickey-hero.jpg', alt: 'The Velvet Hour evening ritual kit' },
    { src: '/assets/hickey-package.jpg', alt: 'The Velvet Hour packaging detail' },
  ],
  category: 'kits',
  badge: 'This Month\'s Drop',
  available: true,
  dropNumber: 8,
  dropDate: 'Jan 2025',
  limited: 200,
  whatsInside: [
    '1 × HICKEY Intimacy Dark Chocolate (60g)',
    '1 × Amber Soy Candle — Oud & Sandalwood',
    '1 × Secret Position Scratch Card',
    '1 × Conversation Ritual Card Deck (32 cards)',
    '1 × Premium Gift Box',
  ],
};

export const PRODUCTS: Product[] = [
  {
    id: 'hickey-intimacy-chocolate',
    title: 'HICKEY Dark Chocolate',
    subtitle: 'Intimacy Chocolate',
    description: 'Premium dark chocolate crafted for shared moments.',
    price: 599,
    compareAtPrice: 799,
    images: [
      { src: '/assets/hickey-hero.jpg', alt: 'HICKEY Intimacy Dark Chocolate' },
      { src: '/assets/hickey-chocolate-pieces.jpg', alt: 'HICKEY chocolate pieces' },
    ],
    category: 'consumables',
    badge: 'Bestseller',
    available: true,
    weight: '60g',
  },
  {
    id: 'velvet-hour-kit',
    title: 'The Velvet Hour',
    subtitle: 'Evening Ritual Kit',
    description: 'Dark chocolate, candlelight and a game for two.',
    price: 1899,
    compareAtPrice: 2499,
    images: [
      { src: '/assets/hickey-package.jpg', alt: 'The Velvet Hour kit' },
      { src: '/assets/hickey-lifestyle.jpg', alt: 'The Velvet Hour lifestyle' },
    ],
    category: 'kits',
    badge: 'Drop 08',
    available: true,
    dropNumber: 8,
  },
  {
    id: 'scratch-card-game',
    title: 'Secret Position Game',
    subtitle: 'Scratch Card Set',
    description: 'A playful scratch card game designed for couples.',
    price: 299,
    compareAtPrice: 399,
    images: [
      { src: '/assets/hickey-scratch-card.jpg', alt: 'Secret Position Scratch Card' },
      { src: '/assets/hickey-lifestyle-2.jpg', alt: 'Scratch card lifestyle' },
    ],
    category: 'games',
    badge: 'Fan Favourite',
    available: true,
  },
  {
    id: 'ritual-gift-box',
    title: 'The Ritual Gift Box',
    subtitle: 'Premium Gift Set',
    description: 'Three evenings of connection in one premium gift box.',
    price: 2999,
    compareAtPrice: 3999,
    images: [
      { src: '/assets/hickey-lifestyle-3.jpg', alt: 'The Ritual Gift Box' },
      { src: '/assets/hickey-package.jpg', alt: 'Gift box packaging' },
    ],
    category: 'gifts',
    badge: 'Gift Ready',
    available: true,
  },
  {
    id: 'date-night-kit',
    title: 'Date Night Kit',
    subtitle: 'Complete Experience',
    description: 'Everything you need for an unforgettable evening.',
    price: 1799,
    compareAtPrice: 2399,
    images: [
      { src: '/assets/hickey-lifestyle-4.jpg', alt: 'Date Night Kit' },
      { src: '/assets/hickey-hero.jpg', alt: 'Date Night Kit contents' },
    ],
    category: 'kits',
    available: true,
  },
  {
    id: 'conversation-cards',
    title: 'Conversation Ritual Cards',
    subtitle: 'Card Deck',
    description: '32 cards that turn conversation into connection.',
    price: 499,
    compareAtPrice: 699,
    images: [
      { src: '/assets/hickey-lifestyle-5.jpg', alt: 'Conversation Ritual Cards' },
      { src: '/assets/hickey-lifestyle-2.jpg', alt: 'Cards in use' },
    ],
    category: 'games',
    badge: 'New',
    available: true,
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
    product: 'The Velvet Hour Kit',
    date: 'December 2024',
  },
  {
    id: 'r2',
    initials: 'AN',
    name: 'Arjun & Neha',
    city: 'Bangalore',
    rating: 5,
    text: 'Beautiful packaging and the scratch card was such a fun surprise. We ended up ordering two more packs as anniversary gifts.',
    product: 'HICKEY Dark Chocolate',
    date: 'January 2025',
  },
  {
    id: 'r3',
    initials: 'RS',
    name: 'Rohan S.',
    city: 'Delhi',
    rating: 5,
    text: 'The whole experience feels much more premium than regular chocolate. It\'s thoughtful, tasteful and genuinely different.',
    product: 'Date Night Kit',
    date: 'February 2025',
  },
  {
    id: 'r4',
    initials: 'KR',
    name: 'Kavya R.',
    city: 'Hyderabad',
    rating: 5,
    text: 'Gifted this to my partner and the reaction was priceless. The discreet packaging was a nice touch — arrived looking like a luxury gift.',
    product: 'The Ritual Gift Box',
    date: 'March 2025',
  },
  {
    id: 'r5',
    initials: 'SA',
    name: 'Sneha A.',
    city: 'Pune',
    rating: 5,
    text: 'We did the 5-day experience together and it genuinely brought us closer. Highly recommend for any couple.',
    product: '5-Day Experience',
    date: 'March 2025',
  },
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    image: '/assets/hickey-lifestyle-3.jpg',
    date: 'Feb 14, 2025',
    location: 'Mumbai',
    title: 'The Valentine\'s Ritual Evening',
    description: 'An intimate pop-up experience for couples.',
    href: '#',
  },
  {
    id: 'e2',
    image: '/assets/hickey-lifestyle-4.jpg',
    date: 'Mar 8, 2025',
    location: 'Bangalore',
    title: 'Sensory Tasting Night',
    description: 'A guided sensory chocolate tasting for two.',
    href: '#',
  },
  {
    id: 'e3',
    image: '/assets/hickey-lifestyle-5.jpg',
    date: 'Apr 5, 2025',
    location: 'Delhi',
    title: 'The Connection Workshop',
    description: 'An evening of conversation, play and connection.',
    href: '#',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    image: '/assets/hickey-lifestyle.jpg',
    category: 'Relationship Culture',
    title: 'Why Modern Couples Are Choosing Rituals Over Routine',
    excerpt: 'The science behind intentional date nights and why they work.',
    readTime: '4 min read',
    date: 'Jan 2025',
    href: '#',
  },
  {
    id: 'a2',
    image: '/assets/hickey-lifestyle-2.jpg',
    category: 'Date Ideas',
    title: 'The Art of Staying In: A Guide to the Perfect Home Date',
    excerpt: 'How to turn your living room into the most romantic place in the city.',
    readTime: '6 min read',
    date: 'Feb 2025',
    href: '#',
  },
  {
    id: 'a3',
    image: '/assets/hickey-lifestyle-3.jpg',
    category: 'Connection',
    title: 'Sensory Play and Intimacy: What the Research Says',
    excerpt: 'Exploring how shared sensory experiences deepen emotional bonds.',
    readTime: '5 min read',
    date: 'Mar 2025',
    href: '#',
  },
];

export const STATS = [
  { value: '14k+', label: 'Couples Joined' },
  { value: '4.9', label: 'Average Rating' },
  { value: '08', label: 'Monthly Drops' },
  { value: '30+', label: 'Events Hosted' },
];

export const FEATURE_BAR_ITEMS = [
  { icon: '◈', title: 'Sensory Products', subtitle: 'Consumables, kits & rituals' },
  { icon: '◉', title: 'Monthly Drops', subtitle: 'Themed limited releases' },
  { icon: '◎', title: 'Immersive Events', subtitle: 'IRL experiences & pop-ups' },
  { icon: '◇', title: 'Digital Games', subtitle: '5-day sensory experiences' },
  { icon: '◆', title: 'Community Rewards', subtitle: 'Points, perks & early access' },
];
