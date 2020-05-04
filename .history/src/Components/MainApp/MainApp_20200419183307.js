import React, { useState } from 'react';
import styled from 'styled-components';
import MainAppElement from './MainAppElement'




function MainApp(props) {
  const [elementsList, setElementsList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target
    setInputValue(value);
    
  }
    return (
      <LoginAppStyled>
        <h1>Dodaj rzecz którą chcesz obserwować</h1>
        {elementsList.map((element) => (
          <MainAppElement
            key={element}
            element={element}
          />
        ))}
        <input
          name='listelemt'
          placeholder='Wpisz produkt...'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>Dodaj</button>
      </LoginAppStyled>    
    );
  
}

export default MainApp;



const LoginAppStyled = styled.div`
   background-color: #edeeee;
   margin: 0;
   padding:0;
   height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`