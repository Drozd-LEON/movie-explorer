import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Explore movies and discover your next favorite film.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <h2>Movie Explorer</h2>

            <div>
              <Link href="/">Home</Link>
              <Link href="/movies">Movies</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2026 Movie Explorer</p>
        </footer>
      </body>
    </html>
  );
}