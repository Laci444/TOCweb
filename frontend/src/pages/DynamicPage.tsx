import { useLoaderData } from "react-router-dom";

function DynamicPage() {
  const page = useLoaderData() as PageInstance;
  return (
    <div>
      <h1>{page.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: page.body }}></p>
    </div>
  );
}

export default DynamicPage;
