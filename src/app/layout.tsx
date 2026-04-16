export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Blog học next và react</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
