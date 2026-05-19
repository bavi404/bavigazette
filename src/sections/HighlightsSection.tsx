import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import TagList from "../components/TagList";
import { highlights, recognition } from "../data/portfolio";

type HighlightCard = {
  title: string;
  date: string;
  description: string;
  tags: string[];
};

function HighlightList({ items }: { items: HighlightCard[] }) {
  return (
    <ul className="stack">
      {items.map((item) => (
        <li key={item.title}>
          <article className="story-card">
            <div className="story-card__top">
              <h3 className="story-card__title story-card__title--sm">{item.title}</h3>
              <time className="story-card__date">{item.date}</time>
            </div>
            <p className="story-card__body story-card__body--mono">{item.description}</p>
            <footer className="story-card__footer">
              <TagList tags={item.tags} />
            </footer>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default function HighlightsSection() {
  return (
    <section id="highlights" className="section">
      <SectionHeader
        title="Highlights & Recognition"
        subtitle="Speaking, programs, awards, and key outcomes"
      />
      <Rule />

      <h3 className="about-chapter__title highlights-subhead">Recognition & Speaking</h3>
      <HighlightList items={recognition} />

      <h3 className="about-chapter__title highlights-subhead">Impact</h3>
      <HighlightList items={highlights} />
    </section>
  );
}
