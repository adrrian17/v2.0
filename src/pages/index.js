import Head from 'next/head';

import DefaultLayout from '~/layouts/DefaultLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian (Sin Acento) Ayala</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

Home.Layout = DefaultLayout;
