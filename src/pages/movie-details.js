import { MovieSearch } from "../components/movie-search/movie-search";
import fetch from "isomorphic-unfetch";
import MovieDetailsContainer from "../components/movie-details-container/movie-details-container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MovieDetailsPage = (props) => {
  const router = useRouter();
  const slug = router.query;

  const m = props.movie;

  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   console.log("MovieDetailsPage did mount", router);
  //   fetch("http://www.omdbapi.com/?t=inception&apikey=a36c37c6")
  //     .then((res) => res.json())
  //     .then((response) => setMovie(response));
  //   setMovie(movie);
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "#1d1d1f",
          width: "100%",
          height: 500,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <img style={{ width: 450, height: "100%" }} src={m.Poster} />
          <MovieDetailsContainer movie={m} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch("http://localhost:3000/movie-details");
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   console.log(paths);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

export async function getStaticProps({ query, params }) {
  const res = await fetch(
    "http://www.omdbapi.com/?t=inception&apikey=a36c37c6"
  );
  const movie = await res.json();
  await console.log("query", query, params);

  return {
    props: {
      movie,
    },
  };
}
