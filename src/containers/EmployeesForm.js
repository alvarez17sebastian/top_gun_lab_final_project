import React,{Component} from 'react';
import axios from 'axios';
import {BASE_REMOTE_ENDPOINT} from '../BaseUrls'


class EmployeesForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            newEmployeesForm:{
             name:"",
             points:"",
             job:"",
             area:"",
             imgSrc:""
           },
           createEmployeeError: false,
           
        }
    }

    
    createEmployee = (e) => {
        e.preventDefault();
        const {
            newEmployeesForm: {
                name,
                points,
                job,
                area,
                imgSrc
            }
        } = this.state;
        
        axios.post(`${BASE_REMOTE_ENDPOINT}/employees`, {
            name,
            points,
            job,
            area,
            imgSrc
        }, {
            headers: { "Content-Type": "application/json"}
        })
        .then(() => { this.getEmployees() })
        .catch(() => { this.setState({ createEmployeeError: true })})
    }
    createTextInput = (value, field) => (
        <input
            required
            type="text"
            placeholder={field}
            onChange={(e) => this.handleInputChange(e.target.value, field)}
            value={value}
        />
    )

    handleInputChange = (value, field) => {
        this.setState(prevState => ({
            newEmployeeFrom: {
                ...prevState.newEmployeesForm,
                [field]: value
            }
        }))
    }

   
    render(){
        const{
            createEmployeeError,
            newEmployeesForm: {
                name,
                points,
                job,
                area,
                imgSrc
        }
        
    }   = this.state;

         
        return(
            <div>
           
             <h2>createEmployee</h2>
             {createEmployeeError && <p>An error ocurred creating Employee</p>}
             <form onSubmit={e => this.createEmployee(e)}>
                 <label> {this.createTextInput(name, 'name')} </label>
                <label>{this.createTextInput(points, 'points')}</label>
                <label>{this.createTextInput(job, 'job')}</label>
                <label>{this.createTextInput(area, 'area')}</label>
                 <label>{this.createTextInput(imgSrc, 'imgSrc')}</label>
                <button type="submit">Create</button>
             </form>
            
             </div>
        );
    }
}

export default EmployeesForm;
