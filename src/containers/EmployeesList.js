import React,{Component} from 'react';
import axios from 'axios';
import {BASE_REMOTE_ENDPOINT,EMPLOYEES_RESOURCE} from '../BaseUrls'

class EmployeesList extends Component{

    constructor(props){
        super(props);
        this.state = {
            Employees:{
                content:[]
            }
        }
    }

    componentDidMount(){
        this.getEmployees();
    }

    getEmployees = () =>{
        axios.get(`${BASE_REMOTE_ENDPOINT}${EMPLOYEES_RESOURCE}`)
        .then(response =>{
            console.log(response.data);
            this.setState({
                Employees:{
                  content:response.data 
                }
            });
        })
    }

    render(){
        const{Employees:{content}} = this.state;
        return(
            <h1>Probando petición http.</h1>
        )
    }
}

export default EmployeesList;