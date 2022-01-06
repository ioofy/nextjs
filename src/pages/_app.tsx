import React from "react";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { Provider } from "next-auth/client";
import Layout from "@layout/layout";
import globalStyles from "@styles/global.styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider session={pageProps.session}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
