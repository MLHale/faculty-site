import Link from 'next/link';
import { homeCards } from '@/data/content';

export default function HomePage() {
  return (
    <>
      <h2>Current Work</h2>
      <div className="grid">
        {homeCards.map((item) => {
          const card = (
            <article className="card" key={item.title}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );

          if (item.href) return <Link href={item.href} key={item.title}>{card}</Link>;
          if (item.externalHref) return <a href={item.externalHref} target="_blank" rel="noreferrer" key={item.title}>{card}</a>;
          return card;
        })}
      </div>
    </>
  );
}
