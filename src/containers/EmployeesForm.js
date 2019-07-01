import React,{Component} from 'react';
import axios from 'axios';
import {BASE_REMOTE_ENDPOINT} from '../BaseUrls'
import {StyledEmployeeForm,StyledEmployeeInput,StyledFormContainer} from '../Styles/EmployeesFormStyle';


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
        <StyledEmployeeInput
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
           
            <StyledFormContainer>
             <h2  >Create Employee</h2>
             {createEmployeeError && <p>An error ocurred creating Employee</p>}
             <StyledEmployeeForm onSubmit={e => this.createEmployee(e)}>
                 {this.createTextInput(name, 'name')} 
                {this.createTextInput(points, 'points')}
                {this.createTextInput(job, 'job')}
                {this.createTextInput(area, 'area')}
                {this.createTextInput(imgSrc, 'imgSrc')}
                <button type="submit">Create</button>
             </StyledEmployeeForm>
            
             </StyledFormContainer>
           
        );
    }
}

export default EmployeesForm;



