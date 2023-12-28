import { useState } from 'react'
import './App.css'
import Navbar from './Components/navbar';
import Card from './Components/card';
function App() {
  
  return (
    <center>
      <div className="container">
        <div className="nav">
          <Navbar/>
        </div>
        <div className="Name">
          <h1>Pricing Plan</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos pariatur corrupti. Autem facilis quaerat error incidunt ullam porro, eum ratione magni molestiae suscipit ipsa aut omnis in, perferendis animi?</p>
        </div>
        <div className="details">
          <Card/>
        </div>
      </div>
    </center>
  );
}

export default App
