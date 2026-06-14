

// Hero image: 001.png — best landscape salon interior from inventory
import heroImage from '../assets/images/001.png';
/**
 * Hero — Near full-viewport with salon interior.
 * Oversized serif headline + elegant tagline + single gold CTA button.
 * Image used from asset pipeline (no absolute Windows paths).
 */
const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden border-b border-[var(--border)]"
      aria-label="Hero"
    >
      {/* Background image — premium quiet feel */}
      <img
        src={heroImage}
        alt="Interior of Kieu's Salon with modern black styling chairs and warm lighting"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle overlay — works in light & dark (premium restraint) */}
      <div className="absolute inset-0 bg-black/45 dark:bg-black/60" aria-hidden="true" />

      {/* Gold hairline accent at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#fcba03] opacity-60" aria-hidden="true" />

      <div className="relative z-10 container text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Small elegant eyebrow */}
          <div className="eyebrow mb-6 tracking-[0.3em]">Randolph, Massachusetts</div>

          {/* Main headline — large airy serif */}
          <h1 className="serif text-white text-[3.25rem] md:text-[4.25rem] leading-[1.02] tracking-[-2.5px] md:tracking-[-3.5px]">
            Where Beauty<br />Meets Craft.
          </h1>

          {/* Tagline */}
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-[34ch] mx-auto">
            A premium full-service salon in the heart of Randolph.
          </p>

          {/* Single gold-outlined CTA — scrolls to contact */}
          <div className="mt-10">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="btn-gold text-white border-white/70 hover:bg-white hover:text-black hover:border-white inline-flex text-xs md:text-sm tracking-[0.12em] px-8 py-3.5"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator (subtle) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-px h-8 bg-white/50" />
      </div>
    </section>
  );
};

export default Hero;
