import Link from "next/link";
import "./home.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Discover Your Next Favorite Movie</h1>

        <p>
          Welcome to Movie Explorer! Discover popular movies,
          search for your favorites, and explore detailed
          information about each film.
        </p>

        <Link href="/movies" className="hero-button">
          Explore Movies
        </Link>
      </section>

      <section className="features">
        <h2>What Can You Do?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🎬 Discover Movies</h3>
            <p>
              Browse popular movies and discover something
              new to watch.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔎 Search Movies</h3>
            <p>
              Search for movies by title and quickly find
              what you are looking for.
            </p>
          </div>

          <div className="feature-card">
            <h3>⭐ Movie Details</h3>
            <p>
              Explore movie descriptions, ratings,
              release dates, and genres.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}