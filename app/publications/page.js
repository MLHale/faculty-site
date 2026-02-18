import { publications } from '@/data/content';

export default function PublicationsPage() {
  return (
    <>
      <h2>Publications</h2>
      <ul>
        {publications.map((entry) => (
          <li key={entry}>{entry}</li>
        ))}
      </ul>
    </>
  );
}
