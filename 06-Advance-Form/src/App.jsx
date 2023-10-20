import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    name: "Chetan S Gurnule",
    artwork: {
      title: "Blue Nana",
      city: "Bramhapuri",
      image:
        "https://images.unsplash.com/photo-1575819719798-83d97dd6949c?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnQlMjBldmVyZXN0fGVufDB8fDB8fHww",
    },
  });

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={person.name}
          onChange={(e) => {
            setPerson({ ...person, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Title : </label>
        <input
          type="text"
          value={person.artwork.title}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: { ...person.artwork, title: e.target.value },
            });
          }}
        />
      </div>
      <div>
        <label>City : </label>
        <input
          type="text"
          value={person.artwork.city}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: { ...person.artwork, city: e.target.value },
            });
          }}
        />
      </div>
      <div>
        <label>Image : </label>
        <input
          type="text"
          value={person.artwork.image}
          onChange={(e) => {
            setPerson({
              ...person,
              artwork: { ...person.artwork, image: e.target.value },
            });
          }}
        />
      </div>
      <div>
        <p>
          {person.artwork.title} by {person.name} (located in{" "}
          {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} />
      </div>
    </div>
  );
}

export default App;
