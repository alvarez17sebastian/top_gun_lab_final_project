import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Employee} from './Components/Employee'
import { employees } from './Datajson/Data';


class App extends Component{
  state ={
    employees :[]
  }
  render(){
  return (
    <div className="App">
          {employees.map(employ=>(
            <Employee
              key={employ.id}
              name={employ.name}
              photo={employ.imgSrc}
              totalPoints={employ.points}
              {...employ}
            ></Employee>
           ))}   
    </div>
   )
  }
}  

export default App;
