import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component {
        constructor() {
                super()
                this.state = {
                        quantity: 0,
                        price:0
                }
        }
        update = () => {
                this.setState({quantity:5}, ()=>{
                        if(this.state.quantity == 5) {
                                this.setState({price:2000-100})
                        }
                })
        }
        render() {
               return(
               <>
                        <h1>{this.state.quantity}</h1>
                        <h1>{this.state.price}</h1>
                        <button onClick={this.update}>Update</button>
               </>
               )
               }
               
}
export default App;
