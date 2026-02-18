import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <h2>Projects</h2>
      <p>I am currently working on two major projects: SecuWear and Cybertrust, and I also lead Nebraska GenCyber outreach.</p>
      <ul>
        <li><Link href="/projects/gencyber">Nebraska GenCyber</Link></li>
        <li><Link href="/projects/secuwear">SecuWear</Link></li>
        <li><Link href="/projects/cybertrust">Cybertrust</Link></li>
      </ul>
    </>
  );
}
