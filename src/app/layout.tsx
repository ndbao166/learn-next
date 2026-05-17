import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-boundary">
          <div className="boundary-label">Root Layout: src/app/layout.tsx</div>
          <header className="site-header">
            <h1>Learn Next.js</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/ssg" prefetch={false}>SSG</Link>
              <Link href="/ssr" prefetch={true}>SSR</Link>
            </nav>
          </header>
          <main className="page-slot">{children}</main>
        </div>
      </body>
    </html>
  );
}
