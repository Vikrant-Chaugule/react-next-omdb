import styles from "./movie-search.module.css";
import { useState } from "react";

export const MovieSearch = (props) => {
  const [movieName, setMovieName] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setMovieName(value);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      props.setName(movieName);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={movieName}
        onChange={onChange}
        onKeyPress={onKeyDown}
        className={styles.searchBar}
        placeholder="Search you favorite shows here.."
      />
      <img
        className={styles.searchIcon}
        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
      />
    </div>
  );
};

// const styles = {
//   searchContainer: {
//     width: 490,
// height: 75,
// display: 'block',
// margin: 0 auto,
//     /* background-color: aqua, */
// }
// }
