import { useState } from "react";

export function App(){

  let num = 500;
  let [nums, updateNum] = useState(100)

  return (
    <>
    <button onClick={() => {
      num = 200;
      alert(num)
    }}> click</button>
    <br></br>
    <input type='text' onChange={(e) => {
      let newNum = e.target.value;
      updateNum(newNum);
    }} value={num}/>
     <p>{nums}</p></>
   
  )
}