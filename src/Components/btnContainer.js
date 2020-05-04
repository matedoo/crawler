import React from 'react';
import styled from 'styled-components';
import Button from './button'
import {Link} from 'react-router-dom'

const StyledContainer = styled.div`
    width: 100%;
    display: inline-grid;
    justify-content: center;
`;

function BtnContainer(props){
    return(
      <StyledContainer>
        <Link to='/LoginApp'><Button textBtn='Zaloguj'/></Link>
        <Link to='/RegisterApp'><Button textBtn='Zarejestruj'/></Link>
      </StyledContainer>
    )
  }

  export default BtnContainer;