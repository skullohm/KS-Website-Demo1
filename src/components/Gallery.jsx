
// Gallery images selected from inventory (all except 001.png which is the hero)
// 002–007.png: strong, varied salon/hair photography — 6 quality images available.
// Decision: INCLUDE gallery strip (per brief: "if enough quality images... include").
// Placed after Services for visual breathing room before About. Minimal, no captions.
import img002 from '../assets/images/002.png';
import img003 from '../assets/images/003.png';
import img004 from '../assets/images/004.png';
import img005 from '../assets/images/005.png';
import img006 from '../assets/images/006.png';
import img007 from '../assets/images/007.png';

const galleryImages = [
  { src: img002, alt: 'Kieu\'s Salon stylist portrait' },
  { src: img003, alt: 'Elegant bridal updo hairstyle' },
  { src: img004, alt: 'Long sleek straight hair styling' },
  { src: img005, alt: 'Modern platinum blonde pixie cut' },
  { src: img006, alt: 'Silver ash hair color treatment' },
  { src: img007, alt: 'Creative textured spiky haircut' },
];

const Gallery = () => {
  return (
    <section className="py-12 border-b border-[var(--border)] bg-[var(--surface-alt)]">
      <div className="container">
        <div className="reveal mb-6">
          <div className="eyebrow">The Craft</div>
          <h2 className="serif mt-2 text-xl md:text-2xl tracking-[-0.5px]">Recent Work</h2>
        </div>
      </div>

      {/* Subtle scrolling strip / responsive row with generous spacing */}
      <div className="overflow-x-auto pb-6 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
        <div className="container flex gap-4 md:gap-5 min-w-max">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="reveal w-[260px] md:w-[280px] flex-shrink-0 snap-start"
              style={{ transitionDelay: `${60 * (idx % 4)}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img w-full aspect-[4/3] object-cover rounded-2xl shadow-sm"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="text-center text-[10px] tracking-[2px] text-[var(--text-muted)]/60 mt-1">
          A SELECTION OF WORK FROM THE SALON
        </p>
      </div>
    </section>
  );
};

export default Gallery;
