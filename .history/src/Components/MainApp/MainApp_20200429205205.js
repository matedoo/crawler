import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  // console.log(fetchedData);
  
  
  
  
  if(isLoading){
    return <p>Loading...</p>
  }
  if(dataError){
    return <p>Error...</p>
  }

  const handleInputChange = (event) => {
    const { value } = event.target

    setInputValue(value)

  }
  const handleButtonClick = () => {
    // setFetchedData({inputValue})
    
    // const { elementsList } = elementsListState;
    // console.log(elementsList)
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
    
    fetch(`http://localhost:4000/items?.title=${elID}`, {
        method: 'DELETE', // or 'PUT'
      })
      .then(() => {
        setFetchedData(fetchedData.filter(el => el.id !== elID))
        
        console.log([...fetchedData])
        console.log('removed');
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
        <button onClick={handleButtonClick}>Dodaj</button>
        {!!inputError &&
        <p>{inputError}</p>
        }
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