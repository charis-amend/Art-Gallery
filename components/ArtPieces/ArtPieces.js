import Head from "next/head";
import useSWR from "swr";


export default function ArtPieces({ pieces }) {


    const { data, error, isLoading, mutate } = useSWR("https://example-apis.vercel.app/api/art")
    if (error) return <div>{error.message}</div>
    if (isLoading) return <spinner>... loading your art pieces.</spinner>


    return (
        <>
            <Head>
                Art Pieces
            </Head>

            <ul className="art-pieces-list">
                <li className="art-pieces-list__item">

                </li>
            </ul>

        </>

    )

}