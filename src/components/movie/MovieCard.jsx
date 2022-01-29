import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ id, title, summary, genres, coverImage }) {
  return (
    <div key={id}>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((genres, index) => (
          <li key={index}>{genres}</li>
        ))}
      </ul>
      <img src={coverImage} alt="movie cover" />
    </div>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImage: PropTypes.string.isRequired,
};

export default MovieCard;
