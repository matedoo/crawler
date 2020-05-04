import React from 'react';
import styled from 'styled-components';

function MainAppElement(props){
    const {value, element, handleCloseClick} = props;
    return(
        <ElementStyled value={value}>
            {element}
            <ElementDeleteStyled onClick={ () => handleCloseClick(value)}></ElementDeleteStyled>
        </ElementStyled>
        
    )
}

export default MainAppElement;

const ElementStyled = styled.div`
  width: 260px;
  height: 40px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  box-shadow: -5px -5px 7px 0 rgba(255, 255, 255, 0.5), 5px 5px 7px 0 rgba(194, 193, 192, 0.45);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  background-color: #efeeee;
`
const ElementDeleteStyled = styled.button`
  height: 30px;
  width: 40px;  
  box-shadow: inset -3px -3px 2px 0 rgba(255, 255, 255, 0.25), inset 3px 3px 2px 0 rgba(194, 193, 192, 0.3);
  background-color: #efeeee;
  border: 0;
  &:before{
    position: relative;
    content:"\00af";
    width: 20px;
    /* height: 1px; */
  }
`