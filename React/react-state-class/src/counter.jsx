import { useEffect, useState } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  
  let intCountx = () => {
    setCountx((currCount) => currCount + 1);
  };
  let intCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(function printSomething() {
    console.log("this is a side-effect");
  },[countx]
);

  return (
    <div>
      <h3>count = {countx} </h3>
      <button onClick={intCountx}>+1</button>
      <h3>count = {county} </h3>
      <button onClick={intCounty}>+1</button>
    </div>
  );
}
