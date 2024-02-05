import Image from "next/image"
import styled from "styled-components"
export default function ArtPiecePreview({ image, width, height, title, artist }) {

    return (
        <>
            <StyledImage
                className="art-pieces-list-preview-item__img"
                src={image}
                width={width}
                height={height}
                alt={title}
                priority={true}
            />

            <span
                className="art-pieces-list-preview-item__caption">
                {`"${title}" by ${artist}`}
            </span>
        </>
    )
}

// styling image in ArtPiecePreview
const StyledImage = styled(Image)`
width: 20%;
height: 20%
`

