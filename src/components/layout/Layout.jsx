import { Outlet } from 'react-router-dom';

import BlueprintCursor from '../common/BlueprintCursor.jsx';
import ScrollReveal from '../common/ScrollReveal.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

function Layout() {
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
