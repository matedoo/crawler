import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: #efeeee;
    height: 46px;
    width: 108px;
    border-radius: 5px;
    box-shadow: -5px -4px 6px 0 rgba(174, 173, 172, 0.65),  4px 2px 8px 0 rgba(174, 173, 172, 0.65);
    border: 0;
    color: black;
    margin: 10px
`;


function Button(props){
    return(
      <StyledButton>{props.textBtn}</StyledButton>
    )
}
export default Button