import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'



class ListElement extends React.Component{

    // componentDidMount = () => {
    //     fetch('http://localhost:4000/items')
    //     .then(res => res.json())
    //       .then(json => this.setState({items: json}))
            
    //   } 
   
    state = {
        items: this.props.items,
        done: false,
        handleDeleteClick: this.props.handleDelete
    }

    toggleDone = () =>{
        this.setState({done: !this.state.done})
    }
    showMenu = () =>{
        this.setState({open: !this.state.open})
    }
   

    render(){
        // const { text } = this.props.item

        return(
        <ListElementStyled onClick={this.toggleDone}>
            <ListElementStyledParagraph>{this.props.item}</ListElementStyledParagraph>
            <StyledMenuRight>
                <ListElementStyledMenu onClick={this.showMenu} >
                    <StyledMenuBar></StyledMenuBar>
                    <StyledMenuBarSecond></StyledMenuBarSecond>
                    <StyledMenuBarThird></StyledMenuBarThird>
                </ListElementStyledMenu>
                <StyledRenameIcon open={this.state.open}><FontAwesomeIcon icon={faPen} size="2x" /></StyledRenameIcon>
                <StyledDeleteIcon open={this.state.open} onClick={this.handleDeleteClick}><FontAwesomeIcon icon={faTrash} size="2x" /></StyledDeleteIcon>
            </StyledMenuRight>
        </ListElementStyled>
        )
    }  
}
export default ListElement;


const ListElementStyled = styled.div`
    width: 325px;
    height: 46px;
    border-radius: 5px;
    box-shadow: -5px -5px 7px 0 rgba(255, 255, 255, 0.5), 5px 5px 7px 0 rgba(194, 193, 192, 0.45);
    border: solid 1px rgba(255, 255, 255, 0.3);
    background-color: #efeeee;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ListElementStyledParagraph = styled.p`
    line-height: 10px;
    margin-left: 10px;
`
const ListElementStyledMenu = styled.div`
    width: 26px;
    height: 32px;
    border-radius: 5px;
    box-shadow: -3px -3px 4px 0 rgba(255, 255, 255, 0.45), 3px 3px 4px 0 rgba(194, 193, 192, 0.4);
    background-color: #efeeee;
    position: relative;
    margin-right: 10px;  
`
const StyledMenuBar = styled.div`
    width: 20px;
    height: 2px;
    background-color: #878787;
    margin: 6px 0;
    transition: 0.4s;
    transform: rotate(90deg) translate(9px,1px);
`
const StyledMenuBarSecond = styled(StyledMenuBar)`
    transform: rotate(90deg) translate(1px,-9px);
`
const StyledMenuBarThird = styled(StyledMenuBar)`
    transform: rotate(90deg) translate(-7px,-4px);
`
const StyledMenuRight = styled.div`
    display: flex;
`
const StyledDeleteIcon = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 5px;
    box-shadow: inset -3px -3px 2px 0 rgba(255, 255, 255, 0.25), inset 3px 3px 2px 0 rgba(194, 193, 192, 0.3);
    background-color: #efeeee;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${props => props.open ? 'flex' : 'none'}; 
`
const StyledRenameIcon = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 5px;
    box-shadow: inset -3px -3px 2px 0 rgba(255, 255, 255, 0.25), inset 3px 3px 2px 0 rgba(194, 193, 192, 0.3);
    background-color: #efeeee;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${props => props.open ? 'flex' : 'none'} ;
`