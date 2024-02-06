import ArtPieces from "@/components/ArtPieces/ArtPieces";
import React from "react";

//mockup:
const artPiecesInfo = [
  {
    slug: "orange-red-and-green",
    isFavorite: true,
  },
  { slug: "blue-and-red", isFavorite: false },
];

// artPiecesInfo needs to be passed a prop, mockup deleted

export default function Favorites({ pieces }) {
  const filteredFavorites = artPiecesInfo.filter((e) => e.isFavorite === true);
  const filteredSlugs = filteredFavorites.map((e) => e.slug);
  const filteredPieces = pieces.filter((e) => filteredSlugs.includes(e.slug));

  return <ArtPieces pieces={filteredPieces} />;
}
