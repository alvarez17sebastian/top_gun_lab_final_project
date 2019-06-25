import React,{Component} from 'react';


export class Employee  extends Component{

    render(){
         const{photo,name,totalPoints}=this.props
        return (
        <div class="container">
            <div class="card">
              <img src={photo} />
              <h1 >Trabajador: {name} </h1> 

              <p>puntos Totales:  {totalPoints}</p>
            </div>
        </div>
       )
    }
}

