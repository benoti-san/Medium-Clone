/**
 * Imports
 */
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

import '../styles/globals.css';
import '../styles/tailwind.css';
import theme from '../functions/theme';

/**
 * Main App Function
 * =======================================
 * @description This is the entry point of
 * your webapp. All pages are render through
 * this function
 */
function MediumClone(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MediumClone;
