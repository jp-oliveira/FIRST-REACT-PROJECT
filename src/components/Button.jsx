import React from 'react';
import "./Button.css"

const Btn_add = ({ children, fc_clique}) => {
    return ( 
        <button onClick={fc_clique} className='button_cls'>
            {children}
        </button>
     ); 
}
 
export default Btn_add;