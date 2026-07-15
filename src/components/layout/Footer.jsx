import { socialLinks } from '../../data/socialLinks';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p>&copy; 2026 Nuraidi. Seluruh hak cipta dilindungi.</p>
        </div>
        <div className="footer__links" aria-label="Tautan footer">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#beranda">Kembali ke atas</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
