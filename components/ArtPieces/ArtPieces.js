import Head from "next/head";
import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <Head>
        <title>Art Pieces</title>
      </Head>
      <h1>ART GALLERY</h1>
      <ul className="art-pieces-list">
        {pieces.map((piece) => {
          return (
            <li key={piece.slug} className="art-pieces-list__preview-item">
              <div className="HELLO">
                <ArtPiecePreview
                  image={piece.imageSource}
                  width={piece.dimensions.width}
                  height={piece.dimensions.height}
                  title={piece.name}
                  artist={piece.artist}
                  slug={piece.slug}
                  isFavorite={
                    artPiecesInfo?.find(
                      (artpieceinfo) => artpieceinfo.slug === piece.slug
                    )?.isFavorite
                  }
                  onToggleFavorite={() => onToggleFavorite(piece.slug)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
