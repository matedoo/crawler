import React from 'react';


function MainAppElement(props){
    const {value, element, handleCloseClick} = props;
    return(
        <div>
            {element}
            <button onClick={ () => handleCloseClick(element)}>X</button>
        </div>
        
    )
}

export default MainAppElement;