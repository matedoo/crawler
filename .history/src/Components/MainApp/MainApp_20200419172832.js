import React from 'react';
import styled from 'styled-components';
import ListElement from './MainAppElement'


// class MainAppInfo extends React.Component{
    
    
//     render(){
        
//         return(
          
//         )
//     }
// }

class MainApp extends React.Component {
  componentDidMount = () => {
    fetch('http://localhost:4000/items')
    .then(res => res.json())
      .then(json => this.setState({items: json}))
        
  } 
state = {
    items: this.props.items,
    draft: '',
    id: 0
}

updateDraft = event => {
    this.setState({draft: event.target.value})
}
addToList = () =>{
    const {items, draft} = this.state
    
    const list = items
    const newListEl = {title: draft}
    list.push(newListEl)
    this.setState({items: list, draft: ''})

    fetch('http://localhost:4000/items', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          title: newListEl.title
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
}
  myList = []  
 
  render(){
    const {items ,draft} = this.state
    return (
    <LoginAppStyled>
       <div>
          <h1>Twoja lista jest pusta<br /> Dodaj Frazę którą chcesz śledzić</h1>
           {items.map(item => <ListElement item={item.title} value={item.id} />)}
            <InputDraft placeholder='Pisz tutaj...' type='text' onChange={this.updateDraft} value={draft}></InputDraft>
            <AddBtn onClick={this.addToList}></AddBtn>
       </div> 
    </LoginAppStyled>    
    );
  }
}

export default MainApp;






const InputDraft = styled.input`
    width: 325px;
    height: 35px;
    border-radius: 5px;
    box-shadow: -8px -8px 10px 0 #ffffff, 8px 8px 10px 0 rgba(80, 78, 78, 0.3), inset 3px 3px 4px 0 rgba(255, 255, 255, 0.15), inset -4px -4px 4px 0 rgba(17, 16, 16, 0.25);
    background-color: #2b2b2c;
    color: white;
    border: 0;
    margin-top: 15px;
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

const AddBtn = styled.button`
    width: 60px;
    height: 60px;
    box-shadow: 4px 2px 8px 0 rgba(174, 173, 172, 0.65), -5px -4px 6px 0 rgba(253, 253, 253, 0.65);
    background-color: #efeeee;
    border-radius: 35px;
    border: 0;
    position: absolute;
    bottom: 20px;
    left: 42%;
    right: 58%;
    &:after,
    &:before{
        content: "";
		display: block;
		background-color: #272828;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
    }
    &:before {
		height: 2em;
		width: 0.2em;
	}

	&:after {
		height: 0.2em;
		width: 2em;
	}
`;