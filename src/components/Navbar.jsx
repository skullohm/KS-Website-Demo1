import { useState, useEffect } from 'react';

/**
 * Navbar — Sticky, transparent at top, gains backdrop-blur + subtle gold hairline on scroll.
 * Logo: Text-based (no dedicated logo image found in /images folder — see comment in App.jsx).
 * Theme toggle (sun/moon) + mobile hamburger menu.
 */
const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener: add blur + border when not at top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on link click or resize
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#hours', label: 'Hours' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href) => {
    closeMenu();
    // Smooth scroll is handled by CSS scroll-behavior + anchor
    // Small offset for sticky nav
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
      e.preventDefault();
    }
  };

  return (
    <nav
      className={`nav w-full z-50 ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo (text-based) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
          aria-label="Kieu's Salon home"
        >
          <span className="serif text-2xl tracking-[-1.5px] font-medium text-current group-hover:text-[#fcba03] transition-colors">
            KIEU'S
          </span>
          <span className="serif text-2xl tracking-[-1.5px] font-medium text-[#fcba03]">
            SALON
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-x-9 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link text-current hover:text-[#fcba03]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Theme toggle + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle — clearly visible */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcba03]"
          >
            {isDark ? (
              /* Sun icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-1"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-lg">
          <div className="container py-6 flex flex-col gap-y-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link py-1 text-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[var(--border)]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-gold w-full justify-center text-xs py-3"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
