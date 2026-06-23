import React, { useState, useEffect } from 'react';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import ContactSection from '../components/portfolio/ContactSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import ProjectsSection from '../components/portfolio/ProjectSection';
import EducationSection from '../components/portfolio/EducationSection';
import VolunteerSection from '../components/portfolio/VolunteerSection';
import Footer from '../components/portfolio/Footer';

const AVATAR_IMG = 'https://media.base44.com/images/public/6a3177e0ce905db866559caf/99773dde7_generated_0d59547c.png';
const ABOUT_BG = 'https://media.base44.com/images/public/6a3177e0ce905db866559caf/27d4edff7_generated_0852d85b.png';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
   <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main>
        <HeroSection avatarImg={AVATAR_IMG} isDark={isDark} />
        <AboutSection aboutBg={ABOUT_BG} />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <VolunteerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}