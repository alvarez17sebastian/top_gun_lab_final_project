import React, { Component } from 'react';
import axios from 'axios';
import {BASE_REMOTE_ENDPOINT} from '../BaseUrls'

class AchievementsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AchievementsInfo: {
                name:"",
                points:"",
             
            },
            error: ''
            
        }
    }

    componentDidMount = () => {
        const { match: { params: { id } } } = this.props;
        axios.get(`${BASE_REMOTE_ENDPOINT}/achievements/${id}`)
        .then(response => {
            this.setState({
                AchievementsInfo: response.data,
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
            AchievementsInfo: {
                name,
                points,
             
            }
        } = this.state;

        return ( 
                <div>
              
                <p><b>name: </b>{name}</p>
                <p><b>poitns: </b>{points}</p>
               
                </div>
            
         );
    }
}
 
export default AchievementsDetails;