import hickey1 from '../assets/hickey-1.png';
import hickey2 from '../assets/hickey-2.png';
import hickey3 from '../assets/hickey-3.png';
import hickey4 from '../assets/hickey-4.png';
import hickey5 from '../assets/hickey-5.png';
import hickey6 from '../assets/hickey-6.png';

const IMAGES = [
  { src: hickey1, alt: 'Hickey intimacy chocolate' },
  { src: hickey2, alt: 'Hickey sensory experience' },
  { src: hickey3, alt: 'Hickey date night' },
  { src: hickey4, alt: 'Hickey couple ritual' },
  { src: hickey5, alt: 'Hickey premium packaging' },
  { src: hickey6, alt: 'Hickey connection moment' },
];

const TRACK = [...IMAGES, ...IMAGES];

export default function ImageMarquee() {
  return (
    <section
      className="py-2 sm:py-3"
      style={{
        background: '#24152F',
        borderTop: '1px solid rgba(201,164,92,0.1)',
        borderBottom: '1px solid rgba(201,164,92,0.1)',
        overflow: 'hidden',
        maxWidth: '100vw',
      }}
    >
      <div
        className="flex gap-2 sm:gap-3"
        style={{ animation: 'marqueeLeft 32s linear infinite', width: 'max-content' }}
      >
        {TRACK.map((img, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden"
            style={{ width: 'clamp(140px, 30vw, 220px)', height: 'clamp(180px, 38vw, 280px)', border: '1px solid rgba(201,164,92,0.08)' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
