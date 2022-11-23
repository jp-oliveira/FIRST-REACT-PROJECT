import React from 'react';
import "./style/Button.css"

const Btn = ({ children, fc_clique}) => {
    return ( 
        <button onClick={fc_clique} className='button_cls'>
            {children}
        </button>
     ); 
}
 
export default Btn;