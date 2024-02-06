import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import styled from "styled-components";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const slug = router.query.slug;
  console.log("-------->", pieces)
  // const { data, error, isLoading, mutate } = useSWR(
  //   "https://example-apis.vercel.app/api/art", fetcher
  // );
  // if (error) return <div>{error}</div>;
  // if (isLoading) return <spinner>... loading your art pieces.</spinner>;
  // const pieces = [...data];
  // console.log("myPices ", pieces);
  // console.log("slug from router: ", slug);

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
