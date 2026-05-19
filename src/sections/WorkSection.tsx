import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import TagList from "../components/TagList";
import { work } from "../data/portfolio";

export default function WorkSection() {
  return (
    <section id="work" className="section">
      <SectionHeader title="Work Experience" />
      <Rule />
      <ol className="timeline">
        {work.map((job, i) => (
          <li key={job.id} className="timeline__item">
            <div className="timeline__rail" aria-hidden="true">
              <span
                className={`timeline__logo timeline__logo--${job.logoVariant}`}
              >
                <img
                  src={job.logo}
                  alt={job.logoAlt}
                  className="timeline__logo-img"
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              {i < work.length - 1 && <span className="timeline__line" />}
            </div>
            <article className="story-card">
              <div className="story-card__top">
                <div>
                  <h3 className="story-card__title">{job.role}</h3>
                  <p className="story-card__meta">
                    <span className="story-card__company">{job.company}</span>
                  </p>
                </div>
                <div className="story-card__dates">
                  <time>{job.dates}</time>
                  <span className="story-card__loc">{job.location}</span>
                </div>
              </div>
              <p className="story-card__body">{job.description}</p>
              <TagList tags={job.tags} />
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
