import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useState } from "react";

export default function ArtPieceDetails({
  colors,
  slug,
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
  setArtPiecesInfo,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment,
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
  // let fancyWord = "";
  const [fancy, setFancy] = useState();
  useEffect(() => {
    function makeFancyWord() {
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
      return fancyWord;
    }

    setFancy(makeFancyWord());
  }, []);

  return (
    <>
      <button className="back-to-list-button" onClick={handleClick}>
        &larr; Back to Overview
      </button>

      <h1>{title}</h1>

      <article className="art-piece-details-container">
        <FavoriteButton
          isFavorite={
            artPiecesInfo?.find((artpieceinfo) => artpieceinfo.slug === slug)
              ?.isFavorite
          }
          onToggleFavorite={() => onToggleFavorite(slug)}
        />
        <Image className="art-pieces-detail__img"
          src={image}
          alt={title}
          width={width / 4}
          height={height / 4}
          priority={true}
        />

        <p className="art-piece-description">
          {`The artist ${artist} created this wonderful piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
        </p>
      </article>

      <article className="art-piece-description">
        {`The artist ${artistUpper} created this ${fancy} piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
      </article>
      <h3>Color Palette:</h3>
      <StyledDivContainer>
        {colors.map((e, i) => (
          <StyledDiv key={i} style={{ backgroundColor: e }} />
        ))}
      </StyledDivContainer>

      {/* <Comments comments={comments} /> */}

      <Comments artPiecesInfo={artPiecesInfo} />
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
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
