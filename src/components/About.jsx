// Salon interior photo (009.png) — replacing previous portrait for a view of the space.
import aboutImage from '../assets/images/009.png';
/**
 * About — Brief, warm, premium introduction.
 * Photo of the salon interior.
 * Copy is tasteful placeholder; marked editable.
 */
const About = () => {
  return (
    <section id="about" className="py-20 border-b border-[var(--border)]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="reveal max-w-xl">
            <div className="eyebrow">The Salon</div>
            <h2 className="serif mt-3">A space where every detail matters.</h2>

            <div className="mt-6 space-y-5 text-[var(--text-muted)] leading-relaxed">
              <p>
                Kieu's Salon is a boutique full-service destination in Randolph, Massachusetts.
                We believe true beauty is found at the intersection of technical mastery and
                thoughtful hospitality.
              </p>
              <p>
                Whether you are here for a transformative cut, dimensional color, or a complete
                bridal transformation, our team approaches every guest with the same quiet
                intention: to leave you feeling more like yourself — only better.
              </p>
            </div>

            {/* Small signature note — editable */}
            <p className="mt-8 text-sm italic text-[var(--text-muted)]/90">
              — Kieu &amp; the team {/* [EDITABLE] */}
            </p>
          </div>

          {/* Image */}
          <div className="reveal md:order-1 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-sm">
              <img
                src={aboutImage}
                alt="Kieu's Salon interior with plants and styling stations"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle gold corner accent line */}
            <div className="absolute -bottom-3 -right-3 w-24 h-px bg-[#fcba03]" aria-hidden="true" />
            <div className="absolute -bottom-3 -right-3 w-px h-24 bg-[#fcba03]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
