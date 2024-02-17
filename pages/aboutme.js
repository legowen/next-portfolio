import React, { useEffect, useRef } from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import Profile from "@/components/aboutme/profile";
import Intro from "@/components/aboutme/introduction";

export default function Aboutme() {
  return (
    <Layout>
      <Head>
        <title>Legowen</title>
        <meta name="description" content="legowen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:pr-5 md:pr-16 flex flex-col">
            <Profile />
          </div>

          <Intro />
        </div>
      </section>
    </Layout>
  );
}
