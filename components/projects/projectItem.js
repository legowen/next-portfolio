import Image from "next/image";

export default function projectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0];
  const imgSrc = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="flex flex-col p-6 m-3 bg-slate-700 rounded-md">
      <Image src={imgSrc} width={10} height={5} layout="responsive"/>

      <h1>{title}</h1>
      {/* <h3>{description}</h3> */}
      <a href={github}> See the code (Github) </a>
    </div>
  );
}
