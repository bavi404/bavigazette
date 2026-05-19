import { useCallback, useEffect, useState } from "react";
import BottomNav from "./components/BottomNav";
import Rule from "./components/Rule";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/HeroSection";
import HighlightsSection from "./sections/HighlightsSection";
import PublicationsSection from "./sections/PublicationsSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import WorkSection from "./sections/WorkSection";

const sectionMap: Record<string, string> = {
  home: "home",
  about: "about",
  work: "work",
  projects: "projects",
  skills: "skills",
  education: "education",
  menu: "home",
};

export default function App() {
  const [activeNav, setActiveNav] = useState("home");

  const scrollTo = useCallback((id: string) => {
    const target = document.getElementById(sectionMap[id] ?? id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveNav(id);
  }, []);

  useEffect(() => {
    const ids = Object.values(sectionMap).filter((v, i, a) => a.indexOf(v) === i);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const navId =
            Object.entries(sectionMap).find(([, sid]) => sid === visible.target.id)?.[0] ??
            visible.target.id;
          setActiveNav(navId);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gazette">
      <div className="gazette__paper gazette__paper--sheet">
        <HeroSection />
        <Rule thick />
        <AboutSection />
        <WorkSection />
        <HighlightsSection />
        <PublicationsSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <footer className="sheet-footer">
          <Rule />
          <p className="sheet-footer__text">
            The Bavishya Gazette — research, systems, and software for better.
          </p>
        </footer>
      </div>
      <BottomNav active={activeNav} onNavigate={scrollTo} />
    </div>
  );
}
