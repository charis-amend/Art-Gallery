import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton"
import Link from "next/link";

export default function Spotlight({ pieces, onToggleFavorite, isFavorite }) {
  function getRandomArtPiece(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomArtPiece(pieces.length);
  const randomPiece = pieces[randomIndex];

  return (
    <>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <figure>
        <Link href={`/art-pieces/${randomPiece.slug}`}>
          <StyledImage
            className="art-pieces-list-preview-spotlight__img"
            src={randomPiece.imageSource}
            alt={randomPiece.name}
            width={randomPiece.dimensions.width}
            height={randomPiece.dimensions.height}
          />
          <figcaption>{randomPiece.artist}</figcaption>
        </Link>
      </figure>
    </>
  );
}

// Resizing image
const StyledImage = styled(Image)`
  width: 20%;
  height: 20%;
`;
