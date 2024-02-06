import { useRouter } from "next/router";

export default function Comments({ artPiecesInfo }) {
  const router = useRouter();
  const slug = router.query.slug;

  const filteredComments = artPiecesInfo?.filter(
    (comment) => comment.artPiece === slug
  );

  return (
    <div className="comments">
      <h3>Comments</h3>
      {filteredComments?.map((comment, index) => (
        <ul key={comment.id}>
          <li>
            &#34;{comment.comment}&#34; &#40;{comment.date}, {comment.time}
            &#41;
          </li>
        </ul>
      ))}
    </div>
  );
}
