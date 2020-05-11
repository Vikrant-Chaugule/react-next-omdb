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
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={movieName}
        onChange={onChange}
        onKeyPress={onKeyDown}
        style={styles.searchBar}
        placeholder="Search you favorite shows, movies here.."
      />
    </div>
  );
};

const styles = {
  searchContainer: {
    width: "50%",
    height: 75,
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  searchBar: {
    backgroundColor: "#1d1d1f",
    color: "white",
    marginTop: 0,
    marginBottom: 0,
    width: "100%",
    height: 45,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 1,
    outline: "none",
  },
  searchIcon: {
    position: "relative",
    float: "right",
    width: 75,
    height: 45,
    top: -47,
    right: -45,
    backgroundColor: "grey",
    borderColor: "black",
    borderWidth: 2,
  },
};
