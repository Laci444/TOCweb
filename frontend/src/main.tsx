import React from 'react'
import ReactDOM from 'react-dom/client'
import DinamicPage from './pages/DinamicPage.tsx'
import PageLayout from './pages/PageLayout.tsx'
import NewPage from './pages/NewsPage.tsx'
import './index.css'
import Fetcher from './utils/Fetcher.tsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route index element={<NewPage />} />
      <Route
        path='/:page'
        element={<DinamicPage />}

        loader = { async ({ params }) => 
          { return fetch(await Fetcher.FetchPage(params.page)) } }
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
