import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./counter/CounterSlice";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./counter/CounterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const [incrementValue, setIncrementValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="main-div">
      <div className="upper-div">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>{" "}
        {count}{" "}
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
      <div className="lower-div">
        <input
          type="text"
          name=""
          id=""
          value={incrementValue}
          onChange={(e) => setIncrementValue(Number(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(incrementValue));
            setIncrementValue("");
          }}
        >
          AddByAmount
        </button>
      </div>
    </div>
  );
}

export default Counter;
