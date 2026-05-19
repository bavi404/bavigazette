import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import TagList from "../components/TagList";
import { projectGroups, type Project } from "../data/portfolio";

function statusLabel(status: Project["status"]) {
  if (status === "forthcoming") return "To be published";
  if (status === "published") return "Published";
  return null;
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid grid--3">
      {items.map((project) => {
        const label = statusLabel(project.status);
        return (
          <article key={project.title} className="story-card story-card--compact">
            <div className="story-card__headline">
              <h3 className="story-card__title story-card__title--sm">{project.title}</h3>
              {label && (
                <span
                  className={`stamp ${project.status === "published" ? "stamp--published" : "stamp--forthcoming"}`}
                >
                  {label}
                </span>
              )}
            </div>
            {project.highlight && (
              <p className="story-card__highlight">{project.highlight}</p>
            )}
            <p className="story-card__body story-card__body--mono">{project.description}</p>
            <TagList tags={project.tags} />
            {project.href && (
              <a href={project.href} className="text-link story-card__inline-link">
                Read paper ↗
              </a>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section section--wide">
      {projectGroups.map((group, i) => (
        <div key={group.id} className={i > 0 ? "project-group" : undefined}>
          {i > 0 && <div className="section-spacer" />}
          <SectionHeader title={group.title} subtitle={group.subtitle} />
          <Rule />
          <ProjectGrid items={group.projects} />
        </div>
      ))}
    </section>
  );
}
