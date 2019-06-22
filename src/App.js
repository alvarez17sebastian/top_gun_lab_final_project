import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Employee} from './Components/Employee'

function App() {
  return (
    <div className="App">
      <Employee className="card"
          photo="https://bulma.io/images/placeholders/1280x960.png"
          name="colas"
          totalPoints="34"
      ></Employee>

    </div>
  );
}   

export default App;
