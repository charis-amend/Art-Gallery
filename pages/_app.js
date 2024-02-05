import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
// const url = "https://example-apis.vercel.app/api/art"

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
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
