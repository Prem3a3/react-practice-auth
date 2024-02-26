// import logo from './logo.svg';
import './App.css';
// import { Header } from './header';
import React from 'react';

// export function App() {
//   let [counter, updateCounter] = useState(0)
//   return (
//     <>
//       <h1>count : {counter}</h1>
//       <button onClick={() => {
//         updateCounter(++counter)
//       }}>change</button>

//     </>
//   )
// }

export class App extends React.Component {

  constructor() {
    super();
    this.updatePrice = this.updatePrice.bind(this)

  }
  state = {
    name: 'Volley Ball',
    price: 2000,
  }
  render() {
    return (
      <>
        <p>Price: {this.state.price}</p>
        <p>Name: {this.state.name}</p>
        <button onClick={this.updatePrice}>UpdatePrice</button>
        <input id='name' type='string'></input>
        <input id='price' type='number'></input>

      </>
    )
  }
  updatePrice() {
    let p = document.getElementById('price').value
    this.setState({
      price: p
    }, () => {
      console.log(this.state.price);
    })
  }

}
