import { useMemo, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import {
  skillCategories,
  skills,
  type SkillCategory,
} from "../data/portfolio";

export default function SkillsSection() {
  const [active, setActive] = useState<SkillCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return skills;
    return skills.filter((s) => s.category === active);
  }, [active]);

  const activeMeta = skillCategories.find((c) => c.id === active);

  return (
    <section id="skills" className="section">
      <SectionHeader title="Skills" />
      <Rule />
      <div className="filter-bar" role="tablist" aria-label="Skill categories">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            className={`filter-bar__btn ${active === cat.id ? "filter-bar__btn--active" : ""}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>
      <div className="skills-grid">
        {filtered.map((skill) => (
          <span key={skill.name} className="skill-chip">
            {skill.name}
          </span>
        ))}
      </div>
      <p className="skills-footnote">
        Showing {filtered.length}
        {active !== "all" ? ` ${activeMeta?.label ?? ""}` : ""} skills
      </p>
    </section>
  );
}
