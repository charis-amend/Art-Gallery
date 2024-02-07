import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
import { useRouter } from "next/router";
// Test for:
// - The art piece image is displayed
// - The art piece artist is displayed

// Example data:
const testPieces = [
  {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: { height: 2432, width: 1920, type: "jpg" },
  },
];

test("renders image and artist for spotlight page", () => {
  render(<Spotlight pieces={testPieces} />);

  const artistElement = screen.getByText("Steve Johnson");
  const imageElement = screen.getByAltText("Orange Red and Green Abstract Painting");
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument()
});