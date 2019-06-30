import React,{Component} from 'react';
import EmployeesList from '../containers/EmployeesList';
import {StyledAppContainer,StyledHeader} from '../Styles/HomeStyle';

class Home extends Component{ 
    
  render (){
    return (
      <StyledAppContainer>
        <StyledHeader>
          <h1>Employees List</h1>
        </StyledHeader>
        <EmployeesList />
       
        </StyledAppContainer>    
  )}
}
  export default Home;


     
  




