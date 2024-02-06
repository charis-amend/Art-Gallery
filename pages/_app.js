import Layout from "@/components/Layout/Layout.js";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

const fetcher = async (url) => {
  const response = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data. --> see _app.js file fetcher async function.");
    // Attach extra info to the error object.
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};




export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art", fetcher)

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState("artPiecesInfo", { defaultValue: [] })

  function handleToggleFavorite(slug) {
    if (artPiecesInfo.find((piece) => piece.slug === slug)) {
      // if there is a artpieceinfo (which has a slug) that matches the slug of the clicked artpiece then do this:
      setArtPiecesInfo(
        // setting the global state of the artpiecesinfo-array new with mapping:
        // map over each artpieceinfo and update the array, but only...
        artPiecesInfo.map((artpieceinfo) =>
          // ... only update  the artpieceinfo which matches the clicked-artpiece-slug 
          artpieceinfo.slug === slug ?
            // spread the rest of the object, and switch the isFavorite value to opposite value
            { ...artpieceinfo, isFavorite: !artpieceinfo.isFavorite }
            :
            // if doesnt match then just return the object without any change:
            artpieceinfo
        )
      )
      // if there is not a (piece) => piece.slug === slugOfArtPieceClicked, then set it to true:
    } else {
      setArtPiecesInfo(
        [
          ...artPiecesInfo,
          { slug, isFavorite: true }
        ]
      )
    }
  }

  // COMMENTS COMPONENT
  function handleAddComment(newComment, slug) {
    const date = new Date().toLocaleDateString("en-gb", {
      dateStyle: "medium",
    });
    const time = new Date().toLocaleTimeString("en-gb");
    const artPiece = slug;
    setArtPiecesInfo([
      { id: uid(), date, time, artPiece, ...newComment },
      ...artPiecesInfo,
    ]);
  }
  console.log("Do we have comments? ", artPiecesInfo);
  // COMMENTS COMPONENT

  if (error) return <div>{error}</div>
  if (isLoading) return <spinner>... loading your art pieces.</spinner>

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component
            {...pageProps}
            // pieces from the fetching data:
            pieces={pieces}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={handleToggleFavorite}
            comments={artPiecesInfo}
            onSubmitComment={handleAddComment}

          />
        </Layout>
      </SWRConfig>
    </>
  );
}
