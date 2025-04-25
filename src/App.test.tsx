import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { fireEvent, waitFor } from "@testing-library/react";

test("Working example with file upload", async () => {
  render(<App />);

  const titleElement = screen.getByText(
    /Upload your own file here to mow like a boss/i,
  );
  expect(titleElement).toBeInTheDocument();

  const textData = `55
44 S
LFRRFFLFRFF
22 N
FFRLLRFRLF
`;

  const file = new File([textData], "data.txt", { type: "text/plain" });
  const input = screen.getByTestId("upload-land");

  fireEvent.change(input, { target: { files: [file] } });

  await waitFor(() => expect(screen.getByTestId("mower-info")).toHaveTextContent("44 S"));
  expect(screen.getByTestId("mower-info")).toHaveTextContent("22 N");
  expect(screen.getByTestId("mower-info")).toHaveTextContent("LFRRFFLFRFF");
  expect(screen.getByTestId("mower-info")).toHaveTextContent("FFRLLRFRLF");

  const button = screen.getByTestId("trigger-mowing");
  fireEvent.click(button);

  expect(screen.getByTestId("mower-info")).not.toHaveTextContent("44 S");
  expect(screen.getByTestId("mower-info")).not.toHaveTextContent("22 N");
  expect(screen.getByTestId("mower-info")).not.toHaveTextContent(
    "LFRRFFLFRFF",
  );
  expect(screen.getByTestId("mower-info")).not.toHaveTextContent(
    "FFRLLRFRLF",
  );
  expect(screen.getByTestId("mower-info")).toHaveTextContent("13 W");
  expect(screen.getByTestId("mower-info")).toHaveTextContent("25 N");
});
