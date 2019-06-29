import React from 'react';


// function Employee({
//     name,
//     imgSrc,
//     points
    
// }) {
//     return (
//       <div className={"container"}>
//        <div className={"card"}>
//          <img src={imgSrc} className={"img"} />
//          <h1 >Trabajador: {name} </h1> 
//          <p>puntos Totales: {points}</p>
//        </div>
//      </div>
//     );
// } 


const Employee = ({ imgSrc, name,points }) => {
  return (
    <div>
      <figure>
          <img src={imgSrc} alt=""/>
          <figcaption>{name}</figcaption> 
          <figcaption>{points}</figcaption>   
      </figure>
      </div>
  );
}


export default Employee;