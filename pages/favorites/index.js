import ArtPieces from "@/components/ArtPieces/ArtPieces";


import React from "react";

export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {

  const filteredFavorites = artPiecesInfo.filter((e) => e.isFavorite === true);
  const filteredSlugs = filteredFavorites.map((e) => e.slug);
  const filteredPieces = pieces.filter((e) => filteredSlugs.includes(e.slug));
  console.log("fpi", filteredPieces);
  return (
    <ArtPieces
      pieces={filteredPieces}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
