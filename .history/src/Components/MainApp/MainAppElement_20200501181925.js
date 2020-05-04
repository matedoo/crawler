import React from 'react';
import styled from 'styled-components';

function MainAppElement(props){
    const {value, element, handleCloseClick} = props;
    return(
        <ElementStyled value={value}>
            {element}
            <button onClick={ () => handleCloseClick(value)}>X</button>
        </ElementStyled>
        
    )
}

export default MainAppElement;

const ElementStyled = styled.div`
  width: 300px;
  height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  box-shadow: -5px -5px 7px 0 rgba(255, 255, 255, 0.5), 5px 5px 7px 0 rgba(194, 193, 192, 0.45);
  border: solid 1px rgba(255, 255, 255, 0.3);
  background-color: #efeeee;
`