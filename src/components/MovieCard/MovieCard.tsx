import Image from "next/image";
import Link from "next/link";
import type { Movie } from "@/types/Movie";
import "./MovieCard.css";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  const year = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "Unknown";

  return (
    <Link href={`/movies/${movie.id}`} className="movie-card">
      {posterUrl ? (
        <Image
          src={posterUrl}
          alt={`Poster for ${movie.title}`}
          width={500}
          height={750}
          unoptimized
        />

      ) : (
        <div className="no-poster">No poster available</div>
      )}

      <div className="movie-card-info">
        <h2>{movie.title}</h2>
        <p>Year: {year}</p>
        <p>Rating: {movie.vote_average.toFixed(1)} / 10</p>
      </div>
    </Link>
  );
}