import { useRouter } from "next/router";

export default function Comments({ artPiecesInfo }) {
  const router = useRouter();
  const slug = router.query.slug;

  const [filteredComments] = artPiecesInfo?.filter(
    (e) => e.comment && e.slug === slug
  );
  console.log("fic", filteredComments && filteredComments.comment);


  return (
    <div className="comments">
      <h3>Comments</h3>
      {filteredComments &&
        filteredComments?.comment.map((e) => (
          <ul key={e.id}>
            <li>
              &#34;{e.comment}&#34; &#40;{e.date}, {e.time}&#41;
            </li>
          </ul>
        ))}
    </div>
  );
}
