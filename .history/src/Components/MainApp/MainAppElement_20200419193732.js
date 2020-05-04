import React from 'react';


function MainAppElement(props){
    const {element, handleCloseClick} = props;
    return(
        <div>
            {element}
        </div>
        <button onClick={handleCloseClick}>X</button>
    )
}

export default MainAppElement;