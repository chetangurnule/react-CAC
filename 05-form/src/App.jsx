import { useState } from "react";
import "./App.css";

function App() {
  let info = {
    userName: "chetan",
    userAge: "24",
    userEmail: "chetangurnule99@gmail.com",
  };
  let [formInfo, setFormInfo] = useState(info);
  return (
    <>
      <div className=" bg-zinc-500 flex justify-center items-center w-screen h-screen">
        <div className=" bg-gray-400 px-4 py-2 shadow-lg rounded-lg">
          <div className="flex justify-center items-center flex-col m-2">
            <label className="text-xl">Name :</label>
            <input
              type="text"
              value={formInfo.userName}
              required
              className=" px-3 py-1 rounded my-1 w-full"
              onChange={(e) => {
                setFormInfo({ ...formInfo, userName: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-center items-center flex-col m-2">
            <label className="text-xl">Age :</label>
            <input
              type="number"
              value={formInfo.userAge}
              required
              className=" px-3 py-1 rounded my-1  w-full"
              onChange={(e) => {
                setFormInfo({ ...formInfo, userAge: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-center items-center flex-col m-2">
            <label className="text-xl">Email :</label>
            <input
              type="email"
              value={formInfo.userEmail}
              required
              className=" px-3 py-1 rounded my-1  w-full"
              onChange={(e) => {
                setFormInfo({ ...formInfo, userEmail: e.target.value });
              }}
            />
          </div>
          <div>
            `Hello Myself {formInfo.userName} my Age is {formInfo.userAge} and
            my Email is {formInfo.userEmail}`
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
