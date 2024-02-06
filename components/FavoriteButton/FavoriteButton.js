import Image from "next/image"


export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
    return (
        <>
            <button
                type="button"
                className="favorite-button"
                onClick={onToggleFavorite}
            >
                <Image
                    src={isFavorite === true ? "/assets/heart-filled.svg" : "/assets/heart_transparent.svg"}
                    alt=""
                    width={50}
                    height={50}
                />
            </button>
        </>
    )
}