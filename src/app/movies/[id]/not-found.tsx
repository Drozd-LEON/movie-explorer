import Link from "next/link";

export default function MovieNotFound() {
  return (
    <section>
      <h1>Movie not found</h1>

      <p>Sorry, we could not find this movie.</p>

      <Link href="/movies">
        Back to movies
      </Link>
    </section>
  );
}