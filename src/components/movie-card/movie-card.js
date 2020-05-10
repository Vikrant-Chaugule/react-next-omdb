import { useState } from "react";
import styles from "./movie-card.module.css";

export const MovieCard = (props) => {
  const { Title, imdbID, Poster } = props;

  const poster = Poster;

  return (
    <div
      style={{
        height: 300,
        width: 200,
        backgroundColor: "#1d1d1f",
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 10,
      }}
      onClick={() => props.onClick(imdbID)}
    >
      <img
        style={{
          width: "100%",
          height: "70%",
        }}
        src={poster}
      />
      <div style={{ alignItems: "flex-end" }}>
        <h4 style={{ color: "white", textAlign: "center" }}>{Title}</h4>
      </div>
    </div>
  );
};
