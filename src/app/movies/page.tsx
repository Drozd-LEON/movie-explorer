import { getPopularMovies, searchMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard/MovieCard";
import type { Movie } from "@/types/Movie";
import "./movies.css";

type MoviesPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function MoviesPage({
  searchParams,
}: MoviesPageProps) {
  const params = await searchParams;
  const query = params.query?.trim() || "";

  const movies: Movie[] = query
    ? await searchMovies(query)
    : await getPopularMovies();

  return (
    <section>
      <h1>{query ? `Search results for "${query}"` : "Popular Movies"}</h1>

      <p>Explore movies from TMDB.</p>

      <form action="/movies" method="GET" className="search-form">
        <label htmlFor="movie-search">Search movies:</label>

        <div className="search-controls">
          <input
            id="movie-search"
            type="search"
            name="query"
            placeholder="Enter movie title..."
            defaultValue={query}
          />

          <button type="submit">Search</button>
        </div>
      </form>

      {movies.length === 0 ? (
        <p>No movies found. Try another title.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}