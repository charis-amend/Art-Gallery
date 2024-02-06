import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({ pieces, onToggleFavorite, artPiecesInfo }) {
    return (
        <>
            <ArtPieces
                artPiecesInfo={artPiecesInfo}
                onToggleFavorite={onToggleFavorite}
                pieces={pieces}
            />
        </>
    )
}