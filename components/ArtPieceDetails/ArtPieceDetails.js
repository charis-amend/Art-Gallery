import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
}) {
  const router = useRouter();
  function handleClick() {
    router.push("/art-pieces/");
  }

  const artistUpper = artist
    .split(" ")
    .map((e) => {
      return e
        .split("")
        .map((e, i) => (i === 0 ? e.toUpperCase() : e))
        .join("");
    })
    .join(" ");

  return (
    <>
      <StyledArticle className="details-container">
        <Image src={image} alt={title} width={width / 4} height={height / 4} />
        <article>
          {`The artist ${artistUpper} created this wonderful piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
        </article>
        <button className="back-to-list-button" onClick={handleClick}>
          Back to Overview
        </button>
      </StyledArticle>
    </>
  );
}

//like so  for list page on image. image needs to be a link
//<Link href={router.push({`${pathname}/${????.slug}`})}>Image</Link>

const StyledArticle = styled.article`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
