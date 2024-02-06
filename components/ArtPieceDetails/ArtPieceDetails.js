import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function ArtPieceDetails({
  colors,
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

  //make artist name start with upper case
  const artistUpper = artist
    .split(" ")
    .map((e) => {
      return e
        .split("")
        .map((e, i) => (i === 0 ? e.toUpperCase() : e))
        .join("");
    })
    .join(" ");

  //fancy word blender
  const fancyArray = [
    "wonderful",
    "spectacular",
    "infamous",
    "gorgeous",
    "genious",
    "awesome",
    "excellent",
    "brilliant",
  ];
  const randomIndex = Math.floor(Math.random() * fancyArray.length);
  const fancyWord = fancyArray[randomIndex];

  return (
    <>
      <StyledArticle className="details-container">
        <Image src={image} alt={title} width={width / 4} height={height / 4} />
        <article>
          {`The artist ${artistUpper} created this ${fancyWord} piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
        </article>
        <h3>Color-Palette:</h3>
        <StyledDivContainer>
          {colors.map((e, i) => {
            return <StyledDiv key={i} style={{ backgroundColor: e }} />;
          })}
        </StyledDivContainer>
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

const StyledDiv = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 25%;
  height: 40px;
  padding: 2px;
`;

const StyledDivContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  gap: 0px;
  padding: 2px;
  width: 100%;
  height: 100%;
`;
