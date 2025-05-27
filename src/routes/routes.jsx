import React from "react";
import { createBrowserRouter } from "react-router";

import About from "../pages/about";
import Layout from "../component/layout";
import Home from "../pages/home";
import ArticlePage from "../pages/articlepage";
import LoginPage from "../pages/login";
import SingupPage from "../pages/singupPage"


export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { Path: "/about", element: <About /> },
      { path: "/article/:index", element: <ArticlePage /> },  
      { path: "/login", element: <LoginPage /> },  
      { path: "/singup", element: <SingupPage /> },  
    ],
  },
]);
