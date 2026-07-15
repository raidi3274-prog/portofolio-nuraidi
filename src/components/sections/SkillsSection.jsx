import { skillGroups } from '../../data/skills';
import SectionHeading from '../common/SectionHeading.jsx';
import './SkillsSection.css';

function SkillsSection() {
  return (
    <section className="section skills" id="keahlian">
      <div className="container">
        <SectionHeading
          eyebrow="Keahlian"
          title="Kompetensi teknik dan perangkat pendukung."
        />
        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skills__card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
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

export default SkillsSection;
