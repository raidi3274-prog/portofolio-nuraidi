import { siteConfig } from '../../config/siteConfig';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero" id="beranda">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="section__eyebrow">Portofolio Profesional</p>
          <h1>{siteConfig.ownerName}</h1>
          <p className="hero__role">{siteConfig.role}</p>
          <p className="hero__description">{siteConfig.description}</p>
          <div className="hero__meta" aria-label="Informasi ringkas">
            <span>{siteConfig.location}</span>
            <span>{siteConfig.status}</span>
          </div>
          <div className="hero__actions">
            <a className="button button--primary" href="#proyek">
              Lihat Proyek
            </a>
            <a className="button" href={siteConfig.cvPath} download>
              Unduh CV
            </a>
            <a className="button button--ghost" href={siteConfig.whatsappUrl}>
              Hubungi
            </a>
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__blueprint" />
          <span className="hero__section-index" aria-hidden="true">
            01
          </span>
          <div className="hero__portrait">
            <img src="/images/profile/foto-profil.png" alt="Foto profil Nuraidi" fetchPriority="high" />
          </div>
          <span className="hero__dimension" aria-hidden="true" />
          <span className="hero__crosshair" aria-hidden="true" />
          <p className="hero__side-label">Mechanical Engineering</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
