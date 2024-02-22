import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { User } from './User';

let s1 = {
  background: "white",
  color: "black",
  marginTop: "200px",
  border: "100px"
}

export function displayMessage(number){
  alert( `{userDetails.filter((s) => number ===s.id)}`)
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
  
  return (
    <button onClick={displayMessage}>display</button>
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
