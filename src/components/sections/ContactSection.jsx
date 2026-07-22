import { siteConfig } from '../../config/siteConfig';
import SectionHeading from '../common/SectionHeading.jsx';
import './ContactSection.css';

const contactIcons = {
  email: '/images/software/gmail.svg',
  whatsapp: '/images/software/whatsapp-svgrepo-com.svg',
  linkedin: '/images/software/linkedin-svgrepo-com.svg',
};

function ContactIcon({ type }) {
  return (
    <span className={`contact__icon contact__icon--${type}`} aria-hidden="true">
      <img src={contactIcons[type]} alt="" />
    </span>
  );
}

function ContactSection() {
  return (
    <section className="section contact" id="kontak">
      <div className="container">
        <SectionHeading
          eyebrow="Kontak"
          title="Terbuka untuk peluang dan kolaborasi profesional."
          lead="Hubungi melalui email, WhatsApp, atau LinkedIn untuk informasi lebih lanjut."
        />
        <div className="contact__grid">
          <div className="contact__info">
            <a href={`mailto:${siteConfig.email}`}>
              <ContactIcon type="email" />
              <span>
                <small>Email</small>
                {siteConfig.email}
              </span>
            </a>
            <a href={siteConfig.whatsappUrl}>
              <ContactIcon type="whatsapp" />
              <span>
                <small>WhatsApp</small>
                {siteConfig.whatsapp}
              </span>
            </a>
            <a href={siteConfig.linkedinUrl}>
              <ContactIcon type="linkedin" />
              <span>
                <small>LinkedIn</small>
                Nuraidi
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
