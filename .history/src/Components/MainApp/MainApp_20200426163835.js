import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainAppElement from './MainAppElement'


//http://localhost:4000/items

function MainApp(props) {
  const [elementsListState, setElementsListState] = useState({ elementsList: [], inputValue: '', error: ''})
  const [dataError, setDataError] = useState(null)
  const [fetchedData, setFetchedData] = useState(null)
  const [apiItems, setApiItems] = useState('items')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const myFetch = async () => {
      setIsLoading(true)
      const response = await fetch(`http://localhost:400/${apiItems}`)

      try {
        const responseParsed = await response.json()
        setIsLoading(false)
        setFetchedData(responseParsed)
      } catch(dataError){
        setDataError(dataError)
      }
      
    }
    myFetch()
  }, [apiItems])
  console.log(fetchedData);

  if(isLoading){
    return <p>Loading...</p>
  }
  if(dataError){
    return <p>Error...</p>
  }

  const handleInputChange = (event) => {
    const { value } = event.target
    setElementsListState({
      ...elementsListState,
      inputValue: value
    })

  }
  const handleButtonClick = () => {
    const { elementsList } = elementsListState;

    if(!inputValue) return;
    
    if(elementsList.some(element => element === inputValue)){
      setElementsListState({
        ...elementsListState,
        error: 'Ten produkt już istnieje',
        inputValue: '',
      })
      return;
    }
    setElementsListState({
      error: '',
      elementsList: [...elementsList, inputValue],
      inputValue: ''
    })
  }

  const handleElementRemove = (elementValue) => {
    setElementsListState({
      ...elementsListState,
      elementsList: elementsList.filter(element => element !== elementValue)
    })
  }
  const { error, elementsList, inputValue} = elementsListState;
    return (
      <LoginAppStyled>
        <h1>Dodaj rzecz którą chcesz obserwować</h1>
        {elementsList.map((element) => (
          <MainAppElement
            key={element}
            element={element}
            handleCloseClick={handleElementRemove}
          />
        ))}
        <input
          name='listelemt'
          placeholder='Wpisz produkt...'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Dodaj</button>
        {!!error && <p>{error}</p>}
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