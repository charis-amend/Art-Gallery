import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import styled from "styled-components";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

export default function ArtPieceDetailsPage({ pieces, onSubmitComment, artPiecesInfo }) {
  const router = useRouter();
  const slug = router.query.slug;
  const hit = pieces.find((e) => e.slug === slug);

  return (
    <>
      <StyledMain>
        <Head>
          <title>Details</title>
        </Head>
        <ArtPieceDetails
          image={hit.imageSource}
          title={hit.name}
          artist={hit.artist}
          year={hit.year}
          genre={hit.genre}
          width={hit.dimensions.width}
          height={hit.dimensions.height}
<<<<<<< HEAD:pages/art-pieces/[slug].js
          colors={hit.colors}
=======
          slug={hit.slug}
          onSubmitComment={onSubmitComment}
          artPiecesInfo={artPiecesInfo}
>>>>>>> main:pages/art-pieces/[slug]/index.js
        />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-evenly;
  gap: 20px;
  padding: 20px;
`;
