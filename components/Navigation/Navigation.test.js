import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";

test("A navigation link labeled Spotlight is displayed", () => {

    render(<Navigation />)
    const navSpotlight = screen.getAllByRole("link", { name: SpotlightPage, level: 1 })
})