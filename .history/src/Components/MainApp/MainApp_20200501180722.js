import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import MainAppElement from './MainAppElement'


//http://localhost:4000/items

function MainApp(props) {
  const [inputValue, setInputValue] = useState('')
  
  const [fetchedData, setFetchedData] = useState([])
  const [dataError, setDataError] = useState(null)
  const [inputError, setInputError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const myFetch = async () => {
      setIsLoading(true)
    
      try {
        const response = await fetch(`http://localhost:4000/items`)        
        const responseParsed = await response.json()
        
        setIsLoading(false)
        setFetchedData(responseParsed)

      } catch(dataError){
        setIsLoading(false)
        setDataError(dataError)
      }
      
    }
    myFetch()
  }, [])
    
  if(isLoading){
    return <LoadSpinner></LoadSpinner>
  }
  if(dataError){
    return <p>Error...</p>
  }

  const handleInputChange = (event) => {
    const { value } = event.target

    setInputValue(value)

  }
  const handleButtonClick = () => {

    if(!inputValue) return;
    if(fetchedData.some(el => el.title === inputValue)){
      setInputError('Ten przedmiot już jest na liście')
      return;
    }else{
      fetch('http://localhost:4000/items', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: inputValue
      }),
      })
      .then((response) => response.json())
      .then((data) => {
        
        setFetchedData([...fetchedData, data])
        setInputError('')
        setInputValue('')
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    
    
  }

  const handleElementRemove = (elID) => {
    fetch(`http://localhost:4000/items/${elID}`, {
        method: 'DELETE', // or 'PUT'
      })
      .then(() => {
        setFetchedData(fetchedData.filter(el => el.id !== elID))
        
      }).catch(err => {
       console.error(err)
      });
      
  }
 
    return (
      <LoginAppStyled>
        <h1>Dodaj rzecz którą chcesz obserwować</h1>
        {fetchedData.map((el, index) => (
          <MainAppElement
            key={index}
            value={el.id}
            element={el.title}
            handleCloseClick={handleElementRemove}
          />
        ))}
        <input
          name='listelemt'
          placeholder='Wpisz produkt...'
          value={inputValue}
          onChange={handleInputChange}
        />
        <AddButton onClick={handleButtonClick}></AddButton>
        {!!inputError &&
        <p>{inputError}</p>
        }
      </LoginAppStyled>    
    );
  
}

export default MainApp;

const loadingspin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoadSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 49%;
  pointer-events: none;
	width: 2.5em;
	height: 2.5em;
	border: 0.4em solid transparent;
	border-color: #eee;
	border-top-color: #000;
	border-radius: 50%;
	animation: ${loadingspin} 1s linear infinite;
`
const AddButton = styled.button`
  width: 56px;
  height: 56px;
  color: rgba(255,255,255,1);
  &:before{
    content:"+";
  }
`
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