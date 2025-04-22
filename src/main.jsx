import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
const Bookings = lazy(() => import("./components/Bookings/Bookings.jsx"));
const Blogs = lazy(() => import("./components/Blogs/Blogs.jsx"));
const Details = lazy(() => import("./components/Details/Details.jsx"));
import Error from "./components/Error/Error.jsx";
import LawError from "./components/Error/LawError.jsx";
import Loading from "./utils/loading.jsx";
import Article from "./components/Blogs/Article.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/bookings",
        loader: () => fetch("/lawyers.json"),
        element: (
          <Suspense fallback={<Loading />}>
            <Bookings />
          </Suspense>
        ),
      },
      {
        path: "/blogs",
        loader: () => fetch("/questions.json"),
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "/article/:id",
        loader: () => fetch("/questions.json"),
        Component: Article,
      },
      {
        path: "/lawyer/:license_number",
        loader: () => fetch("/lawyers.json"),
        element: (
          <Suspense fallback={<Loading />}>
            <Details />
          </Suspense>
        ),
        errorElement: <LawError />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
