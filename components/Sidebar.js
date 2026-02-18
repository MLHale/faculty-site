'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/data/content';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <h1><Link href="/">Dr. Matt Hale</Link></h1>
      <img src="/img/profile-photo.jpg" alt="Dr. Matthew Hale" className="profile" />
      <p>Researcher, Web Developer, Board Gamer, Philosopher, Artist, and Assistant Professor of Cybersecurity at UNO.</p>
      <nav>
        <ul>
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link className={active ? 'active' : ''} href={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
