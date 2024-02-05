import Head from "next/head";
import useSWR from "swr";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";


export default function ArtPieces({ pieces }) {


    return (
        <>
            <Head>
                Art Pieces
            </Head>

            <ul className="art-pieces-list">
                {
                    pieces.map((piece) => {
                        return (
                            <li
                                key={piece.slug}
                                className="art-pieces-list__preview-item">
                                <ArtPiecePreview
                                    image={piece.imageSource}
                                    width={piece.dimensions.width}
                                    height={piece.dimensions.height}
                                    title={piece.name}
                                    artist={piece.artist}
                                />
                            </li>
                        )
                    })
                }

            </ul>

        </>

    )

}