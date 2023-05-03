import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import IconBar from "../components/IconBar";

function PageLayout() {
  const loaderData = useLoaderData() as Array<Page>;
  return (
    <>
      <Navbar navPages={loaderData} />
      <Outlet />
      <IconBar />
    </>
  );
}

export default PageLayout;
