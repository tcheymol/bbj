import React from "react";
import Square from "./Square";

export default function ({ width, y }: { y: number; width: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[...Array(width)].map((_, i) => (
        <Square key={i} y={y} x={i} />
      ))}
    </div>
  );
}
