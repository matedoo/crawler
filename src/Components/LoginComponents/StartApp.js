import React from 'react';
import BtnContainer from '../btnContainer'
import Heading from '../heading'
import styled from 'styled-components';



class StartApp extends React.Component {

  render(){
    return (
      <AppStartStyled>
     
        <Heading/>
          <BtnContainer> </BtnContainer>
      </AppStartStyled>
    );
  }
}

const AppStartStyled = styled.div`
  background-color: #edeeee;
  margin: 0;
  padding:0;
  height: 100vh;
  width: 100%;
  display: inline-block;
`;

export default StartApp;
