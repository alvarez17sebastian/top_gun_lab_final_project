import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {BASE_REMOTE_ENDPOINT} from '../BaseUrls'
import Employee from '../Components/Employee';

class EmployeesList extends Component{

    constructor(props){
        super(props);
        this.state = {
            Employees:{
                content:[],
                error:false
            },
            newEmployeeFrom:{
             name:"",
             points:"",
             job:"",
             area:"",
             imgSrc:""
           },
           createEmployeeError: false,
           filterText:""
        }
    }

    componentDidMount(){
        this.getEmployees();
    }

    getEmployees = () =>{
        axios.get(`${BASE_REMOTE_ENDPOINT}/employees`)
        .then(response =>{
            console.log(response.data);
            this.setState({
                Employees:{
                  content:response.data,
                  error:''                  
                },
                createEmployeeError:false
            });
        })
        .catch(error => {
            this.setState({
                Employees: {
                    error: error.message
                }
            })
        })
    }

    
    createEmployee = (e) => {
        e.preventDefault();
        const {
            newEmployeeFrom: {
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
                ...prevState.newEmployeeFrom,
                [field]: value
            }
        }))
    }

    render(){
        const{
            Employees:{content,error},
            createEmployeeError,
            newEmployeeFrom: {
                name,
                points,
                job,
                area,
                imgSrc
        }
       }   = this.state;
            if (error) {
              return <div>Fetch Error: {error}</div>
            }
        return(
            <>
            <h2>Create employee</h2>

            {createEmployeeError && <p>An error ocurred creating Employee</p>}
            <form onSubmit={e => this.createEmployee(e)}>
                {this.createTextInput(name, 'name')}
                {this.createTextInput(points, 'points')}
                {this.createTextInput(job, 'job')}
                {this.createTextInput(area, 'area')}
                {this.createTextInput(imgSrc, 'imgSrc')}
                <button type="submit">Create</button>
            </form>

                {content.map(({ id, name, imgSrc, points }) => (
                <Link key={id} to={`/employees/${id}`}>
                    <Employee imgSrc={imgSrc} name={name} points={points}/>
                </Link>
            ))}
         </>
        );
    }
}

export default EmployeesList;