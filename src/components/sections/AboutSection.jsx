import SectionHeading from '../common/SectionHeading.jsx';
import './AboutSection.css';

const profileFacts = [
  ['Pendidikan', 'D4 Teknik Mesin Pertanian'],
  ['Institusi', 'Politeknik Negeri Sambas'],
  ['IPK', '3,62'],
  ['Domisili', 'Sambas, Kalimantan Barat'],
  ['Fokus', 'Maintenance  Operasional Mesin  Administrasi Teknis'],
  ['Status', 'Terbuka untuk peluang kerja'],
];

function AboutSection() {
  return (
    <section className="section about" id="tentang">
      <div className="container">
        <SectionHeading eyebrow="Profil" title="Latar belakang teknik dengan kemampuan lintas bidang." />
        <div className="about__grid">
          <div className="about__copy">
            <p>
              Lulusan D4 Teknik Mesin Pertanian dari Politeknik Negeri Sambas dengan pengalaman
              pada pemeliharaan mesin industri, inspeksi komponen mekanik, kelistrikan dasar,
              administrasi teknis, serta dokumentasi operasional. Memiliki kemampuan analitis,
              mampu bekerja secara sistematis, dan cepat beradaptasi dengan lingkungan kerja.
            </p>
            <p>
              Selain kompetensi di bidang teknik, saya juga memiliki kemampuan dalam pengembangan
              aplikasi berbasis web sebagai kompetensi pendukung untuk mendukung digitalisasi
              proses kerja dan meningkatkan efisiensi pengelolaan data serta administrasi.
            </p>
          </div>
          <dl className="about__facts">
            {profileFacts.map(([term, detail], index) => (
              <div key={term}>
                <span className="about__icon" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
