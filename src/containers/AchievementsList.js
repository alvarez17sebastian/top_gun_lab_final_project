import React,{Component} from 'react';
import axios from 'axios';
import {BASE_REMOTE_ENDPOINT} from '../BaseUrls'
import {StyleList} from '../Styles/EmployeeListStyle';  
import Achievements from '../Components/Achievements';

class AchievementsList extends Component{

    constructor(props){
        super(props);
        this.state = {
            Achievements:{
                content:[],
                error:false
            },
        filterText:"",
        }
    }

    componentDidMount(){
        this.getAchievements();
    }

    getAchievements = () =>{
        axios.get(`${BASE_REMOTE_ENDPOINT}/achievements/`)
        .then(response =>{
 
            this.setState({
                Achievements:{
                  content:response.data,
                  error:''                  
                },
                createAchievementsError:false
            });
        })
        .catch(error => {
            this.setState({
                Achievements: {
                    error: error.message
                }
            })
        })
    }

    

    handleTextChange = (e, keyText) => {
            const value = e.target.value;
            this.setState({ [keyText]: value })
          }
    
    render(){
        const{
            Achievements:{content,error},
    
        filterText
    }   = this.state;

            if (error) {
              return <div>Fetch Error: {error}</div>
            }
            
            const filteredName = content.filter(newContent => newContent.name.includes(filterText));

        return(
             <>
            <div>
            <StyleList
                onChange={(e) => this.handleTextChange(e, "filterText")}
                placeholder="Filter by name"
                 type="text"
                value={filterText} />
            </div>
            <div className="desplazar">
                {filteredName.map(({ name, points }) => (
                   <Achievements
                      name={name} points={points} 
                    />
               
            ))}

           
            </div>
         </>
        );
    }
}

export default  AchievementsList;