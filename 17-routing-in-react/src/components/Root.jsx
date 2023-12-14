import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h1>Root Component</h1>
      <div id="render">
        <Outlet />
      </div>
    </div>
  );
}
