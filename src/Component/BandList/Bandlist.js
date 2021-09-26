import React from 'react';
import "./Bandlist.css"

const Bandlist = (props) => {
    console.log(props)
    return (
        <div className="Bandlist"> 
            
            {
                <li> {props.band}</li>
            }
        </div>
    );
};

export default Bandlist;