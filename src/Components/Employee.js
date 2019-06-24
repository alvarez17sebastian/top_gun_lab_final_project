import React,{Component} from 'react';


export class Employee  extends Component{

    render(){
         const{photo,name,totalPoints}=this.props
        return (
             <div class="card">
                <div class="card-image">
                    <figure >
                     <img src={photo} />
                    </figure>
                </div>
             <div class="card-content">
                 <p class="title is-4" >{name}</p>
                    <div >
                     <a href="#">#totalPoints: {totalPoints}</a> 
                    </div>
            </div>
        </div>
       )
    }
}

