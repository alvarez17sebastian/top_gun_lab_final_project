import React,{Component} from 'react';
import propTypes from 'prop-types'

export class Employee  extends Component{

    static propTypes ={
        photo:propTypes.string,
        name:propTypes.string,
        totalPoints:propTypes.string
        
    }
    render(){
        const{photo,name,totalPoints}=this.props
        return (
                
            <div class="card">
                <div class="card-image">
                <figure class="image is-4by3">
                <img src={photo} alt="Placeholder image"/>
                </figure>
                </div>
             <div class="card-content">
                <div class="media">
                 <div class="media-content">
                    <p class="title is-4">{name}</p>
                 </div>
                </div>
                 <div class="content">
                   <a href="#">#totalPoints: {totalPoints}</a> 
                </div>
            </div>
            </div>
       )
    }
}

