/**
 * Services — Clean card grid.
 * All 7 services use EXACT text from the brief.
 * Full description is always visible (no expand/reveal animation).
 * Subtle lift + gold border + shadow ("color glow") preserved on hover.
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
    name: 'Extensions',
    short: 'Tape-in, sew-in & fusion',
    detail: 'Tape-in, sew-in, or fusion extension applications.',
  },
  {
    name: 'Manicures & Pedicures',
    short: 'Spa treatments & nail enhancements',
    detail: 'Standard and spa treatments for hands and feet, including polish changes. Enhancements: gel, acrylic, or dip powder applications, plus custom nail art.',
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
];

const ServiceCard = ({ service }) => {
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
  return (
    <section id="services" className="py-20 border-b border-[var(--border)]">
      <div className="container">
        <div className="reveal max-w-3xl">
          <div className="eyebrow">Signature Services</div>
          <h2 className="serif mt-3">Timeless Craft, Modern Technique</h2>
          <p className="mt-4 text-[var(--text-muted)] max-w-prose">
            Seven refined offerings delivered with precision and care.
          </p>
        </div>

        {/* Responsive grid: 1-col mobile, 2-up tablet, 3-up desktop */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${80 * (index % 3)}ms` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
