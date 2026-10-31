"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className="site-logo">
        🎬 Movie Explorer
      </Link>

      <div className="nav-links">
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        <Link
          href="/movies"
          className={pathname.startsWith("/movies") ? "active" : ""}
        >
          Movies
        </Link>

        <Link
          href="/about"
          className={pathname === "/about" ? "active" : ""}
        >
          About
        </Link>
      </div>
    </nav>
  );
}