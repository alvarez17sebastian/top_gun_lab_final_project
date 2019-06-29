import React from 'react';
import EmployeesList from '../containers/EmployeesList';
import styled from 'styled-components';



function Home() {
  return (
      <StyledAppContainer>
        <StyledHeader>
          <h1>Employees List</h1>
        </StyledHeader>
        <EmployeesList />
      </StyledAppContainer>
  );
}
const StyledAppContainer = styled.div`
text-align: center;
`;

export const StyledHeader = styled.header`
background-color: #222;
color: #fff;
overflow: auto;
`;


export default Home;
