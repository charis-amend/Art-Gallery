import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
// Test for:
// - The art piece image is displayed
// - The art piece artist is displayed

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { myProp: "myValue" },
  }),
}));

// Example data:

const artPiecesInfo = [
  { comment: "awdqwe", date: "7 Feb 2024", time: "15:25:21" },
  { comment: "awdqwe", date: "7 Feb 2024", time: "15:25:21" },
];
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
    comment: [{ comment: "tjagdfcw", date: "", time: "" }],
  },
];

test("renders image and artist for spotlight page", () => {
  render(<Spotlight artpiecesInfo={artPiecesInfo} pieces={testPieces} />);

  const artistElement = screen.getByText("Steve Johnson");
  const imageElement = screen.getByAltText(
    "Orange Red and Green Abstract Painting"
  );
  expect(artistElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
