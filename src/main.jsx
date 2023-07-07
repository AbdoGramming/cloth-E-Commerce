import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./sass/main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShopPage from "./pages/ShopPage.jsx";

// const HatsPage = () => <h1>Hats Page</h1>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
