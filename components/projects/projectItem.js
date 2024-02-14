import Image from "next/image";

export default function projectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0];
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width={10}
        height={5}
        layout="responsive"
        objectFit="none"
        quality={100}
      />

      <div className="p-4 flex flex-col ">
        <h1 className="text-2xl font-bold">{title}</h1>
        {/* <h3 className="mt-4 text-xl">{description}</h3> */}
        <a href={github}> See the code (Github) </a>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
