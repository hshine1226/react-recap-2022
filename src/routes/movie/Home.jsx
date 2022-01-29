import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";
import MovieCard from "../../components/movie/MovieCard";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8.5&sort_by=rating"
    );

    const movies = response.data.data.movies;
    setMovies(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div>
      <h1>This is Movie List</h1>
      {loading ? <h1>Loading...</h1> : null}
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
          coverImage={movie.medium_cover_image}
        />
      ))}
    </div>
  );
}

export default Home;
