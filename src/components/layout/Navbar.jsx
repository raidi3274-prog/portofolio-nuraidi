import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navigationItems } from '../../data/navigation';
import { siteConfig } from '../../config/siteConfig';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const progressRef = useRef(null);
  const { hash } = useLocation();
  const activeHref = hash || '#beranda';

  useEffect(() => {
    const indicator = progressRef.current;
    const brand = indicator?.parentElement;
    if (!indicator || !brand) return undefined;

    let frame;
    let maxTravel = 0;

    const update = () => {
      const contact = document.getElementById('kontak');
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const contactScroll = contact
        ? contact.getBoundingClientRect().top + window.scrollY - brand.closest('.navbar').offsetHeight
        : maxScroll;
      const end = Math.max(1, Math.min(contactScroll, maxScroll));
      const progress = Math.min(1, Math.max(0, window.scrollY / end));

      indicator.style.transform = `translate3d(${progress * maxTravel}px, 0, 0)`;
      frame = undefined;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const measure = () => {
      maxTravel = brand.getBoundingClientRect().width - indicator.getBoundingClientRect().width;
      requestUpdate();
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(brand);
    measure();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', measure);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', measure);
      resizeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Navigasi utama">
        <Link className="navbar__brand" to="/#beranda" onClick={() => setIsOpen(false)}>
          {siteConfig.ownerName}
          <span className="navbar__scroll-progress" ref={progressRef} aria-hidden="true" />
        </Link>
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar__links ${isOpen ? 'is-open' : ''}`} id="primary-navigation">
          {navigationItems.map((item) => (
            <a
              className={activeHref === item.href ? 'is-active' : undefined}
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? 'location' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
