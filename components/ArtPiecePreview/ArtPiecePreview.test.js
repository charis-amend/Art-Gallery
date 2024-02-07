import ArtPiecePreview from "./ArtPiecePreview";
import { render, screen } from "@testing-library/react";


const exampleTestDataObject =
{
    "slug": "orange-red-and-green",
    "artist": "Steve Johnson",
    "name": "Orange Red and Green Abstract Painting",
    "imageSource": "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    "year": "2018",
    "genre": "Abstract Painting",
    "colors": ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    "dimensions": { "height": 2432, "width": 1920, "type": "jpg" }
}

test("testing --> image // title // artist <--- displayed for each preview", () => {

    render(<ArtPiecePreview
        image={exampleTestDataObject.imageSource}
        width={exampleTestDataObject.dimensions.width}
        height={exampleTestDataObject.dimensions.height}
        title={exampleTestDataObject.name}
        alt={exampleTestDataObject.name}
    />)
    console.log(exampleTestDataObject)

    // const imageAlt = screen.getByAltText("")
    // console.log(imageAlt)
    // expect(imageSrc).toHaveAttribute("src", "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg")

    // const title = screen.getByRole("sp")
    // const artist = screen.getByRole()


})

//  The favorite-button is displayed in each entry in the list view 🖼️
test("The favorite-button is displayed in each entry in the list view", () => {
    render(<ArtPiecePreview />)
    const favButtons = screen.getAllByRole("button")
    expect(favButtons).toHaveLength(1)
})