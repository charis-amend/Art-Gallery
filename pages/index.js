// import useSWR from "swr";
import Spotlight from "@/components/Spotlight/Spotlight";
export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  isFavorite,
  artPiecesInfo,
}) {
  // ------- moved this to _app.js:
  // const { data, error, isLoading, mutate } = useSWR("https://example-apis.vercel.app/api/art")
  // if (error) return <div>{error}</div>
  // if (isLoading) return <spinner>... loading your art pieces.</spinner>
  // const pieces = [...data]
  // console.log(pieces)
  // console.log(data);
  // -------

  return (
    <>
      <Spotlight
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
