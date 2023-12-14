import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout({ children }) {
  return (
    <div>
      <h2>AuthLayout Component</h2>
      <div>{children}</div>
      <div id="render">
        <Outlet />
      </div>
    </div>
  );
}
