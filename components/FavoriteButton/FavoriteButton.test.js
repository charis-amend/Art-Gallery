import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";



//  The favorite-button is displayed in the details view 🖼️
test('The favorite-button is displayed in the details view', () => {
    render(<FavoriteButton />)
    const favButton = screen.getByRole("button")
    expect(favButton).toBeInTheDocument()
})


//  Clicking the favorite-button on a non-favorite piece saves it as a favorite 🖼️
test('Clicking the favorite-button on a non-favorite piece saves it as a favorite', () => {
    const isFavorite = false; // Define isFavorite as false
    const handleToggleFavorite = jest.fn(); // Mock onToggleFavorite function
    render(<FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
    />
    )

    const favButtonToggled = screen.getByTestId("button-id")
    fireEvent.click(favButtonToggled)

    expect(handleToggleFavorite).toHaveBeenCalledTimes(1)
})


//  Clicking the favorite-button on a favorite piece removes it from favorites 🖼️
