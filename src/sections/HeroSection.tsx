import { useState } from "react";
import ScrambleText from "../components/ScrambleText";
import Rule from "../components/Rule";
import { profile } from "../data/portfolio";

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "/icons/gmail.png" },
  { label: "GitHub", href: profile.github, icon: "/icons/github.png" },
  { label: "LinkedIn", href: profile.linkedin, icon: "/icons/linkedin.png" },
];

export default function HeroSection() {
  const [showTagline, setShowTagline] = useState(false);

  return (
    <section id="home" className="hero section">
      <header className="hero__masthead">
        <Rule />
        <p className="hero__edition">
          <span>Vol. I</span>
          <span className="hero__dot" aria-hidden="true">
            ◆
          </span>
          <span>{today}</span>
          <span className="hero__dot" aria-hidden="true">
            ◆
          </span>
          <span>{profile.fullName}</span>
        </p>
        <Rule thick />
      </header>

      <div className="hero__body">
        <div className="hero__copy">
          <ScrambleText
            id="masthead-name"
            text={profile.name}
            className="hero__name"
            duration={1600}
            onComplete={() => setShowTagline(true)}
          />
          <p className={`hero__role ${showTagline ? "hero__role--visible" : ""}`}>
            {profile.role}
          </p>
          <p className={`hero__deck ${showTagline ? "hero__deck--visible" : ""}`}>
            <span className="hero__deck-label">Exclusive</span>
            {profile.tagline}
          </p>

          <ul className={`hero__socials ${showTagline ? "hero__socials--visible" : ""}`}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="hero__social-link"
                  {...(s.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noreferrer" })}
                >
                  <img src={s.icon} alt="" className="hero__social-icon" width={22} height={22} />
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <figure className={`hero__portrait ${showTagline ? "hero__portrait--visible" : ""}`}>
          <div className="hero__portrait-frame">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.fullName}`}
              className="hero__portrait-img"
              width={320}
              height={400}
            />
          </div>
          <figcaption className="hero__portrait-caption">IIIT Kottayam · Apr 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}
