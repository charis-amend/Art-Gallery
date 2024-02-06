import Favorites from ".";
import { screen, render } from "@testing-library/react";
import Navigation from "@/components/Navigation/Navigation";
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
  {
    slug: "blue-and-red",
    artist: "Jung-Hua Lui",
    name: "Blue and Red",
    imageSource: "https://example-apis.vercel.app/assets/art/blue-and-red.jpg",
    year: "2019",
    genre: "Abstract Painting",
    colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
    dimensions: { height: 2560, width: 1920, type: "jpg" },
  },
];

test("image title artist each-active", () => {
  render(<Favorites pieces={pieces} />);

  const artist = screen.getByText(/Steve Johnson/g);

  const title = screen.getByText(/Orange Red and Green Abstract Painting/g);
  const image = screen.getByAltText(/Orange Red and Green Abstract Painting/g);
  const list = screen.getAllByRole("listitem");

  expect(artist).toBeInTheDocument();

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  //depends on what the mock says in index.js
  expect(list).toHaveLength(1);
});

test("nav link", () => {
  render(<Navigation />);

  const link = screen.getByText(/Favorites/i);

  expect(link).toBeInTheDocument();
});

/*
 A navigation link labeled "Favorites" is displayed 🖼️
 Each art piece's is displayed with active favorite-button 🖼️

*/
