import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Bookings from "./components/Bookings/Bookings.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Error from "./components/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/bookings", Component: Bookings },
      { path: "/blogs", Component: Blogs },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
