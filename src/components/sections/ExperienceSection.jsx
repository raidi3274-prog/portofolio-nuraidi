import { experiences } from '../../data/experiences';
import SectionHeading from '../common/SectionHeading.jsx';
import './ExperienceSection.css';

function ExperienceSection() {
  return (
    <section className="section experience" id="pengalaman">
      <div className="container">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Pengalaman di lingkungan industri dan instansi pemerintahan."
          lead="Kontribusi pada bidang maintenance, administrasi, dokumentasi, dan pengembangan solusi digital."
        />
        <div className="experience__timeline">
          {experiences.map((experience) => (
            <article className="experience__item" key={experience.company}>
              <p className="experience__company">{experience.company}</p>
              <h3>{experience.role}</h3>
              <p>{experience.description}</p>
              <ul>
                {experience.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
