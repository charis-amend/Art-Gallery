import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";

test("A navigation link labeled Spotlight is displayed", () => {
    render(<Navigation />)
    const navSpotlight = screen.getByRole("button", { name: "Spotlight" })
    expect(navSpotlight).toBeInTheDocument()
})

test("A navigation link labeled Pieces is displayed", () => {
    render(<Navigation />)
    const navPieces = screen.getByRole("button", { name: "Pieces" })
    expect(navPieces).toBeInTheDocument()
})

test("Clicking Spotlight shows the SpotlightPage", () => {
    render(<Navigation />)
    const linkSpotlight = screen.getByRole("link", {
        name: "Spotlight"
    })
    expect(linkSpotlight).toBeInTheDocument()
})

test("Clicking Piecs shows the Pieces Page", () => {
    render(<Navigation />)
    const linkPieces = screen.getByRole("link", {
        name: "Pieces"
    })
    expect(linkPieces).toBeInTheDocument()
})