import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Root";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import AuthLayout from "./components/AuthLayout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="contact" element={<Contact />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
