import ArtPieceDetails from "./ArtPieceDetails";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      slug: "orange-red-and-green",
    },
  }),
}));

const testObject = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: { height: 2432, width: 1920, type: "jpg" },
};



test("image  button title artist year and genre are displayed in artpiecedetails page", () => {
  render(
    <ArtPieceDetails
      year={testObject.year}
      title={testObject.name}
      artist={testObject.artist}
      genre={testObject.genre}
      colors={testObject.colors}
    />
  );
  const button = screen.getByRole("button", { name: "Back to Overview" });
  const image = screen.getByAltText(/Orange Red and Green Abstract Painting/i);

  expect(screen.getByText(/2018/g)).toBeInTheDocument();
  expect(screen.getByText(/Steve Johnson/g)).toBeInTheDocument();
  expect(
    screen.getByText(/Orange Red and Green Abstract Painting/g)
  ).toBeInTheDocument();
  expect(screen.getByText(/Abstract Painting/g)).toBeInTheDocument();

  expect(image).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

