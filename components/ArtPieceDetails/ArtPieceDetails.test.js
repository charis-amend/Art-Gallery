
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArtPieceDetails from './ArtPieceDetails';

describe('ArtPieceDetails', () => {
  const mockArtPiece = {
    colors: ['#ffffff', '#000000'],
    slug: 'art-piece-slug',
    image: 'art-piece-image-url.jpg',
    title: 'Art Piece Title',
    artist: 'Artist Name',
    year: '2023',
    genre: 'Abstract',
    width: 800,
    height: 600,
    onToggleFavorite: jest.fn(),
    artPiecesInfo: [],
    onSubmitComment: jest.fn(),
  };

  it('renders art piece details correctly', () => {
    render(<ArtPieceDetails {...mockArtPiece} />);

    expect(screen.getByText('Art Piece Title')).toBeInTheDocument();
    expect(screen.getByText('Artist Name')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Abstract')).toBeInTheDocument();
    expect(screen.getByAltText('Art Piece Title')).toBeInTheDocument();

    // Ensure color palette is rendered
    expect(screen.getByText('Color Palette:')).toBeInTheDocument();
    expect(screen.getAllByTestId('color')).toHaveLength(2); // Assuming each color has a testId of 'color'

    // Ensure back to overview button works
    fireEvent.click(screen.getByText(/back to overview/i));
    expect(mockArtPiece.router.push).toHaveBeenCalledWith('/art-pieces/');
  });

  it('calls onToggleFavorite when favorite button is clicked', () => {
    render(<ArtPieceDetails {...mockArtPiece} />);

    fireEvent.click(screen.getByLabelText('Favorite Button'));

    expect(mockArtPiece.onToggleFavorite).toHaveBeenCalledWith(mockArtPiece.slug);
  });

  it('submits comment when comment form is submitted', () => {
    render(<ArtPieceDetails {...mockArtPiece} />);

    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(mockArtPiece.onSubmitComment).toHaveBeenCalledWith(mockArtPiece.slug);
  });
});






// ---- OLD TEST:
// import ArtPieceDetails from "./ArtPieceDetails";
// import { render, screen, cleanup } from "@testing-library/react";

// afterEach(() => {
//   cleanup(); // Ensure cleanup after each test
// });


// jest.mock("next/router", () => ({
//   useRouter: () => ({
//     query: {
//       slug: "orange-red-and-green",
//     },
//   }),
// }));


// const testObject = {
//   slug: "orange-red-and-green",
//   artist: "Steve Johnson",
//   name: "Orange Red and Green Abstract Painting",
//   imageSource:
//     "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
//   year: "2018",
//   genre: "Abstract Painting",
//   colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
//   dimensions: { height: 2432, width: 1920, type: "jpg" },
// };



// // test("image  button title artist year and genre are displayed in artpiecedetails page", () => {
// //   render(
// //     <ArtPieceDetails
// //       artPiecesInfo={testObject}
// //     />
// //   );
// //   const button = screen.getByRole("button", { name: "Back to Overview" });
// //   const image = screen.getByAltText(/Orange Red and Green Abstract Painting/i);

// //   expect(screen.getByText(/2018/g)).toBeInTheDocument();
// //   expect(screen.getByText(/Steve Johnson/g)).toBeInTheDocument();
// //   expect(
// //     screen.getByText(/Orange Red and Green Abstract Painting/g)
// //   ).toBeInTheDocument();
// //   expect(screen.getByText(/Abstract Painting/g)).toBeInTheDocument();

// //   expect(image).toBeInTheDocument();
// //   expect(button).toBeInTheDocument();
// // });

