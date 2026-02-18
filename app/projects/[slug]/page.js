import { notFound } from 'next/navigation';
import { projectBlurbs } from '@/data/content';

export function generateStaticParams() {
  return Object.keys(projectBlurbs).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({ params }) {
  const project = projectBlurbs[params.slug];
  if (!project) return notFound();

  return (
    <>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-image" />
      {project.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  );
}
