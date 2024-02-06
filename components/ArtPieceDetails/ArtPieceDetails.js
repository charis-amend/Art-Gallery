import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
  onSubmitComment
}) {
  const router = useRouter()
  function handleClick() {
    router.push("/art-pieces/")
  }
  return (
    <>
      <button
        className="back-to-list-button"
        onClick={handleClick}
      >
        Back to Overview
      </button>
      <StyledArticle className="details-container">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <Image src={image} alt={title} width={width} height={height} />
        <article>
          {`The artist ${artist} created this wonderful piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
        </article>
      </StyledArticle>
      {/* <Comments comments={comments} /> */}
      <Comments artPiecesInfo={artPiecesInfo} />
      <CommentForm
        onSubmitComment={onSubmitComment}
        slug={slug}
      />
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
