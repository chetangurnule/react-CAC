import "./App.css";
import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h2>This is the tutorial of context Api</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
