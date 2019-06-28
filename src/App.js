import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Employee from './Components/Employee'
import { employees } from "./Datajson/Data";
import EmployeesList from './containers/EmployeesList'


class App extends Component{
  state ={
    Employees: employees,
    validateEmploye : false,
    filterText:"",
    nameText:"",
    pointsNumber:"",
    jobText:"",
    areaText:"",
    photoUrl:""
  }
  handleTextChange = (e, keyText) => {
    const value = e.target.value;
    this.setState({ [keyText]: value })
  }

  createEmploy = (e) => {
    e.preventDefault();
    const {
      nameText: name,
      pointsNumber: points,
      jobText: job,
      areaText:area,
      photoUrl : imgSrc,
     
    } = this.state;

    const newEmployes= {
      id: Math.random(),
      name,
      pointsNumber:"",
      jobText:"",
      areaText:"",
      photoUrl:"",
     
    }
    this.setState(prevState => ({
      Employees: prevState.Employees.concat(newEmployes),
      pointsNumber:"",
      jobText:"",
      areaText:"",
      photoUrl:"",
     
    }))
  } 


  render(){
    const{
      Employees,
      filterText,
      nameText,
      pointsNumber,
      jobText,
      areaText,
      photoUrl,
     
  }=this.state;
  
 const newArray= Employees.sort(function (a, b) {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    return 0;
  });
   const filteredName = newArray.filter(employ => employ.name.includes(filterText));

  return (
    <div className="App">
      <div >
          <input
            onChange={(e) => this.handleTextChange(e, "filterText")}
            placeholder="Filter by name"
            type="text"
            value={filterText}
            
          />
        </div>  
    
        <main>
          {filteredName.map(employ=>(
            <Employee 
                 key={employ.id}
                 name={employ.name}
                 imgSrc={employ.imgSrc}
                 points={employ.points}
                 {...employ}
               ></Employee>
              ))}   
          </main>
        <form  onSubmit={this.createEmploy}>
          <input
            type="text"
            placeholder="userName"
            onChange={(e) => this.handleTextChange(e, "nameText")}
            value={nameText}
          />
          <input
            type="text"
            placeholder="userPoints"
            onChange={(e) => this.handleTextChange(e, "pointsNumber")}
            value= {pointsNumber}
            
          />
          <input
            type="text"
            placeholder="userJob"
            onChange={(e) => this.handleTextChange(e, "jobText")}
            value={jobText}
          />
          <input
            type="text"
            placeholder="userArea"
            onChange={(e) => this.handleTextChange(e, "areaText")}
            value={areaText}
          />
            <input
             type="text"  
             placeholder="photo url"
             onChange={(e) => this.handleTextChange(e, "PhotoUrl")}
             value={photoUrl}
          />
          
          <button type="submit">Create!</button>
          
     </form>

    </div>
   
   )

  }
}  

export default App;
