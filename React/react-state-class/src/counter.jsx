import { useState } from "react";

function init() {
  console.log("Init was executed");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init()); //Initialization
  // let [count, setCount] = useState(init()); //Initialization
  console.log("Component was re-rendered");

  let incCount = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
