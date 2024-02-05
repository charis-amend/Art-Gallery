import React from "react";
import Image from "next/image";
import "./ArtPieceDetails.module.css";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  width,
  height,
}) {
  return (
    <>
      <article className="details-container">
        <Image src={image} alt={title} width={width} height={height} />
        <article>
          {`The artist ${artist} created this wonderful piece with the title ${title} in the year ${year}. We consider the genre to be ${genre}.`}
        </article>
      </article>
    </>
  );
}

//like so  for list page on image. image needs to be a link
//<Link href={router.push({`${pathname}/${????.slug}`})}>Image</Link>
