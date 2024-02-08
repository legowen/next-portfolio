import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/projectItem";

export default function projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <Head>
        <title>Legowen</title>
        <meta name="description" content="legowen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My Projects : {projects.results.length} </h1>

      {projects.results.map((aProject) => (
        <ProjectItem key={aProject.id} data={aProject}/>
      ))}
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
    body: JSON.stringify({
        sorts: [
            {
                "property": "이름",
                "direction":"ascending"

        }
    ],
        page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  console.log(projects);

  const projectsNames = projects.results.map(
    (aProject) => aProject.properties.이름.title[0].plain_text
  );

  console.log(`projectNames : ${projectsNames}`);

  return {
    props: { projects },
  };
}
