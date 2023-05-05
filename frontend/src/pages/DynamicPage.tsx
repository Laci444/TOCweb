import { useLoaderData } from "react-router-dom";

function DynamicPage() {
  const page = useLoaderData() as PageInstance;
  return (
    <div className="grid place-items-center mt-20 sm:mt-24">
      <h1 className="text-5xl sm:text-7xl">{page.title}</h1>
      <div className="mt-8 w-10/12 sm:w-4/6 bg-black/25 rounded p-3 sm:p-5">
        <div className="w-full bg-black/50 rounded p-5">
          <span dangerouslySetInnerHTML={{ __html: page.body }}></span>
        </div>
      </div>
    </div>
  );
}

export default DynamicPage;
