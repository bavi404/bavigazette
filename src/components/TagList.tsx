export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag} className="tags__item">
          {tag}
        </li>
      ))}
    </ul>
  );
}
