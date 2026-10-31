import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
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
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2026 Movie Explorer</p>

          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tmdb-logo.svg"
              alt="TMDB logo"
              width={160}
              height={80}
              style={{ width: "160px", height: "auto" }}
            />
          </a>

          <p>
            This product uses the TMDB API but is not endorsed or
            certified by TMDB.
          </p>

          <p>
            Movie data provided by{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Movie Database (TMDB)
            </a>.
          </p>
        </footer>
      </body>
    </html>
  );
}