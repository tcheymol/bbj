import React from "react";
import Row from "./Row";

export default function ({ height, width }: { height: number; width: number }) {
  const maxHeight = height;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {[...Array(height)].map((_, i) => (
        <Row width={width} key={i} y={maxHeight - i - 1} />
      ))}
    </div>
  );
}
