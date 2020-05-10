import fetch from "isomorphic-unfetch";
import MovieDetailsContainer from "../components/movie-details-container/movie-details-container";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import { BaseURL } from "../constants/constants";
import Link from "next/link";

const MovieDetailsPage = (props) => {
  const [movie, setMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (props.router.asPath) {
      const id = props.router.asPath.match(/id=([^&#]*)/)[1];
      if (id) {
        fetch(`${BaseURL}&i=${id}`)
          .then((res) => res.json())
          .then((response) => {
            if (response.Error) {
              setErrorMessage("Oops, no movie found ):");
              return;
            }
            setMovie(response);
          });
      }
    }
  }, []);

  const renderDetails = () => {
    if (errorMessage !== "") {
      return (
        <div style={styles.errorMessage}>
          <h2>{errorMessage}</h2>
          <Link href="/movies-list">
            <h2 style={styles.homeLink}>Home</h2>
          </Link>
        </div>
      );
    } else {
      return (
        <div style={styles.detailsContainer}>
          <div style={styles.posterContainer}>
            <img style={styles.poster} src={movie.Poster} />
            <MovieDetailsContainer movie={movie} />
          </div>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      <Link href="/movies-list">
        <h2 style={styles.homeLink}>Home</h2>
      </Link>
      {renderDetails()}
    </div>
  );
};

export default withRouter(MovieDetailsPage);

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
  },
  detailsContainer: {
    backgroundColor: "#1d1d1f",
    width: "100%",
    height: 500,
    alignSelf: "center",
  },
  posterContainer: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  poster: {
    width: 450,
    height: "100%",
  },
  homeLink: {
    backgroundColor: "black",
    color: "white",
    textDecoration: "none",
  },
  errorMessage: {
    alignSelf: "center",
    textAlign: "center",
  },
};
