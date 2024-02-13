import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";

export default function resume() {
  return (
    <Layout>
      <Head>
        <title>Legowen</title>
        <meta name="description" content="legowen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>This is my resume. Click the link below to download.</p>
        <object
          data="/Resume.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        >
          Your browser doesn't support embedded PDFs.
        </object>
      </main>
    </Layout>
  );
}
