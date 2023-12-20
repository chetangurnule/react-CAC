import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePostPage from "./features/post/SinglePostPage.jsx";
import Layout from "./Layout.jsx";
import EditPostForm from "./features/post/EditPostForm.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Layout />,
      },
      {
        path: "posts/:postId",
        element: <SinglePostPage />,
      },
      {
        path: "editPost/:postId",
        element: <EditPostForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
