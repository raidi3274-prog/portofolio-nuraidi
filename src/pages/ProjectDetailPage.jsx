import { Link, useParams } from 'react-router-dom';

import { projects } from '../data/projects';
import './ProjectDetailPage.css';

function ProjectDetailPage() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <h1>Proyek tidak ditemukan</h1>
          <Link className="button" to="/#proyek">
            Kembali ke Proyek
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail">
      <div className="container project-detail__inner">
        <Link className="button button--ghost" to="/#proyek">
          Kembali ke Proyek
        </Link>
        <header>
          <p className="section__eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </header>
        <img className="project-detail__image" src={project.image} alt={project.alt} />
        {project.images?.length ? (
          <section className="project-detail__gallery" aria-labelledby="project-gallery-title">
            <h2 id="project-gallery-title">Galeri Proyek</h2>
            <div className="project-detail__gallery-grid">
              {project.images.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
              ))}
            </div>
          </section>
        ) : null}
        <div className="project-detail__grid">
          {project.detailDescription ? (
            <article className="project-detail__summary">
              <h2>Deskripsi Proyek</h2>
              <p>{project.detailDescription}</p>
            </article>
          ) : null}
          {project.modules ? (
            <article>
              <h2>Modul Sistem</h2>
              <ul>
                {project.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </article>
          ) : null}
          <article>
            <h2>Teknologi dan Peralatan</h2>
            <ul>
              {(project.detailTools ?? project.tools).map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Hasil Proyek</h2>
            <ul>
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
