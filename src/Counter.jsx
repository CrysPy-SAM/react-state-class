import { useState } from "react";

export default function Counter(){
let [stateVariable, setStateVariavle] = useState(10);
let [ count,setCount] = useState(0);

let incCount =() =>{
   setCount(count + 1);
  console.log(count);
};



  return(
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increse Count</button>
    </div>
  );
}