import React from 'react';
import Button from '../button'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const LoginInput = styled.input`
  background-color: #edeeee;
  width: 300px;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #272828;
  margin: 10px 0px 20px 0px;
`;

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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

class LoginApp extends React.Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let target = e.target;
    let value = target.value === 'text' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
    }
    
  handleSubmit(e){
    e.preventDefault();
    console.log(`wysłano z danymi `);
    console.log(this.state);
    
  }  
  render(){
    return ( 
      <LoginAppStyled>
        <StyledForm onSubmit={this.handleSubmit}>
          <LoginInput type='text' name='email' placeholder='Mail' value={this.state.email} onChange={this.handleChange}></LoginInput>
          <LoginInput type='password' name='password' placeholder='Hasło' value={this.state.password} onChange={this.handleChange}></LoginInput>
          <Link to='/MainApp'><Button type='submit' textBtn='Zaloguj'/></Link>
        </StyledForm>
        
      </LoginAppStyled>
    );
  }
}


export default LoginApp;
