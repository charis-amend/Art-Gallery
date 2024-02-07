import { useRouter } from "next/router";

export default function Comments({ artPiecesInfo }) {
  const router = useRouter();
  const slug = router.query.slug;

  const [filteredComments] = artPiecesInfo?.filter(
    (e) => e.comment && e.slug === slug
  );
  console.log("fic", filteredComments && filteredComments.comment);
  return (
    <>
      <div className="comments-container">
        <h3>Comments</h3>
        {filteredComments &&
          filteredComments?.comment.map((e) => (
            <ul key={e.id}>
              <li>
                <div className="comment-text">&#34;{e.comment}&#34; </div>
                <div className="comment-date-time">
                  &#40;{e.date}, {e.time}&#41;
                </div>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
}
