import { withRouter } from "next/router";
import { useRouter } from "next/router";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 500,
        }}
      >
        <MovieDetailRow label="Title" value={Title || "Argo"} />
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

const MovieDetailRow = (props) => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
      }}
    >
      <h3 style={{ color: "white" }}>{props.label} : </h3>
      <h3 style={{ color: "white" }}>{props.value}</h3>
    </span>
  );
};
