import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovieDetail = async () => {
    const result = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    const movie = result.data.data.movie;
    setMovie(movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div>
      {loading ? <strong>Loading...</strong> : null}
      <div>
        <h1>{movie.title}</h1>
        <img src={movie.medium_cover_image} alt="cover" />
        <p>{movie.description_full}</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
