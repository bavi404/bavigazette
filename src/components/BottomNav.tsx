import { navItems } from "../data/portfolio";

type BottomNavProps = {
  active: string;
  onNavigate: (id: string) => void;
};

const icons: Record<string, string> = {
  home: "⌂",
  about: "§",
  work: "◈",
  projects: "⟨⟩",
  skills: "✦",
  education: "◉",
  menu: "☰",
};

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      <ul className="bottom-nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`bottom-nav__btn ${active === item.id ? "bottom-nav__btn--active" : ""}`}
              onClick={() => onNavigate(item.id)}
              aria-current={active === item.id ? "page" : undefined}
            >
              <span className="bottom-nav__icon" aria-hidden="true">
                {icons[item.id]}
              </span>
              <span className="bottom-nav__label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
