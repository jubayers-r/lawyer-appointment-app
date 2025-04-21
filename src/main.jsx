import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Bookings from "./components/Bookings/Bookings.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Error from "./components/Error/Error.jsx";
import Details from "./components/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "/bookings",
        loader: () => fetch("/lawyers.json"),
        Component: Bookings,
      },
      { path: "/blogs", Component: Blogs },
      {
        path: "/lawyer/:license_number",
        loader: () => fetch("/lawyers.json"),
        Component: Details,
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
