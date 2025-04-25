import React from "react";
import Row from "./Row";
import { LandContext } from "../App";

export default function Grid() {
  const { land } = React.useContext(LandContext);
  if (land === null) return null;
  const { xSize, ySize } = land;
  const maxHeight = ySize;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {[...Array(ySize)].map((_, i) => (
        <Row width={xSize} key={i} y={maxHeight - i - 1} />
      ))}
    </div>
  );
}
