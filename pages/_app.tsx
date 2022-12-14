import type { AppProps } from "next/app";

import "@style";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
