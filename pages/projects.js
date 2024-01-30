import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";

export default function projects() {
  return (
    <Layout>
      <Head>
        <title>Legowen</title>
        <meta name="description" content="legowen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      My Projects
    </Layout>
  );
}

//Build Time Request
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  console.log(projects);

  const projectsIds = projects.results.map((aProject) => aProject.id);

  console.log("projectIds : ${projectIds}");

  return {
    props: {},
  };
}
