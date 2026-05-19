import { useId, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Rule from "../components/Rule";
import { aboutIntro, aboutSections, type AboutBlock } from "../data/about";

function AboutBlockView({ block }: { block: AboutBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="copy copy--compact">{block.text}</p>;
    case "list":
      return (
        <ul className="about-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "principles":
      return (
        <ul className="about-principles">
          {block.items.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong> — {item.text}
            </li>
          ))}
        </ul>
      );
    case "tags":
      return (
        <ul className="tags about-tags">
          {block.items.map((tag) => (
            <li key={tag} className="tags__item">
              {tag}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <section id="about" className="section">
      <SectionHeader title="About" />
      <Rule />
      <div className="about-intro">
        {aboutIntro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="copy">
            {paragraph}
          </p>
        ))}
      </div>

      <button
        type="button"
        className="about-toggle"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="about-toggle__icon" aria-hidden="true">
          {expanded ? "▴" : "▾"}
        </span>
        {expanded ? "Show Less" : "More About Me"}
      </button>

      <div
        id={panelId}
        className="about-expanded"
        hidden={!expanded}
      >
        {aboutSections.map((section) => (
          <article key={section.title} className="about-chapter">
            <h3 className="about-chapter__title">{section.title}</h3>
            {section.blocks.map((block, i) => (
              <AboutBlockView key={`${section.title}-${i}`} block={block} />
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
