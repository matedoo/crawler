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

class RegisterApp extends React.Component {
  constructor(){
    super()

    this.state = {
      userName: '',
      userPassword: '',
      userMail: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    console.log('wyslano dane');
    console.log(this.state);
    
    
  }
  render(){
    return (
      <LoginAppStyled>
        <StyledForm onSubmit={this.handleSubmit}>
          <LoginInput type='text' name='userName' placeholder='Imię' value={this.state.userName} onChange={this.handleChange}></LoginInput>
          <LoginInput type='password' name='userPassword' placeholder='Hasło' value={this.state.userPassword} onChange={this.handleChange}></LoginInput>
          <LoginInput type='text' name='userMail' placeholder='Mail' value={this.state.userMail} onChange={this.handleChange}></LoginInput>
          <Link style={{ 'margin-right': 'auto', 'margin-left': 'auto' }} to='/MainApp'><Button type='submit' textBtn='Zarejestruj'/></Link>
        </StyledForm>
      </LoginAppStyled>
    );
  }
}


export default RegisterApp;