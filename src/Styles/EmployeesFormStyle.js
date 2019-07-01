import styled from 'styled-components';



export const StyledEmployeeForm = styled.form`
  
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, auto);
    
  
    button {
        cursor: pointer;
        background: transparent;
        background:#b5b8b0;
        border: 1px solid #fcfff7;
        align:center;
        font-size: 16px;
        color: #white;
        border-radius: 5px;
        transition: background 0.37s ease-in-out;
        margin: 5px;

        :hover {
            background: #fcfff7;
            transition: background 0.37s ease-in-out;
        }
    }
`;


export const StyledEmployeeInput = styled.input`
    margin: 5px;
    border-radius: 5px;
    border: 1px solid ##fcfff7;
    font-size: 16px;
    padding: 5px 5px 5px 10px;
`;

export const StyledFormContainer = styled.div`
    color: #fff;
    padding: 5px;
    background-color: #2b303b;
    margin-top:0px;
`;
