import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton"
import Link from "next/link";

export default function Spotlight({ pieces, isFavorite, onToggleFavorite, artPiecesInfo }) {
  function getRandomArtPiece(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIndex = getRandomArtPiece(pieces.length);
  const randomPiece = pieces[randomIndex];

  //   console.log("Pieces object: ", pieces);
  //   console.log("How many pieces? ", pieces.length);
  //   console.log("Random art piece: ", randomPiece);
  //   console.log("Random image source:", randomPiece.imageSource);

  return (
    <figure>
      <FavoriteButton
        isFavorite={
          artPiecesInfo?.find((artpieceinfo) => artpieceinfo.slug === randomPiece.slug)?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
      />
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
  );
}

// Resizing image
const StyledImage = styled(Image)`
  width: 20%;
  height: 20%;
`;
