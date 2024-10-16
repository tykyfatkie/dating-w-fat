import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./pages/Question.tsx";
import Date from "./pages/Date.tsx";
import Thankyou from "./pages/Thankyou.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/date",
    element: <Question />,
  },
  {
    path: "/choose",
    element: <Date />,
  },
  {
    path: "/thankyou",
    element: <Thankyou />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
