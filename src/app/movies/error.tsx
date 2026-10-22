"use client";

type ErrorPageProps = {
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <section>
      <h2>Something went wrong</h2>

      <p>We could not load the movies. Please try again.</p>

      <button onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}