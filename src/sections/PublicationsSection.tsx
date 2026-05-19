import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import TagList from "../components/TagList";
import { publications } from "../data/portfolio";

export default function PublicationsSection() {
  return (
    <section id="publications" className="section">
      <SectionHeader
        title="Publications"
        subtitle="Peer-reviewed conference papers"
      />
      <Rule />
      <ul className="stack">
        {publications.map((pub) => (
          <li key={pub.title}>
            <article className="story-card story-card--pub">
              <div className="story-card__top">
                <h3 className="story-card__title story-card__title--sm">{pub.title}</h3>
                <span className="stamp stamp--published">{pub.status}</span>
              </div>
              <p className="story-card__workshop">{pub.authors}</p>
              <p className="story-card__meta-line">
                {pub.venue} · {pub.year}
              </p>
              <p className="story-card__body story-card__body--mono">{pub.description}</p>
              <footer className="story-card__footer">
                <TagList tags={pub.tags} />
                <a
                  href={pub.href}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  IEEE Xplore ↗
                </a>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
