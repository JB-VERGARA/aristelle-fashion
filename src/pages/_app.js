import '../styles/globals.css'; // Import global styles
import Head from 'next/head'; // Import Head for metadata

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <title>Aristelle Fashion</title> {/* Page title */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
