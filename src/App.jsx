import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Hours from './components/Hours';
import Contact from './components/Contact';

/**
 * Kieu's Salon — Premium single-page React website (Quiet Luxury)
 *
 * IMAGES INVENTORY (gate 1 completed before any code):
 * Folder: C:\Users\AK\Desktop\ks-website\images contained exactly:
 *   001.png — Salon interior (black chairs, yellow tones) → BEST HERO (wide atmospheric)
 *   002.png — Owner/stylist portrait (colorful dress) → About section owner photo
 *   003.png — Elegant updo with baby's breath → Gallery / Bridal styling
 *   004.png — Long straight black hair (back view) → Gallery / Extensions
 *   005.png — Modern platinum pixie cut → Gallery / Cuts & Styling
 *   006.png — Silver/ash hair color (yellow top) → Gallery / Coloring
 *   007.png — Spiky textured cut → Gallery / Cuts & Styling
 *
 * NO dedicated logo file existed (all 7 files are photographic salon/hair images).
 * Decision: Use elegant text logo "KIEU'S SALON" (serif + gold accent) in nav + footer.
 * All images copied to src/assets/images/ and imported via Vite asset pipeline.
 * Gallery strip included (6 strong images beyond hero).
 *
 * Theme: darkMode via 'class' on <html>, persisted in localStorage, falls back to light.
 * Gold (#fcba03) used strictly as accent (never large fills).
 */

function App() {
  // ===================== THEME SYSTEM =====================
  // Persist visitor preference. Fall back to light if nothing stored (per brief).
  // Lazy initializer avoids setState inside effect (lint + best practice).
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply .dark class on initial mount (head script already did for no-flash; this keeps React state + class in sync)
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Only run once after mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    const root = document.documentElement;
    if (newIsDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // ===================== SCROLL REVEAL (IntersectionObserver) =====================
  // Robust: observe after mount + small delay to catch dynamically rendered sections
  useEffect(() => {
    let observer;

    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
      );

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => observer.observe(el));
    };

    // Run immediately + delayed pass (components are sync but safe)
    initObserver();
    const t = setTimeout(initObserver, 120);

    return () => {
      clearTimeout(t);
      if (observer) observer.disconnect();
    };
  }, []);

  // ===================== RENDER =====================
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <Hero />

      <Services />
      <Gallery />

      <About />

      <Hours />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
