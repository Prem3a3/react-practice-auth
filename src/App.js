import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { User } from './User';
import { useState } from 'react';

let s1 = {
  background: "white",
  color: "black",
  marginTop: "200px",
  border: "100px"
}

export function displayMessage(number) {
  alert(`{userDetails.filter((s) => number ===s.id)}`)
}

const userDetails = [
  {
    id: 20,
    name: 'Abhraham',
    place: 'Ohio'
  },
  {
    id: 21,
    name: 'Revanth',
    place: 'miami'
  },
  {
    id: 22,
    name: 'Kranthi',
    place: 'miami'
  }
]

export function App() {
  let stock = 10;
  let [counter, setCounter] = useState(0);

  return (
    <div className='Wrapper'>
      <button className='minus' disabled = {counter === 0} onClick={() => {
        if (counter > 0) {
          setCounter(counter-1);
        }
      }}>-</button>
      <p>{counter}</p>
      <button className='plus' onClick={() => {
        if (counter < stock) {
          setCounter(counter+1);
          // console.log(counter);
        }
      }}>+</button>


    </div>
  )
}

function Fragments() {
  return (
    <>
      <div>This is div1</div>
      <div>This is div2</div>
      <div>This is div2</div>

    </>
  )
}
