import Layout from "@/components/Layout/Layout.js";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data. --> see _app.js file fetcher async function.");
    // Attach extra info to the error object.
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};




export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR("https://example-apis.vercel.app/api/art", fetcher)
  if (error) return <div>{error}</div>
  if (isLoading) return <spinner>... loading your art pieces.</spinner>
  console.log("============", pieces)

  return (
    <>
      {/* <SWRConfig value={{ fetcher }}> */}
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          // pieces from the fetching data:
          pieces={pieces}
        />
      </Layout>
      {/* </SWRConfig > */}
    </>
  );
}
