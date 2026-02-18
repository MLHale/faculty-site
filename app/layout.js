import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Dr. Matt Hale',
  description: 'Faculty profile site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Sidebar />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
