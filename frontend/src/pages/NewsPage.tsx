import New from "../components/New";
import { useLoaderData } from "react-router-dom";

function NewPage() {
  const apiData = useLoaderData() as Array<New>;
  return (
    <>
      <div className="w-screen h-screen place-items-center grid absolute top-0">
        <div>
          <h1 className="
            text-xl sm:text-5xl md:text-6xl lg:text-8xl
            pb-3 sm:p-6 md:p-8 lg:p-10

          ">TheOld - Crafters</h1>
          <hr className="h-0.5 md:h-1 md:my-4 bg-gray-100 border-0 rounded max-w-full" />
        </div>
      </div>

      {/* insert a spacer element to take up the space of the title div */}
      <div className="h-screen -z-10"></div>

      <div id="news">
        {apiData.map((data) => (
          <New key={data.title} newData={data} />
        ))}
      </div>
    </>
  );
}

export default NewPage;
