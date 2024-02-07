import ArtPieces from "@/components/ArtPieces/ArtPieces";
import React from "react";

export default function Favorites({ pieces, artPiecesInfo }) {
  const filteredFavorites = artPiecesInfo.filter((e) => e.isFavorite === true);
  const filteredSlugs = filteredFavorites.map((e) => e.slug);
  const filteredPieces = pieces.filter((e) => filteredSlugs.includes(e.slug));

  return <ArtPieces pieces={filteredPieces} />;
}
