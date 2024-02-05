import Image from "next/image"
import styled from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"

export default function ArtPiecePreview({ slug, image, width, height, title, artist }) {
    return (
        <>
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

