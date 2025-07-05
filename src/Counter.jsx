export default function Counter(){
  let count = 1;

  function increseCount(){
    count += 1;
    console.log(count);
  }

  return(
    <div>
        <h3>Count = {count}</h3>
        <button onClick={increseCount}>Increse Count</button>
    </div>
  );
}