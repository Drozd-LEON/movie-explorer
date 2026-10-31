# Movie Explorer

Movie Explorer is a website where users can discover popular movies, search for movies by title, and view detailed information about each movie.

This project was created as a school assignment using Next.js and TypeScript.

## Target Audience

The website is designed for people who enjoy watching movies and want an easy way to discover new films.

## Features

- Browse popular movies.
- Search for movies by title.
- View movie posters, release dates, and ratings.
- Open individual movie pages with descriptions, genres, and runtime.
- Responsive design for desktop and mobile devices.
- Error handling for failed API requests and movies that cannot be found.

## Technologies

- Next.js (App Router)
- React
- TypeScript
- CSS
- TMDB API
- Git and GitHub

## How to Run the Project

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Create a `.env.local` file in the root folder and add:

   `TMDB_ACCESS_TOKEN=your_tmdb_read_access_token`

5. Start the development server:

   `npm run dev`

6. Open http://localhost:3000 in your browser.

A free TMDB account and API Read Access Token are required.

## API

Movie Explorer uses The Movie Database (TMDB) API to retrieve popular movies, search results, and individual movie details.

This product uses the TMDB API but is not endorsed or certified by TMDB.

Website: https://www.themoviedb.org/

## Limitations

- The website requires an internet connection.
- Movie information depends on the TMDB API.
- Search results are limited to the first page returned by TMDB.
- Users cannot create accounts or save favorite movies.
- The website is intended for educational purposes.

## Author

Ivan Drozd

Frontend Development Student — Gokstad Akademiet
