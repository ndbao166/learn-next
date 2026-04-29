import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ul>
          <li><Link href="/">Home</Link></li>
        <li><Link href="/react">React.js</Link></li>
        <li><Link href="/next">Next.js</Link></li>
        </ul>
        {children}
      </body>
    </html>
  );
}
