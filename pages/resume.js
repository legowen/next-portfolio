import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";

export default function resume() {
  return (
    <Layout>
      <Head>
        <title>Legowen</title>
        <meta name="description" content="legowen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My Resume</h1>
        <p>This is my resume. Click the link below to download.</p>
        {/* <Link href="/path/to/your/resume.pdf">
          <a target="_blank" rel="noopener noreferrer">Download Resume PDF</a>
        </Link> */}
      </main>
    </Layout>
  );
}
