import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #222323;
`;

const TitleDesc = styled(Title)`
  font-size: 1.3em;
`;

function Heading(){
    return(
      <header>
        <Title> Racoon pomoże Ci śledzić promocje twoich ulubionych produktów!</Title>
        <TitleDesc>Zapisz frazę na liście<br /> Kiedy produkt zawierający wybraną frazę pojawi się w na promocji<br />Racoon poinformuje Cię o tym</TitleDesc>
      </header>
    )
  }

  export default Heading;