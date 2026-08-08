import Journal from '../components/Journal';
import Newsletter from '../components/Newsletter';

export default function JournalPage() {
  return (
    <main className="pt-20" style={{ background: 'var(--color-ink-950)' }}>
      <div className="container-site py-16">
        <span className="section-label">The Journal</span>
        <h1 className="heading-display mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          Stories, rituals and<br />ideas for modern love.
        </h1>
      </div>
      <Journal />
      <Newsletter />
    </main>
  );
}
