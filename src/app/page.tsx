import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Movie Explorer</h1>

      <p>
        Welcome to Movie Explorer!
        Discover movies, explore details, and find your next favorite film.
      </p>

      <Link href="/movies">Explore Movies</Link>
    </section>
  );
}