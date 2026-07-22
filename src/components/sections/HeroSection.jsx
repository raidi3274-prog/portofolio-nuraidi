import { useRef } from 'react';

import { siteConfig } from '../../config/siteConfig';
import './HeroSection.css';

const softwareTools = [
  ['AutoCAD', '/images/software/AutoCAD_icon.svg', 0.9],
  ['Autodesk Inventor', '/images/software/inventor-logo.svg', 1],
  ['Arduino', '/images/software/arduino-svgrepo-com.svg', 1],
  ['Microsoft Excel', '/images/software/microsoft-excel.svg', 1.8],
  ['Microsoft Word', '/images/software/microsoft-word.svg', 1.8],
  ['Microsoft PowerPoint', '/images/software/microsoft-powerpoint.svg', 1.8],
  ['Canva', '/images/software/canva.svg', 1],
  ['Google Apps Script', '/images/software/apps-script.svg', 1.8],
  ['HTML5', '/images/software/html-5-svgrepo-com.svg', 1],
  ['JavaScript', '/images/software/javascript-logo.svg', 0.86],
  ['React', '/images/software/react-svgrepo-com.svg', 0.86],
  ['GitHub', '/images/software/github.svg?v=20260722', 0.86],
];

function SoftwareList({ hidden = false }) {
  return (
    <ul className="software-marquee__group" aria-hidden={hidden || undefined}>
      {softwareTools.map(([name, image, scale]) => (
        <li className="software-marquee__item" data-software={name} key={name}>
          <span className="software-marquee__logo" style={{ '--logo-scale': scale }} aria-hidden="true">
            <img src={image} alt="" />
          </span>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroSection() {
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);
  const dragRef = useRef(null);

  function handlePointerDown(event) {
    if (event.button !== 0) return;

    const track = trackRef.current;
    const marquee = marqueeRef.current;
    const transform = new DOMMatrixReadOnly(getComputedStyle(track).transform);

    dragRef.current = { pointerId: event.pointerId, startX: event.clientX, trackX: transform.m41 };
    track.style.animation = 'none';
    track.style.transform = `translateX(${transform.m41}px)`;
    marquee.classList.add('is-dragging');
    marquee.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const track = trackRef.current;
    const groupWidth = track.firstElementChild.offsetWidth;
    let nextX = drag.trackX + event.clientX - drag.startX;

    while (nextX > 0) nextX -= groupWidth;
    while (nextX < -groupWidth) nextX += groupWidth;
    track.style.transform = `translateX(${nextX}px)`;
  }

  function handlePointerUp(event) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const track = trackRef.current;
    const marquee = marqueeRef.current;
    const groupWidth = track.firstElementChild.offsetWidth;
    const trackX = new DOMMatrixReadOnly(getComputedStyle(track).transform).m41;
    const progress = (trackX + groupWidth) / groupWidth;

    track.style.transform = '';
    track.style.animation = '';
    track.style.animationDelay = `${-progress * 34}s`;
    marquee.classList.remove('is-dragging');
    marquee.releasePointerCapture(event.pointerId);
    dragRef.current = null;
  }

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
            <img src="/images/profile/foto-profil.webp" alt="Foto profil Nuraidi" fetchPriority="high" />
          </div>
          <span className="hero__dimension" aria-hidden="true" />
          <span className="hero__crosshair" aria-hidden="true" />
          <p className="hero__side-label">Mechanical Engineering</p>
        </div>
      </div>
      <div
        className="software-marquee"
        aria-label="Perangkat lunak dan teknologi yang dikuasai"
        ref={marqueeRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="software-marquee__track" ref={trackRef}>
          <SoftwareList />
          <SoftwareList hidden />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
