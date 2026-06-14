
/**
 * Footer — Thin gold hairline divider above.
 * Logo (text), quick links, phone (tel:), address, brief hours, copyright.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#hours', label: 'Hours' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      e.preventDefault();
    }
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="gold-rule w-full" aria-hidden="true" />

      <div className="container py-12 grid grid-cols-1 md:grid-cols-12 gap-y-10 text-sm">
        {/* Logo + tag */}
        <div className="md:col-span-4">
          <a href="#hero" className="inline-flex items-baseline gap-1.5 group" onClick={(e) => handleLinkClick(e, '#hero')}>
            <span className="serif text-2xl tracking-[-1.5px] font-medium group-hover:text-[#fcba03] transition-colors">KIEU'S</span>
            <span className="serif text-2xl tracking-[-1.5px] font-medium text-[#fcba03]">SALON</span>
          </a>
          <p className="mt-3 max-w-[18ch] text-[var(--text-muted)]">
            Where beauty meets craft.
          </p>
        </div>

        {/* Quick links */}
        <div className="md:col-span-2">
          <div className="eyebrow mb-3">Navigate</div>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleLinkClick(e, l.href)} className="footer-link text-[var(--text)] hover:text-[#fcba03]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="md:col-span-3">
          <div className="eyebrow mb-3">Visit Us</div>
          <address className="not-italic space-y-1 text-[var(--text-muted)]">
            <div>Kieu's Salon</div>
            <div>1189 N Main St</div>
            <div>Randolph, MA 02368</div>
          </address>
          <a
            href="tel:+17819860112"
            className="footer-link mt-2 inline-block hover:text-[#fcba03] text-[var(--text)]"
          >
            (781) 986-0112
          </a>
        </div>

        {/* Hours summary */}
        <div className="md:col-span-3">
          <div className="eyebrow mb-3">Hours</div>
          <div className="text-[var(--text-muted)] space-y-[2px] text-[13px]">
            <div>Mon — Closed</div>
            <div>Tue–Wed — 9:30 AM–7:00 PM</div>
            <div>Thu — 9:30 AM–1:00 PM</div>
            <div>Fri–Sat — 9:30 AM–7:00 PM</div>
            <div>Sun — 9:30 AM–5:00 PM</div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="container py-5 text-xs text-[var(--text-muted)] flex flex-col md:flex-row md:items-center gap-1 md:gap-3 justify-between">
          <div>© {currentYear} Kieu's Salon. All rights reserved.</div>
          <div className="opacity-70">Premium hair &amp; beauty in the heart of Randolph.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
