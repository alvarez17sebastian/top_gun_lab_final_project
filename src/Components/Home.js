import React,{Component} from 'react';
import EmployeesList from '../containers/EmployeesList';
import {StyledAppContainer,StyledHeader} from '../Styles/HomeStyle';
import EmployeesForm from '../containers/EmployeesForm';


class Home extends Component{ 
    
  render (){
    return (
      <StyledAppContainer>
        
        <StyledHeader>
        
          <p>Employees List</p>
        </StyledHeader>
        <EmployeesForm/>
       
        <EmployeesList />
        
        </StyledAppContainer>    
  )}
}
  export default Home;


     
  




