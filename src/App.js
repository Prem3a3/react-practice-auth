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
     userDetails.map((singleUser) => {
      return <User id = {singleUser.id} name = {singleUser.name}  place = {singleUser.place}/>
    })
  )
}
