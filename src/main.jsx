import React from "react";
import ReactDOM from "react-dom/client";

import "./sass/main.sass";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage.jsx";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />,
      <Route path="shop" element={<ShopPage />} />,
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
