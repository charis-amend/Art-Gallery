import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import FavoriteButton from "../FavoriteButton/FavoriteButton"

export default function ArtPiecePreview({ slug, image, width, height, title, artist, isFavorite, onToggleFavorite }) {
    return (
        <>
            <FavoriteButton
                isFavorite={isFavorite}
                onToggleFavorite={onToggleFavorite}
            />
            <Link href={`/art-pieces/${slug}`}>
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
            </Link>
        </>
    )
}

// styling image in ArtPiecePreview
const StyledImage = styled(Image)`
width: 20%;
height: 20%
`

