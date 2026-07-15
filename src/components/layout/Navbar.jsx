import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { navigationItems } from '../../data/navigation';
import { siteConfig } from '../../config/siteConfig';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();
  const activeHref = hash || '#beranda';

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Navigasi utama">
        <Link className="navbar__brand" to="/#beranda" onClick={() => setIsOpen(false)}>
          {siteConfig.ownerName}
        </Link>
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label="Buka menu navigasi"
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
