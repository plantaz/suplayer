import type { AppProps } from "next/app";

import "@style";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Suplayer</title>
        <link rel='shortcut icon' href='favicon.png' type='image/x-icon' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
