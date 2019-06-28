import React from 'react';


function Employee({
    name,
    imgSrc,
    points
    
}) {
    return (
      <div className={"container"}>
       <div className={"card"}>
         <img src={imgSrc} className={"img"} />
         <h1 >Trabajador: {name} </h1> 
         <p>puntos Totales: {points}</p>
       </div>
     </div>
    );
} 


export default Employee;