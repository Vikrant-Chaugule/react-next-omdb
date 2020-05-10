export const MovieCard = (props) => {
  const { Title, imdbID, Poster } = props;

  const poster = Poster;

  return (
    <div style={styles.container} onClick={() => props.onClick(imdbID)}>
      <img style={styles.poster} src={poster} />
      <div style={{ alignItems: "flex-end" }}>
        <h4 style={{ color: "white", textAlign: "center" }}>{Title}</h4>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: 300,
    width: 200,
    backgroundColor: "#1d1d1f",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 10,
  },
  poster: {
    width: "100%",
    height: "70%",
  },
};
