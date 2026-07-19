import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import BlueprintCursor from '../common/BlueprintCursor.jsx';
import ScrollReveal from '../common/ScrollReveal.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

function Layout() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight ?? 0;
      const top = target
        ? target.getBoundingClientRect().top + window.scrollY - navbarHeight - 8
        : 0;

      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return (
    <>
      <BlueprintCursor />
      <ScrollReveal />
      <div className="site-shell">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
