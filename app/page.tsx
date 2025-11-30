import Image from 'next/image';
import type { CSSProperties } from 'react';

const treeImage =
  'https://images.unsplash.com/photo-1482034985940-3c9e3982765e?auto=format&fit=crop&w=1600&q=80';

export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <div className="brand">
          <div className="crest">BCT</div>
          <div className="brand-text">
            <span className="eyebrow">Maison de Noël</span>
            <h1>Big Christmas Tree</h1>
            <p>The definitive statement of holiday opulence.</p>
          </div>
        </div>
        <div className="lights" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              className="light"
              key={index}
              style={{ '--twinkle-delay': `${index * 0.22}s` } as CSSProperties}
            />
          ))}
        </div>
      </header>
      <section className="tree-stage">
        <div className="aura" aria-hidden="true" />
        <div className="tree-frame">
          <Image
            src={treeImage}
            alt="A stunning hyper-realistic luxury Christmas tree draped in golden ornaments"
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1280px) 70vw, 960px"
          />
        </div>
        <div className="pedestal">
          <span>Curated for the world’s most distinguished salons</span>
        </div>
      </section>
    </main>
  );
}
