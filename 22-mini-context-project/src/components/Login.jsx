import { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setUser } = useContext(userContext);
  function onSubmit(e) {
    e.preventDefault();
    setUser({ userName, password });
  }
  return (
    <div>
      <h3>This is Login Section</h3>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />{" "}
      <input
        type="text"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <button className="btn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
