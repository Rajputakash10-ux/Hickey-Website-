export default function AnnouncementBar() {
  const items = [
    '🎁 Free Secret Position Scratch Card with Every Pack',
    '🚚 Discreet Delivery Across India',
    '🍫 Premium Dark Chocolate — 60g',
    '💛 Loved by 14,000+ Couples',
  ];
  const repeated = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background: '#E8D0B0', borderBottom: '1px solid rgba(184,134,11,0.15)', height: 36 }}
      role="banner"
      aria-label="Promotion"
    >
      <div
        className="flex items-center h-full whitespace-nowrap"
        style={{ animation: 'marqueeLeft 28s linear infinite', width: 'max-content' }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="font-sans"
            style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--color-choc-800)', textTransform: 'uppercase', paddingRight: '4rem' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
