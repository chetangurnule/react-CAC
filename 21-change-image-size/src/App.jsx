import { useState } from "react";
import "./App.css";
import { places } from "./Data";
import { getImageUrl } from "./Utils";
import { ImageSizeContext } from "./context";
import { useContext } from "react";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  const imageSize = isChecked ? 200 : 100;
  return (
    <>
      <ImageSizeContext.Provider value={imageSize}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
              }}
            />
            Use Large Image
          </label>
          <List />
        </div>
      </ImageSizeContext.Provider>
    </>
  );
}

function List() {
  const listItem = places.map((place) => {
    return (
      <li key={place.id}>
        <Place place={place} />
      </li>
    );
  });
  return <ul>{listItem}</ul>;
}

function Place({ place }) {
  if (!place) {
    return null;
  }
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {" : " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      ></img>
    </>
  );
}
