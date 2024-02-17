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

export function App() {
  return (
    <div> 
      <User name = 'Chandu' age = '20'/>
      <User name = 'Prem' age = '20'/>

    </div>
  )
}
