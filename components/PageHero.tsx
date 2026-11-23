export default function PageHero({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
