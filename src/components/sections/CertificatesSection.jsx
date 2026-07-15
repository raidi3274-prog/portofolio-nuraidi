import { certificates } from '../../data/certificates';
import SectionHeading from '../common/SectionHeading.jsx';
import './CertificatesSection.css';

function CertificatesSection() {
  return (
    <section className="section certificates" id="sertifikat">
      <div className="container">
        <SectionHeading
          eyebrow="Sertifikat"
          title="Sertifikasi dan penghargaan."
          lead="Dokumentasi pencapaian serta pengembangan kompetensi profesional."
        />
        <div className="certificates__grid">
          {certificates.map((certificate) => (
            <article className="certificates__card" key={certificate.name}>
              <a
                className="certificates__media-link"
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
              >
                <img className="certificates__image" src={certificate.image} alt={certificate.alt} loading="lazy" />
              </a>
              <h3>{certificate.name}</h3>
              <dl className="certificates__details">
                <div>
                  <dt>Penerbit</dt>
                  <dd>{certificate.issuer}</dd>
                </div>
                <div>
                  <dt>Program</dt>
                  <dd>{certificate.program}</dd>
                </div>
                <div>
                  <dt>Periode</dt>
                  <dd>{certificate.period}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{certificate.status}</dd>
                </div>
              </dl>
              <a className="button button--ghost" href={certificate.image} target="_blank" rel="noreferrer">
                Lihat Sertifikat
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
