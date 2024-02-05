import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function HomePage() {

  const { data, error, isLoading, mutate } = useSWR("https://example-apis.vercel.app/api/art")

  if (error) return <div>{error}</div>
  if (isLoading) return <spinner>... loading your art pieces.</spinner>

  const pieces = [...data]
  console.log(pieces)
  console.log(data);

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces
        pieces={pieces}
      />

    </div>
  );
}
