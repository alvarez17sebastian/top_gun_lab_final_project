import React,{Component} from 'react';



export class Employee  extends Component{
    render(){
         const{photo,name,totalPoints}=this.props
        return (
        <div className={"container"}>
            <div className={"card"}>
              <img src={photo} className={"img"} />
              <h1 >Trabajador: {name} </h1> 
              <p>puntos Totales: {totalPoints}</p>

            </div>
        </div>
       )
    }
}

