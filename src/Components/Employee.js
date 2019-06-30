import React from 'react';
import {StyledEmployeeFigure,StyledEmployeeImg,StyledEmployeeCaption,StylePoints} from '../Styles/EmployeeStyle';

const Employee = ({ imgSrc, name,points}) => {
  return (
    
      <StyledEmployeeFigure>
          <StyledEmployeeImg src={imgSrc} alt=""/>
          <StyledEmployeeCaption>Name: {name}</StyledEmployeeCaption> 
          <StylePoints>Total points: {points}</StylePoints>  
      </StyledEmployeeFigure>
   
  );
}


export default Employee;




