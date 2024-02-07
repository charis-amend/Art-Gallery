import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo }) {
  const router = useRouter();
  const slug = router.query.slug;
  const [randomPiece, setRandomPiece] = useState();
  let rp = "";
  useEffect(() => {
    function getRandomArtPiece() {
      const max = pieces.length;

      rp = pieces[Math.floor(Math.random() * max)];
      return rp;
    }
    setRandomPiece(getRandomArtPiece());
  }, []);

  if (!randomPiece) {
    return <div>Loading random Piece</div>;
  }

  return (
    <>

<h1>ART GALLERY</h1>
      <div className="spotlight-art-piece-container">
      <FavoriteButton
        // isFavorite={isFavorite}
        // onToggleFavorite={onToggleFavorite}
        isFavorite={
          artPiecesInfo?.find(
            (artpieceinfo) => artpieceinfo.slug === randomPiece.slug
          )?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
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
       </div>
    </>
  );
}
