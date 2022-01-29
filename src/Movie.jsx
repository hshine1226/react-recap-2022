import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

function Movie() {
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
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((genres, index) => (
              <li key={index}>{genres}</li>
            ))}
          </ul>
          <img src={movie.medium_cover_image} alt="movie cover" />
        </div>
      ))}
    </div>
  );
}

export default Movie;
