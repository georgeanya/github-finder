import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <p className="flex  cursor-pointer items-center">My Github Finder</p>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
