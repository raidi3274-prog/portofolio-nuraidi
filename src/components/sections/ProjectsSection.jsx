import { projects } from '../../data/projects';
import ProjectCard from '../common/ProjectCard.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import './ProjectsSection.css';

function ProjectsSection() {
  return (
    <section className="section projects" id="proyek">
      <div className="container">
        <div className="projects__head">
          <SectionHeading
            eyebrow="Proyek"
            title="Penerapan kompetensi teknik dan digital."
            lead="Pilihan proyek yang mencakup otomasi, aplikasi web, administrasi, dan dokumentasi."
          />
          <a href="#proyek" className="projects__all">
            Lihat Semua Proyek
          </a>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
