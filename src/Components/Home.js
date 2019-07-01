import React,{Component} from 'react';
import EmployeesList from '../containers/EmployeesList';
import {StyledAppContainer,StyledHeader} from '../Styles/HomeStyle';
import EmployeesForm from '../containers/EmployeesForm';
import AppRouter from '../Router';

class Home extends Component{ 
    
  render (){
    return (
      <StyledAppContainer>
       
         <StyledHeader>
          <AppRouter/>
        </StyledHeader>
        <EmployeesForm/>
        <EmployeesList />
     </StyledAppContainer>    
  )}
}
  export default Home;


     
  




