/**
 * Services — Clean card grid (5 services + 1 booking CTA).
 * Full descriptions always visible (no expand/reveal animation).
 * Subtle lift + gold border + shadow ("color glow") preserved on hover.
 * Layout: 3 across on desktop (2 rows), 2 across on tablet.
 */

const services = [
  {
    name: 'Cuts & Styling',
    short: 'Precision cuts & professional styling',
    detail: 'Precision cuts for men, women, and children, alongside professional blowouts, wash-and-styles, and formal event up-dos.',
  },
  {
    name: 'Coloring',
    short: 'Balayage, highlights & full-color',
    detail: 'Full-color treatments, root touch-ups, glosses, multidimensional highlights, and techniques like balayage and ombre.',
  },
  {
    name: 'Treatments',
    short: 'Deep conditioning & smoothing',
    detail: 'Deep conditioning, scalp treatments, and smoothing procedures such as Brazilian Blowouts or Japanese straightening.',
  },
  {
    name: 'Skin & Spa Treatments',
    short: 'Facials, waxing, lashes & brows',
    detail: 'Facials tailored to concerns like anti-aging, acne, and hydration; waxing and threading for brows, lips, and body; brow laminations, lash extensions, and tinting.',
  },
  {
    name: 'Makeup & Bridal',
    short: 'Event & bridal packages',
    detail: 'Professional everyday or event makeup. Bridal packages coordinate hair, makeup, and nails for the bridal party, often including on-location services and trial runs.',
  },
  {
    name: 'Book an Appointment',
    short: 'Call or message us',
    detail: 'Quick booking',
    isCta: true,
  },
];

const ServiceCard = ({ service, onCtaClick }) => {
  if (service.isCta) {
    // Special CTA card for booking — same card frame + hover glow, different interior content
    return (
      <div className="service-card group rounded-xl p-7 flex flex-col">
        <div>
          <div className="font-medium text-xl tracking-[-0.3px] leading-tight">{service.name}</div>
          <div className="mt-1.5 text-sm text-[var(--text-muted)]">{service.short}</div>
        </div>

        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <a
            href="tel:+17819860112"
            className="block text-lg font-medium tracking-tight hover:text-[#fcba03] transition-colors"
            aria-label="Call Kieu's Salon at (781) 986-0112"
          >
            (781) 986-0112
          </a>
          <button
            type="button"
            onClick={onCtaClick}
            className="btn-gold mt-3 w-full text-xs py-2.5"
          >
            SEND A MESSAGE
          </button>
          <p className="mt-3 text-[12px] text-[var(--text-muted)]/80">
            Walk-ins welcome when available.
          </p>
        </div>
      </div>
    );
  }

  // Standard service card
  return (
    <div className="service-card group rounded-xl p-7 flex flex-col">
      <div>
        <div className="font-medium text-xl tracking-[-0.3px] leading-tight">{service.name}</div>
        <div className="mt-1.5 text-sm text-[var(--text-muted)]">{service.short}</div>
      </div>

      {/* Full description always visible (no reveal/expand) */}
      <div className="mt-4 pt-4 border-t border-[var(--border)] text-[15px] leading-relaxed text-[var(--text-muted)]">
        {service.detail}
      </div>
    </div>
  );
};

const Services = () => {
  const scrollToContact = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 border-b border-[var(--border)]">
      <div className="container">
        <div className="reveal max-w-3xl">
          <div className="eyebrow">Signature Services</div>
          <h2 className="serif mt-3">Timeless Craft, Modern Technique</h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-prose">
            Expert services with easy booking.
          </p>
        </div>

        {/* Responsive grid: 1-col mobile, 2-up tablet, 3-up desktop */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${80 * (index % 3)}ms` }}>
              <ServiceCard service={service} onCtaClick={scrollToContact} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
