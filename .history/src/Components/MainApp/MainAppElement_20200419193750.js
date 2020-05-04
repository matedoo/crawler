import React from 'react';


function MainAppElement(props){
    const {element, handleCloseClick} = props;
    return(
        <div>
            {element}
            <button onClick={handleCloseClick}>X</button>
        </div>
        
    )
}

export default MainAppElement;