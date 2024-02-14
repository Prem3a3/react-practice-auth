import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Header } from './header';
let root = ReactDOM.createRoot(document.getElementById('root'));
// let obj = 'chandu'
// function HeaderTag() {
//   return(
//   <header>
//     <div>
//       <h1>
//       Gundallo Godavari
//     </h1>
//     <li>{obj}</li>
//     </div>
//   </header>)

// }
root.render(<App/>);
