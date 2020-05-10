export const MovieDetailRow = (props) => {
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
