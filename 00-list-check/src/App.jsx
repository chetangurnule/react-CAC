import { useState } from "react";

function ItemList({ list, onToggle }) {
  return (
    <>
      <ul>
        {list.map((obj) => (
          <li key={obj.id}>
            <label>
              <input
                type="checkbox"
                checked={obj.seen}
                onChange={(e) => {
                  onToggle(obj.id, e.target.checked);
                }}
              />
              {obj.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
  ];
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(id, seenValue) {
    setMyList(
      myList.map((obj) => {
        if (obj.id === id) return { ...obj, seen: seenValue };
        else return obj;
      })
    );
  }

  function handleToggleYourList(id, seenValue) {
    setYourList(
      yourList.map((obj) => {
        if (obj.id === id) return { ...obj, seen: seenValue };
        else return obj;
      })
    );
  }

  return (
    <>
      <h1>ART BUCKET LIST</h1>
      <h2> My List of Art to See</h2>
      <ItemList list={myList} onToggle={handleToggleMyList} />
      <h2>Your List of Art to See</h2>
      <ItemList list={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

export default App;
