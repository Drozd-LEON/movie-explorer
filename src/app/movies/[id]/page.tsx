import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMovieById } from "@/lib/tmdb";
import type { Movie } from "@/types/Movie";
import "./movie-details.css";

type MovieDetails = Movie & {
  runtime: number | null;
  genres: {
    id: number;
    name: string;
  }[];
};

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MovieDetailsPage({
  params,
}: MovieDetailsPageProps) {
  const { id } = await params;

  const movie: MovieDetails | null = await getMovieById(id);

  if (!movie) {
    notFound();
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <section className="movie-details">
      <Link href="/movies" className="back-link">
        ← Back to movies
      </Link>

      <h1>{movie.title}</h1>

      <div className="movie-details-content">
        {posterUrl && (
          <Image
            className="movie-details-poster"
            src={posterUrl}
            alt={`Poster for ${movie.title}`}
            width={300}
            height={450}
            unoptimized
          />
        )}

        <div className="movie-details-info">
          <h2>Overview</h2>

          <p>{movie.overview || "No description available."}</p>

          <p>
            <strong>Release date:</strong>{" "}
            {movie.release_date || "Unknown"}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {movie.vote_average.toFixed(1)} / 10
          </p>

          <p>
            <strong>Runtime:</strong>{" "}
            {movie.runtime ? `${movie.runtime} minutes` : "Unknown"}
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ") || "Unknown"}
          </p>
        </div>
      </div>
    </section>
  );
}