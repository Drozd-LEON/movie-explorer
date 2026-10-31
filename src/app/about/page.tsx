import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Movie Explorer</h1>

        <p>
          Learn more about the project, its purpose,
          and the technologies used to build it.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>🎬 What is Movie Explorer?</h2>

          <p>
            Movie Explorer is a website where users can discover
            popular movies, search for movies by title, and
            explore detailed information about each film.
          </p>
        </div>

        <div className="about-card">
          <h2>👥 Who is it for?</h2>

          <p>
            This website is designed for movie lovers who want
            an easy way to find interesting films and learn
            more about them.
          </p>
        </div>

        <div className="about-card">
          <h2>💻 Technologies Used</h2>

          <p>
            Movie Explorer was built using Next.js, React,
            TypeScript, and CSS.
          </p>

          <p>
            Movie information is provided by The Movie Database
            (TMDB) API.
          </p>
        </div>

        <div className="about-card">
          <h2>👨‍💻 About the Developer</h2>

          <p>
            This project was created by Ivan Drozd as part
            of a Frontend Development course at Gokstad Akademiet.
          </p>
        </div>
      </section>

      <div className="about-bottom">
        <h2>Ready to Explore?</h2>

        <p>Find your next favorite movie today!</p>

        <Link href="/movies" className="about-button">
          Explore Movies
        </Link>
      </div>
    </div>
  );
}