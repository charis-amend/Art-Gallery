import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

// Test for:
// - The art piece image is displayed
// - The art piece artist is displayed

// Example data:
const pieces = [
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
  render(<Spotlight pieces={pieces} />);

  const artistElement = screen.getByText("Steve Johnson");

  expect(artistElement).toBeInTheDocument();

  // STILL NEED TO ADD IMAGE TEST
});
