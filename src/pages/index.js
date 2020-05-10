import MoviesListPage from "./movies-list";
import MovieDetailsPage from "./movie-details";

function HomePage(props) {
  //   console.log(props.movies.Search);

  return (
    <div>
      {/* <MoviesListPage movies={props.movies.Search} /> */}
      <MovieDetailsPage movie={props} />
    </div>
  );
}

export default HomePage;

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   const res = await fetch("http://www.omdbapi.com/?apikey=a36c37c6&s=game");
//   const movies = await res.json();

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       movies,
//     },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(
    "http://www.omdbapi.com/?t=inception&apikey=a36c37c6"
  );
  const movie = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      movie,
    },
  };
}
