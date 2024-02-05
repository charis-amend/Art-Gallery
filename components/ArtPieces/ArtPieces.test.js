import { render, screen } from "@testing-library/react";
import ArtPieces from ".";
import HomePage from "@/pages";

test("all art pieces are displayed as a list", () => {

    render(<ArtPieces />)
    const unordlistOfArtPieces = screen.getByRole("list")
    const listItem = screen.getByRole("listitem")

    const listLength = pieces.length
    console.log(listLength)
    expect(unordlistOfArtPieces).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
}
)