import React from "react";
import ReactDOM from "react-dom/client";
import DynamicPage from "./pages/DynamicPage.tsx";
import PageLayout from "./pages/PageLayout.tsx";
import NewPage from "./pages/NewsPage.tsx";
import "./index.css";
import Fetcher from "./utils/Fetcher.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import bgImg from "./assets/hatter.webp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />} loader={Fetcher.FetchPages}>
      <Route index element={<NewPage />} 
        loader={ ({ request }) => (Fetcher.FetchNews(new URL(request.url).searchParams.get("page"))) } />
      <Route
        path="/:page"
        element={<DynamicPage />}
        loader={async ({ params }) => {
          return fetch(await Fetcher.SearchPage(params.page));
        }}
      />
    </Route>
  )
);

document.documentElement.style.backgroundImage = `url('${bgImg}')`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
