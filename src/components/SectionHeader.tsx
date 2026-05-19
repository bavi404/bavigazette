import type { ReactNode } from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  aside?: ReactNode;
};

export default function SectionHeader({ title, subtitle, aside }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-header__main">
        <h2 className="section-header__title">{title}</h2>
        {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      </div>
      {aside && <div className="section-header__aside">{aside}</div>}
    </header>
  );
}
