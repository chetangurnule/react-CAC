import "./App.css";
import { memo } from "react";

function Search({ handleSearch }) {
  console.log("search component is rendered");
  return (
    <>
      <input
        type="text"
        placeholder="search users..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </>
  );
}
export default memo(Search);
