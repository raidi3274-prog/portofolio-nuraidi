import AboutSection from '../components/sections/AboutSection.jsx';
import CertificatesSection from '../components/sections/CertificatesSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import ExperienceSection from '../components/sections/ExperienceSection.jsx';
import HeroSection from '../components/sections/HeroSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
