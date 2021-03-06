import { MovieSearch } from "../components/movie-search/movie-search";
import fetch from "isomorphic-unfetch";
import { MovieCard } from "../components/movie-card/movie-card";
import Router from "next/router";
import { useState, useEffect } from "react";
import { BaseURL } from "../constants/constants";

const HomePage = (props) => {
  const [name, setName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const onSearch = (name) => {
    setMovie({});
    setName(name);
  };

  const onClick = async (imdbID) => {
    await Router.push({
      pathname: "/movie-details",
      query: { id: imdbID },
    });
  };

  useEffect(() => {
    if (name.length > 0 && name.length <= 2) {
      fetch(`${BaseURL}&t=${name}`)
        .then((res) => res.json())
        .then((response) => {
          if (response.Error) {
            setErrorMessage(
              "Oops..are you sure anybody produced such movie?  "
            );
            const timeout = setTimeout(() => {
              setErrorMessage("");
              clearTimeout(timeout);
            }, 3000);
            return;
          }

          setMovie(response);
        });
      return;
    }
    if (name.length > 2) {
      fetch(`${BaseURL}&s=${name}`)
        .then((res) => res.json())
        .then((response) => {
          if (response.Error) {
            setErrorMessage(
              "Oops..are you sure anybody produced such movie?  "
            );
            const timeout = setTimeout(() => {
              setErrorMessage("");
              clearTimeout(timeout);
            }, 3000);
            return;
          }

          setMovieList(response.Search);
        });
    }
  }, [name]);

  const renderMovieList = () => {
    if (Object.keys(movie).length != []) {
      return (
        <MovieCard
          key={movie.imdbID}
          Title={movie.Title}
          Year={movie.Year}
          imdbID={movie.imdbID}
          Type="movie"
          Poster={movie.Poster}
          onClick={onClick}
        />
      );
    } else if (movieList.length !== 0) {
      return movieList.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
            Type="movie"
            Poster={movie.Poster}
            onClick={onClick}
          />
        );
      });
    } else {
      return props.movies.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
            Type="movie"
            Poster={movie.Poster}
            onClick={onClick}
          />
        );
      });
    }
  };

  return (
    <div style={styles.container}>
      <MovieSearch setName={onSearch} />
      <p style={styles.errorMessage}>{errorMessage}</p>
      <div style={styles.movieListContainer}>{renderMovieList()}</div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${BaseURL}&s=game of thrones`);
  const movies = await res.json();
  return {
    props: {
      movies: movies.Search,
    },
  };
}

export default HomePage;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  movieListContainer: {
    display: "inline-flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
};
