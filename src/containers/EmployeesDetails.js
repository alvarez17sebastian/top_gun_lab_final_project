import React, { Component } from 'react';
import axios from 'axios';
import {BASE_REMOTE_ENDPOINT} from '../BaseUrls'
import AppRouter from '../Router';
class EmployeesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeesInfo: {
                name:"",
                points:"",
                job:"",
                area:"",
                imgSrc:""
               
              
            },
            error: ''
            
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${BASE_REMOTE_ENDPOINT}/employees/${id}`)
        .then(response => {
            this.setState({
                employeesInfo: response.data,
                error: ''
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }


    render() { 
        const {
            employeesInfo: {
                name,
                points,
                job,
                area,
                imgSrc
               
            }
        } = this.state;

        return ( 

                <div>
                <AppRouter/>
                <img src={imgSrc} alt=""/>
                <p><b></b>{name}</p>
                <p><b></b>{points}</p>
                <p><b>job: </b>{job}</p>
                <p><b>areaText: </b>{area}</p>
              
                
                </div>
            
         );
    }
}
 
export default EmployeesDetails;