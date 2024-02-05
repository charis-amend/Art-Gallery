import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const slug = router.query.slug;

  const { data, error, isLoading, mutate } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );
  if (error) return <div>{error}</div>;
  if (isLoading) return <spinner>... loading your art pieces.</spinner>;
  const pieces = [...data];
  console.log("myPices ", pieces);
  console.log("slug from router: ", slug);

  const hit = pieces.find((e) => e.slug === slug);
  console.log("width: ", hit.dimensions.width);
  return (
    <>
      <main>
        <Head>Details</Head>
        <ArtPieceDetails
          image={hit.imageSource}
          title={hit.name}
          artist={hit.artist}
          year={hit.year}
          genre={hit.genre}
          width={hit.dimensions.width / 4}
          height={hit.dimensions.height / 4}
        />
        <button
          className="back-to-list-button"
          onClick={() => router.push("/art-pieces/index")}
        >
          Back to Overview
        </button>
      </main>
    </>
  );
}
