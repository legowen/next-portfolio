import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "@/components/projects/projectItem";

export default function projects({ projects }) {
  console.log(projects);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
        <Head>
          <title>Legowen</title>
          <meta name="description" content="legowen" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          My Projects : 
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
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
