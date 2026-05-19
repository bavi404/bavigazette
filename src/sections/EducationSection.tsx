import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import { education } from "../data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <SectionHeader title="Education" />
      <Rule />
      <article className="story-card story-card--edu">
        <div className="story-card__top">
          <div>
            <h3 className="story-card__title">{education.school}</h3>
            <p className="story-card__degree">{education.degree}</p>
          </div>
          <time className="story-card__dates">{education.dates}</time>
        </div>
      </article>
    </section>
  );
}
