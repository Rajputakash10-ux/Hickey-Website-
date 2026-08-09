import FreeExperience from '../components/FreeExperience';
import Newsletter from '../components/Newsletter';

export default function ExperiencePage() {
  return (
    <main className="pt-20" style={{ background: '#24152F' }}>
      <div className="container-site py-16">
        <span className="section-label">5-Day Experience</span>
        <h1 className="heading-display mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          The Virtual<br />Sensory Experience
        </h1>
        <p className="font-sans text-cream-300 opacity-60 mt-4 max-w-lg" style={{ fontSize: '0.95rem' }}>
          A free 5-day digital date night experience designed for modern couples.
        </p>
      </div>
      <FreeExperience />
      <Newsletter />
    </main>
  );
}
