import { useEffect, useRef, useState } from 'react';

import SectionHeading from '../common/SectionHeading.jsx';
import './AboutSection.css';

const aboutParagraphs = [
  'Lulusan D4 Teknik Mesin Pertanian dari Politeknik Negeri Sambas dengan pengalaman pada pemeliharaan mesin industri, inspeksi komponen mekanik, kelistrikan dasar, administrasi teknis, serta dokumentasi operasional. Memiliki kemampuan analitis, mampu bekerja secara sistematis, dan cepat beradaptasi dengan lingkungan kerja.',
  'Selain kompetensi di bidang teknik, saya juga memiliki kemampuan dalam pengembangan aplikasi berbasis web sebagai kompetensi pendukung untuk mendukung digitalisasi proses kerja dan meningkatkan efisiensi pengelolaan data serta administrasi.',
];

const profileFacts = [
  ['Pendidikan', 'D4 Teknik Mesin Pertanian'],
  ['Institusi', 'Politeknik Negeri Sambas'],
  ['IPK', '3,62'],
  ['Domisili', 'Sambas, Kalimantan Barat'],
  ['Fokus', ['Maintenance', 'Operasional Mesin', 'Administrasi Teknis']],
  ['Status', 'Terbuka untuk peluang kerja'],
];

function AboutSection() {
  const copyRef = useRef(null);
  const [typedLength, setTypedLength] = useState(0);
  const totalLength = aboutParagraphs.reduce((total, paragraph) => total + paragraph.length, 0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedLength(totalLength);
      return undefined;
    }

    let typingTimer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        typingTimer = window.setInterval(() => {
          setTypedLength((length) => {
            if (length >= totalLength) {
              window.clearInterval(typingTimer);
              return totalLength;
            }
            return length + 1;
          });
        }, 8);
      },
      { threshold: 0.2 },
    );

    observer.observe(copyRef.current);
    return () => {
      observer.disconnect();
      window.clearInterval(typingTimer);
    };
  }, [totalLength]);

  const firstParagraphLength = aboutParagraphs[0].length;
  const typedParagraphs = [
    aboutParagraphs[0].slice(0, typedLength),
    aboutParagraphs[1].slice(0, Math.max(0, typedLength - firstParagraphLength)),
  ];

  return (
    <section className="section about" id="tentang">
      <div className="container">
        <SectionHeading eyebrow="Profil" title="Latar belakang teknik dengan kemampuan lintas bidang." />
        <div className="about__grid">
          <div className="about__copy" ref={copyRef}>
            <span className="about__copy-accessible">{aboutParagraphs.join(' ')}</span>
            {aboutParagraphs.map((paragraph, index) => (
              <div className="about__typewriter" key={paragraph}>
                <p className="about__typewriter-space" aria-hidden="true">
                  {paragraph}
                </p>
                <p
                  className={`about__typewriter-text ${
                    typedLength < totalLength &&
                    ((index === 0 && typedLength <= firstParagraphLength) ||
                      (index === 1 && typedLength > firstParagraphLength))
                      ? 'is-typing'
                      : ''
                  }`}
                  aria-hidden="true"
                >
                  {typedParagraphs[index]}
                </p>
              </div>
            ))}
          </div>
          <dl className="about__facts">
            {profileFacts.map(([term, detail], index) => (
              <div key={term}>
                <span className="about__icon" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <dt>{term}</dt>
                <dd>
                  {Array.isArray(detail) ? (
                    <ul className="about__focus-list">
                      {detail.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    detail
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
