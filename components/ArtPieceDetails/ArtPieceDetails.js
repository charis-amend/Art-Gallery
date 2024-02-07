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
  onSubmitComment,
}) {
  const router = useRouter();
  function handleClick() {
    router.push("/art-pieces/");
  }
  return (
    <>
      <button className="back-to-list-button" onClick={handleClick}>
        &larr; Back to Overview
      </button>

      <h1>{title}</h1>

      <article className="art-piece-details-container">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />

        <Image
          className="art-pieces-detail__img"
          src={image}
          alt={title}
          width={width}
          height={height}
        />

        <p className="art-piece-description">
          {`The artist ${artist} created this wonderful piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
        </p>
      </article>

      <Comments artPiecesInfo={artPiecesInfo} />
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
    </>
  );
}
