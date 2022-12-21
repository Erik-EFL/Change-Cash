import { useEffect, useState } from "react";
import {  createBrowserRouter } from "react-router-dom";
import Home from '../pages/transactions/index';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from "../error/pages/ErrorPage";

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Home/>,
    errorElement: <ErrorPage />,
  }
])

export default Routing
