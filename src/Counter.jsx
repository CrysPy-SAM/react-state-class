import { useState } from "react";

function init(){
    return Math.random();
}

export default function Counter(){
//let [stateVariable, setStateVariavle] = useState(10);
let [ count,setCount] = useState(0);
console.log("componet was re-renderd");

let incCount =() =>{
   setCount((currCount)=>{
      return currCount+1;
   });
   setCount((currCount)=>{
   return currCount +1
   });
};



  return(
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increse Count</button>
    </div>
  );
}