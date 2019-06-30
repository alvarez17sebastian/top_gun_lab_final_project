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

    

    handleTextChange = (e, keyText) => {
            const value = e.target.value;
            this.setState({ [keyText]: value })
          }
      
       orderArray=(e)=>{
        const newArray= e.sort(function (a, b) {
            if (a.points < b.points) {
              return 1;
            }
            if (a.points > b.points) {
              return -1;
            }
            return 0;
          });
          return newArray;
       }   

       

    render(){
        const{
            Employees:{content,error},
    
        filterText
    }   = this.state;

            if (error) {
              return <div>Fetch Error: {error}</div>
            }
            
            const filteredName = this.orderArray(content).filter(newContent => newContent.name.includes(filterText));

        return(
             <>
            <input
            onChange={(e) => this.handleTextChange(e, "filterText")}
            placeholder="Filter by name"
            type="text"
            value={filterText} />

                {filteredName.map(({ id, name, imgSrc, points }) => (
                    
                 <Link key={id} to={`/employees/${id}`}>
                    <Employee
                     imgSrc={imgSrc} name={name} points={points}
                    />
                </Link>
               
            ))}
         </>
        );
    }
}

export default EmployeesList;