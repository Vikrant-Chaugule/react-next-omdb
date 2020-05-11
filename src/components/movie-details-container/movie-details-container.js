import { withRouter } from "next/router";
import { MovieDetailRow } from "../movie-detail-row/movie-detail-row";

const MovieDetailsContainer = (props) => {
  const {
    Title,
    Year,
    Released,
    Genre,
    Director,
    Actors,
    Type,
    imdbRating,
  } = props.movie;

  return (
    <div style={styles.container}>
      <div style={styles.rowContainer}>
        <MovieDetailRow label="Title" value={Title} />
        <MovieDetailRow label="Year" value={Year} />
        <MovieDetailRow label="Released" value={Released} />
        <MovieDetailRow label="Genre" value={Genre} />
        <MovieDetailRow label="Director" value={Director} />
        <MovieDetailRow label="Actors" value={Actors} />
        <MovieDetailRow label="Type" value={Type} />
        <MovieDetailRow label="imdbRating" value={imdbRating} />
      </div>
    </div>
  );
};

export default withRouter(MovieDetailsContainer);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 100,
  },
  rowContainer: {
    width: "100%",
    height: 500,
  },
};
