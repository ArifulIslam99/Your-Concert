import React from 'react';

const Bandlist = (props) => {
    console.log(props)
    return (
        <div> 
            
            {
                <li>
                {props.band}
              </li>
            }
        </div>
    );
};

export default Bandlist;