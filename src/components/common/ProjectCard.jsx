import { Link } from 'react-router-dom';

import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={project.image} alt={project.alt} loading="lazy" />
      <div className="project-card__body">
        <p className="project-card__category">{project.category}</p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-card__tools" aria-label="Teknologi atau alat">
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <Link className="button button--ghost" to={`/proyek/${project.slug}`}>
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
