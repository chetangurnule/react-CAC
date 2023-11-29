import { useCallback, useState } from "react";
import "./App.css";
import Search from "./search";

const allUsers = ["john", "alex", "george", "semen", "james"];

function App() {
  const [users, setUsers] = useState(allUsers);
  // function to handle search functionality
  const handleSearch = useCallback(
    (text) => {
      const filterUsers = allUsers.filter((user) => user.includes(text));
      console.log("handle search function called", text);
      setUsers(filterUsers);
    },
    [users]
  );

  // function to shuffle the list
  function shuffle(arr) {
    const list = [...arr];
    for (let i = list.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    console.log("shuffle function called");
    return list;
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setUsers(shuffle(allUsers));
          }}
        >
          Shuffle
        </button>
        <Search handleSearch={handleSearch} />
      </div>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
