export default function Rule({ thick = false }: { thick?: boolean }) {
  return <hr className={`rule ${thick ? "rule--thick" : "rule--thin"}`} />;
}
