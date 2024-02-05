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

test("image  button title artist year and genre are displayed", () => {
  //   render(<ArtPieceDetailsPage alt={testObject.name} />);
  render(
    <ArtPieceDetails
      year={testObject.year}
      title={testObject.name}
      artist={testObject.artist}
      genre={testObject.genre}
      alt="Klaus"
    />
  );
  const button = screen.getByRole("button", { name: /back to overview/i });
  const image = screen.getByAltText(/Orange Red and Green Abstract Painting/i);
  const alot = screen.getByText(
    "The artist Steve Johnson created this wonderful piece with the title Orange Red and Green Abstract Painting in the year 2018. We consider the genre to be Abstract Painting."
  );
  expect(alot).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

// test("button is displayed", () => {
//   const data = testObject;
//   render(<ArtPieceDetailsPage />);

//   const button = screen.getByRole("button", { name: /Back to Overview/i });

//   expect(button).toBeInTheDocument();
// });
