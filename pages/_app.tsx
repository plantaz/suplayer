import type { AppProps } from "next/app";

import "@style";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Suplayer</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
