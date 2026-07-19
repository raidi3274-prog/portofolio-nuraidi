import { useState } from 'react';

import { siteConfig } from '../../config/siteConfig';
import SectionHeading from '../common/SectionHeading.jsx';
import './ContactSection.css';

const contactIcons = {
  email: (
    <path d="M3 5.5h18v13H3v-13Zm1.5 1.3L12 12l7.5-5.2M4.5 17l5.3-5.2m9.7 5.2-5.3-5.2" />
  ),
  whatsapp: (
    <path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.4-4.9a8.4 8.4 0 1 1 16.1-3.9Zm-11.8-4c.2-.5.4-.5.8-.5h.5c.2 0 .4.1.5.4l.9 2.1c.1.3.1.5-.1.7l-.7.9c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 3 2.8.2.1.4.1.6-.1l.9-1.1c.2-.2.4-.3.7-.2l2 .9c.3.1.5.3.5.5 0 .3-.2 1.6-.8 2.2-.6.6-1.5.9-2.4.7-1.2-.2-2.8-.8-4.7-2.5-1.6-1.4-2.7-3.2-3-4.4-.3-1.2 0-2.3.5-2.8l.8-.2Z" />
  ),
  linkedin: (
    <path d="M5.2 9.2v9.3M5.2 5.5v.1m4.2 12.9V9.2m0 4c.7-2.5 5.6-3.1 5.6.8v4.5m3.8-15H5.2A1.7 1.7 0 0 0 3.5 5.2v13.6a1.7 1.7 0 0 0 1.7 1.7h13.6a1.7 1.7 0 0 0 1.7-1.7V5.2a1.7 1.7 0 0 0-1.7-1.7Z" />
  ),
};

function ContactIcon({ type }) {
  return (
    <span className="contact__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {contactIcons[type]}
      </svg>
    </span>
  );
}

function ContactSection() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Formulir belum terhubung ke layanan pengiriman. Silakan hubungi melalui email atau WhatsApp.');
    event.currentTarget.reset();
  }

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
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Nama
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Subjek
              <input name="subject" type="text" required />
            </label>
            <label>
              Pesan
              <textarea name="message" rows="5" required />
            </label>
            <button className="button button--primary" type="submit">
              Kirim Pesan
            </button>
            {status ? (
              <p className="contact__status" role="status" aria-live="polite">
                {status}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
